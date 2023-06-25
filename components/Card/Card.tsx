'use client'
import RemoveIcon from '../../assets/icons/remove-circle.svg';
import AddIcon from '../../assets/icons/add-circle.svg';
import { useState } from 'react';
import Image from 'next/image'
import { useParams } from 'next/navigation';

const translate: any = {
    lt: {
        calculator: 'Kainos skaičiuoklė',
        pickupFrom: 'Paėmimas iš',
        deliveryTo: 'Pristatymas į',
        address: 'Adresas',
        postalCode: 'Pašto kodas',
        shippingCount: 'Siuntų kiekis',
        shippingSizes: 'Siuntų dydžiai',
        calculate: 'Skaičiuoti',
        box: 'Dėžė',
        docs: 'Dokumentai',
        mail: 'Laiškas',
        palette: 'Paletė',
        weight: 'Svoris kg',
        lenght: 'Ilgis cm',
        height: 'Plotis cm',
        width: 'Aukštis cm',
    },
    en: {
        calculator: 'Price calculator',
        pickupFrom: 'Pickup from',
        deliveryTo: 'Delivery to',
        address: 'Address',
        postalCode: 'Postal code',
        shippingCount: 'Shipment quantity',
        shippingSizes: 'Shipment sizes',
        calculate: 'Calculate',
        box: 'Box',
        docs: 'Documents',
        mail: 'Letter',
        palette: 'Palette',
        weight: 'Weight kg',
        lenght: 'Length cm',
        height: 'Height cm',
        width: 'Width cm',
    },
    ru: {
        calculator: 'Калькулятор цены',
        pickupFrom: 'Погрузка',
        deliveryTo: 'Доставка',
        address: 'Адрес',
        postalCode: 'Почтовый код',
        shippingCount: 'Кол-во посылок',
        shippingSizes: 'Размер посылки',
        calculate: 'Считать',
        box: 'Коробка',
        docs: 'Документы',
        mail: 'Письмо',
        palette: 'Палета',
        weight: 'Масса кг',
        lenght: 'Длина см',
        height: 'Высота см',
        width: 'Ширина см',
    }
}


export default function Card() {
    const [shippingCount, setCount] = useState(1);

    const { lang } = useParams();

    const t = translate[lang];

    function shippingItemsType() {
        const shippingItemTypeList = [];
        for (let i = 1; i <= shippingCount; i++) {
            shippingItemTypeList.push(
                <div className="shipping-types_item" key={i}>
                    <div className="count">
                        <span>{i}</span>
                    </div>
                    <div className="shipping-types_type">
                        <span>{t.box}</span>
                    </div>
                    <div className="shipping-types_type">
                        <span>{t.docs}</span>
                    </div>
                    <div className="shipping-types_type">
                        <span>{t.mail}</span>
                    </div>
                    <div className="shipping-types_type active">
                        <span>{t.palette}</span>
                    </div>
                </div>
            );
        }
        return shippingItemTypeList;
    }

    function shippingItemsSize() {
        const shippingItemSizeList = [];
        for (let i = 1; i <= shippingCount; i++) {
            shippingItemSizeList.push(
                <div className="shipping_item" key={i}>
                    <div className="count">
                        <span>{i}</span>
                    </div>
                    <div className="shipping_item_fields">
                        <div className="weight">
                            <input type="text" placeholder={t.weight} />
                        </div>
                        <div className="lenght">
                            <input type="text" placeholder={t.lenght} />
                        </div>
                        <div className="width">
                            <input type="text" placeholder={t.width} />
                        </div>
                        <div className="height">
                            <input type="text" placeholder={t.height} />
                        </div>

                    </div>
                </div>
            );
        }
        return shippingItemSizeList;
    }
    return (
        <div className="right-section">
            <div className="right-section-calculator">
                <div className="title">
                    <h3>{t.calculator}</h3>
                </div>
                <div className="shipping-route">
                    <div className="country-field">
                        <input type="text" value="Lietuva" disabled />
                    </div>
                    <div className="title">
                        <h4>{t.pickupFrom}</h4>
                    </div>
                    <div className="location-field margin-bottom">
                        <div className="location-field_address">
                            <input className="location" type="text" placeholder={t.address} />
                        </div>
                        <div className="location-field_details">
                            <div className="select">
                                <select id="city" name="city">
                                    <option value="Vilnius">Vilnius</option>
                                    <option value="Kaunas">Kaunas</option>
                                    <option value="Klaipėda">Klaipėda</option>
                                    <option value="Panevežys">Panevežys</option>
                                </select>
                            </div>
                            <div className="field">
                                <input type="text" placeholder={t.postalCode} />
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <h4>{t.deliveryTo}</h4>
                    </div>
                    <div className="location-field">
                        <div className="location-field_address">
                            <input className="location" type="text" placeholder={t.address} />
                        </div>
                        <div className="location-field_details">
                            <div className="select">
                                <select id="city" name="city">
                                    <option value="Vilnius">Vilnius</option>
                                    <option value="Kaunas">Kaunas</option>
                                    <option value="Klaipėda">Klaipėda</option>
                                    <option value="Panevežys">Panevežys</option>
                                </select>
                            </div>
                            <div className="field">
                                <input type="text" placeholder={t.postalCode} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <div className="item-count">
                        <h4>{t.shippingCount}</h4>
                        <div className="remove" onClick={() => shippingCount > 1 ? setCount(shippingCount - 1) : ''}>
                            <Image src={RemoveIcon} alt="Pašalinti" width={20} height={20} />
                        </div>
                        <div className="counter">
                            <span>{shippingCount}</span>
                        </div>
                        <div className="add" onClick={() => setCount(shippingCount + 1)}>
                            <Image src={AddIcon} alt="Pridėti" width={20} height={20} />
                        </div>
                    </div>
                </div>
                <div className="shipping-types">
                    {shippingItemsType()}
                </div>
                <div className="title">
                    <h5>{t.shippingSizes}</h5>
                </div>
                <div className="shipping-item-sizes">
                    {shippingItemsSize()}
                </div>
            </div>
            <div className="button">
                <a href="/skaiciuoti">{t.calculate}</a>
            </div>
        </div>
    )
}