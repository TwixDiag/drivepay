'use client'

import './AirportList.scss';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";


const translate: any = {
    lt: {
        title: 'DrivePay | Начало работы',
    },
    en: {
        title: 'DrivePay | Начало работы',
    },
    ru: {
        title: 'DrivePay | Начало работы',
    }
}

const GetHtml = () => {

    const [data, setData] = useState("");
    const hasFetched = useRef(false); // Проверка, был ли запрос
    useEffect(() => {
        if (hasFetched.current) return;  // Если запрос уже был выполнен, пропускаем

        fetch('/api/getAirport')
            .then((res) => res.text())  // Или res.text() в зависимости от типа данных
            .then((data) => {
                setData(data);      // Сохраняем данные в состоянии
                hasFetched.current = true;  // Отмечаем, что запрос был выполнен
            })
            .catch((err) => {
                console.error('Ошибка при запросе:', err);
            });
    }, []);  // Пустой массив зависимостей, чтобы запрос выполнялся только один раз

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const rows = doc.querySelectorAll('tbody.dumb-pager-items tr');

    const flights = Array.from(rows).map(row => {
        const scheduledTime = row.querySelector('td[data-label="Laikas"] del')?.textContent?.trim() || '';
        const scheduledDate = row.querySelector('td[data-label="Laikas"] .light-sm')?.textContent?.trim() || '';

        const updatedTime = row.querySelector('td[data-label="Patikslintas laikas"] .bold-lg')?.textContent?.trim() || '';
        const updatedDate = row.querySelector('td[data-label="Patikslintas laikas"] .light-sm')?.textContent?.trim() || '';

        const city = row.querySelector('td[data-label="Atvyksta iš"] .bold-lg')?.textContent?.trim() || '';
        const airline = row.querySelector('td[data-label="Atvyksta iš"] .light-sm')?.textContent?.trim() || '';

        const flightNumber = row.querySelector('td[data-label="Skrydžio numeris"] a')?.textContent?.trim() || '';
        const status = row.querySelector('td[data-label="Būsena"] .bold-lg')?.textContent?.trim() || '';

        return {
            scheduledTime,
            scheduledDate,
            updatedTime,
            updatedDate,
            city,
            airline,
            flightNumber,
            status,
        };
    });

    return flights;

    // console.log(flights);
}

export interface Data {
    scheduledTime: string,
    scheduledDate: string,
    updatedTime: string,
    updatedDate: string,
    city: string,
    airline: string,
    flightNumber: string,
    status: string
}

export default function AirportList() {
    const { lang } = useParams();

    const t = translate[lang];

    const dataHtml = GetHtml();

    console.log(dataHtml);

    return (
        <div className="content">
            {
                dataHtml.map((item: Data, index: number) => (
                    <div key={index} className='airportLine'>
                        <div className="airportLine-title">
                            <span>Scheduled Time:</span>
                            <span>Updated Time:</span>
                            <span>City:</span>
                            <span>Status:</span>
                        </div>
                        <div className="airportLine-info">
                            <span>{item.scheduledTime}</span>
                            <span>{item.updatedTime}</span>
                            <span>{item.city}</span>
                            <span>{item.status}</span>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}