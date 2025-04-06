'use client'

import './OrdersList.scss';
import { useParams } from 'next/navigation';
import React from "react";
import { useState } from 'react';
import daysData from '../../db.json';
import ordersData from '../../orders.json';
import clsx from 'clsx';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import setArrayCookie from '@/utils/setArrayCookie';
import getCookie from '@/utils/getCookie';
import setCookie from '@/utils/setCookie';
import deleteCookie from '@/utils/deleteCookie';
import updateArrayCookie from '@/utils/updateArrayCookie';

export interface OrdersList {
    orderTime: string,
    pickupAddress: string,
    orderPrice: number,
    cancelPrice: number,
    tea: number,
    currency: string,
    payMethod: string,
    orderRange: number,
    orderStatus: string
}

export interface DataList {
    date: string,
    workStart: string,
    workFinish: string,
    range: number,
    pay: number;
}

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

function getAllPay(date: string) {
    let allpay = 0;
    ordersData.map((item: OrdersList, index: number) => (
        date === item.orderTime.split(' ')[0] ? allpay += item.orderPrice : ''
    ))
    return allpay;
}

function getAllRange(date: string) {
    let allrange = 0;
    ordersData.map((item: OrdersList, index: number) => (
        date === item.orderTime.split(' ')[0] ? allrange += item.orderRange : ''
    ))
    return allrange;
}

function ordersList(date: string) {
    return <div>
        {
            ordersData.map((item: OrdersList, index: number) => (
                date === item.orderTime.split(' ')[0] ?
                    <div className='order-list-item' key={index}>
                        <div className="order-item-dateandpay">
                            <div className="order-date">
                                <span className="date">{item.orderTime.split(' ')[0]}</span>
                                <span className="timeandrange">{item.orderTime.split(' ')[1]} | {item.orderRange}km</span>
                            </div>
                            <div className="order-pay">
                                <span className="pay">{item.orderPrice}{item.currency}</span>
                            </div>
                        </div>
                        <div className="order-item-address">
                            <span className="address">{item.pickupAddress}</span>
                        </div>
                    </div>
                    :
                    <div key={index}></div>
            ))
        }
    </div>
}

function formatDate(date: any) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}


export default function OrdersList() {
    const { lang } = useParams();

    const t = translate[lang];

    const [showOrders, setShowOrders] = useState("none");
    const [showAddNewDay, setNewDay] = useState(0);
    let daysDataList = getCookie('daysList') || [0];

    console.log(daysDataList);

    // deleteCookie('daysList');


    function getPrevDays() {
        return (
            daysDataList.map((item: any, index: number) => (
                <div key={index}>
                    <div className="day-wrapper" onClick={() => setShowOrders(item.newDate)}>
                        <div className="day-and-offer">
                            <span className='day'>{item.newDate}</span>
                            <span className='offer'>{item.workStart} - {item.workFinish} | {item.rangeValue} km</span>
                        </div>
                        <div className="pay">
                            <span>{item.payValue}€</span>
                        </div>
                    </div>
                </div>
            ))
        )
    }


    function addNewDay() {
        const date = document.getElementById('date') as HTMLInputElement | null;
        const pay = document.getElementById('pay') as HTMLInputElement | null;
        const range = document.getElementById('range') as HTMLInputElement | null;

        if (!date || !pay || !range) {
            console.error("Элементы не найдены");
            return;
        }
        let payValue = pay.value;
        let rangeValue = range.value;
        let dateString = new Date(date.value);
        let newDate = formatDate(dateString);

        const days = {
            newDate: newDate,
            payValue: payValue,
            rangeValue: rangeValue,
            workStart: '20:00',
            workFinish: '04:00',
        };

        const newDaysData = { days: [days] };
        let getdaysList = getCookie('daysList');

        if (getdaysList) {
            getdaysList.map((item: any, index: number) => {
                if (item.newDate === newDate) {
                    console.log('This date exist');
                } else {
                    updateArrayCookie('daysList', newDaysData.days)
                }
            })
        } else {
            updateArrayCookie('daysList', newDaysData.days)
        }
        location.reload();
    }

    return (
        <div className="content">
            <div className="titleDate" onClick={() => setShowOrders("none")}>
                {
                    showOrders == "none" ?
                        <h3>{new Date().getDate()} апреля</h3> :
                        <>
                            <img src={ArrowBack.src} alt="Back" />
                            <h3>Поездки {showOrders}</h3>
                        </>
                }
            </div>
            {
                showOrders == "none" ?
                    <div className="add-new-day">
                        <button onClick={() => showAddNewDay ? setNewDay(0) : setNewDay(1)}>Ввести заработок</button>
                    </div> :
                    <div className="order-list-offer">
                        <span>Заработок: {getAllPay(showOrders)}€</span>
                        <span>Расстояние (без учета км до клиента): {getAllRange(showOrders)} km</span>
                    </div>
            }

            {
                showOrders == "none" ?
                    showAddNewDay ?
                        <div className="addNewDay">
                            <input type="date" id="date" />
                            <input type="number" id="pay" placeholder='Pay' />
                            <input type="number" id="range" placeholder='Range' />
                            <button onClick={() => addNewDay()}>Сохранить</button>
                        </div>
                        :
                        <div className="prev-days">
                            <span className='prev-offer'>Ранее</span>
                            {/* {
                                daysData.days.map((item: DataList, index: number) => (
                                    <div key={index}>
                                        <div className="day-wrapper" onClick={() => setShowOrders(item.date)}>
                                            <div className="day-and-offer">
                                                <span className='day'>{item.date}</span>
                                                <span className='offer'>20:00 - 04:00 | {item.range} km</span>
                                            </div>
                                            <div className="pay">
                                                <span>{item.pay}€</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            } */}
                            {
                                getPrevDays()
                            }

                        </div> :
                    ordersList(showOrders)
            }
        </div>
    )
}