'use client'

import './Registration.scss';
import { useParams } from 'next/navigation';
import React from "react";
import { useState } from 'react';
import OrdersList from '../OrdersList/OrdersList';
import setCookie from '@/utils/setCookie';
import getCookie from '@/utils/getCookie';
import getArrayCookie from '@/utils/getArrayCookie';
import deleteCookie from '@/utils/deleteCookie';
import setArrayCookie from '@/utils/setArrayCookie';

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

function deleteProfile() {
    deleteCookie('city');
    deleteCookie('workTime');
    deleteCookie('pay');
    location.reload();
}

export default function Registration() {
    const { lang } = useParams();

    const t = translate[lang];

    const [showAllDays, setShowAllDays] = useState(false);

    const cityName = getCookie('city');
    const workTimeData = getArrayCookie('workTime');
    const payData = getCookie('pay');


    function uploadData() {
        const cityElement = document.getElementById('city') as HTMLInputElement | null;
        const payElement = document.getElementById('pay') as HTMLInputElement | null;

        if (!cityElement || !payElement) {
            console.error("Элементы не найдены");
            return;
        }

        const city = cityElement.value;
        const pay = payElement.value;

        if (showAllDays) {
            const workTime = {
                day1: `${(document.getElementById('timefrom1') as HTMLInputElement)?.value} - ${(document.getElementById('timeto1') as HTMLInputElement)?.value}`,
                day2: `${(document.getElementById('timefrom2') as HTMLInputElement)?.value} - ${(document.getElementById('timeto2') as HTMLInputElement)?.value}`,
                day3: `${(document.getElementById('timefrom3') as HTMLInputElement)?.value} - ${(document.getElementById('timeto3') as HTMLInputElement)?.value}`,
                day4: `${(document.getElementById('timefrom4') as HTMLInputElement)?.value} - ${(document.getElementById('timeto4') as HTMLInputElement)?.value}`,
                day5: `${(document.getElementById('timefrom5') as HTMLInputElement)?.value} - ${(document.getElementById('timeto5') as HTMLInputElement)?.value}`,
                day6: `${(document.getElementById('timefrom6') as HTMLInputElement)?.value} - ${(document.getElementById('timeto6') as HTMLInputElement)?.value}`,
                day7: `${(document.getElementById('timefrom7') as HTMLInputElement)?.value} - ${(document.getElementById('timeto7') as HTMLInputElement)?.value}`,
            };
            const newSettingsData = { city, workTime: [workTime], pay };
            setCookie('city', newSettingsData.city);
            setArrayCookie('workTime', newSettingsData.workTime);
            setCookie('pay', newSettingsData.pay);
        } else {
            const workTime = {
                day1: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day2: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day3: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day4: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day5: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day6: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
                day7: `${(document.getElementById('timefromall') as HTMLInputElement)?.value} - ${(document.getElementById('timetoall') as HTMLInputElement)?.value}`,
            };
            const newSettingsData = { city, workTime: [workTime], pay };
            setCookie('city', newSettingsData.city);
            setArrayCookie('workTime', newSettingsData.workTime);
            setCookie('pay', newSettingsData.pay);
        }

        location.reload();
    }

    return (
        <div className="content">
            {cityName == null && workTimeData == null && payData == null ?
                <>
                    <div className="title">
                        <h1>{t.title}</h1>
                    </div>
                    <div className="start-inputs">
                        <div className="input-title">
                            <h3>Выберите город</h3>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" id="city" placeholder="Vilnius, Kaunas, Klaipėda" />
                        </div>
                        <div className="input-title">
                            <h3>Настройте рабочий график</h3>
                        </div>
                        <div className="input-select-wrapper">
                            {
                                showAllDays ? <div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Понедельник</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom1" />
                                            <input type="time" id="timeto1" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Вторник</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom2" />
                                            <input type="time" id="timeto2" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Среда</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom3" />
                                            <input type="time" id="timeto3" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Четверг</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom4" />
                                            <input type="time" id="timeto4" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Пятница</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom5" />
                                            <input type="time" id="timeto5" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Суббота</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom6" />
                                            <input type="time" id="timeto6" />
                                        </div>
                                    </div>
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Воскресенье</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefrom7" />
                                            <input type="time" id="timeto7" />
                                        </div>
                                    </div>
                                </div> :
                                    <div className="input-select-time">
                                        <h4 className="placeholder">Пн - Вс</h4>
                                        <div className="select-time-inputs">
                                            <input type="time" id="timefromall" />
                                            <input type="time" id="timetoall" />
                                        </div>
                                    </div>
                            }
                            <div className="input-select-switcher">
                                <div className="switcher">
                                    <input type="checkbox" className="checkbox" id="checkbox" onClick={() => showAllDays ? setShowAllDays(false) : setShowAllDays(true)} />
                                    <label className="switch" htmlFor="checkbox">
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <span className="switcher-label">Настроить каждый день</span>
                            </div>
                            <div className="input-title">
                                <h3>Доход €/час</h3>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="pay" placeholder="" />
                            </div>
                            <div className="button-wrapper">
                                <button onClick={() => { uploadData() }}>Продолжить</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <OrdersList />
                    {/* <button onClick={() => { deleteProfile() }}>Delete profile</button> */}
                </>
            }
        </div >
    )
}