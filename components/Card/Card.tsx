'use client'

import './Card.scss';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import React from "react";

import data from "../../db.json";

export interface DataList {
    name: string,
    sex: number,
    birthday: string,
    color: number,
    desc: string;
}

const translate: any = {
    lt: {
        title: 'Naudojimosi pradzia',
        color: 'Spalva',
        birthday: 'Gimimo data',
        sex: {
            1: 'Kalė',
            2: 'Patinas',
        },
        colorr: {
            1: 'Raudona su baltom dėmėm',
            2: 'Raudona',
            3: 'Juodos šerdelės su baltom dėmėm',
            4: 'Auksinis',
        },
        more: 'Skaityti daugiau',
    },
    en: {
        title: 'Our dogs',
        color: 'Color',
        birthday: 'Date of Birth',
        sex: {
            1: 'Female',
            2: 'Male',
        },
        colorr: {
            1: 'Red with white spots',
            2: 'Red',
            3: 'Black cores with a white spot',
            4: 'Gold',
        },
        more: 'Read more',
    },
    ru: {
        title: 'Наши собаки',
        color: 'Цвет',
        birthday: 'Дата рождения',
        sex: {
            1: 'Самка',
            2: 'Самец',
        },
        colorr: {
            1: 'Красный с белыми пятнами',
            2: 'Красный',
            3: 'Черные сердечки с белыми пятнами',
            4: 'Золотой',
        },
        more: 'Читать дальше',
    }
}

export default function Card() {

    const { lang } = useParams();

    const t = translate[lang];

    const [moreDogInfo, setDogInfo] = useState(-1);

    return (
        <div className="content" >
            <div className="title">
                <h1>{t.title}</h1>
            </div>
            <div className="start-inputs">
                <input type="text" id="city" placeholder="Введите ваш город" />
                <input type="text" id="schedule" placeholder="Введите рабочий график" />
                <input type="number" id="wage" placeholder="Введите часовую оплату" />
                <button className="primary-btn">Сохранить</button>
            </div>


            {/* {
                // moreDogInfo != -1 && <div>{data.ourDogs[moreDogInfo].name}</div>
                moreDogInfo != -1 &&
                <div className="dogInfo-wrapper">
                    <div className="dogInfo-block">
                        <div className="closeInfo" onClick={() => setDogInfo(-1)}>
                            <img src={closeMenuIcon.src} alt="Navigacija" />
                        </div>
                        <div className="dog-img">
                            <img src={getBgImg(data.ourDogs[moreDogInfo].name)} alt={data.ourDogs[moreDogInfo].name} />
                        </div>
                        <div className="dog-info">
                            <h3>{data.ourDogs[moreDogInfo].name}</h3>
                            <span>{t.sex[data.ourDogs[moreDogInfo].sex]}</span>
                            <span>{t.birthday}: {data.ourDogs[moreDogInfo].birthday}</span>
                            <span>{t.color}: {t.colorr[data.ourDogs[moreDogInfo].color]}</span>
                            <div className="dog-desc">
                                <p>{data.ourDogs[moreDogInfo].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            } */}
        </div >
    )
}