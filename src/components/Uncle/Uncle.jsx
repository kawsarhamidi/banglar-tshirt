import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>uncle</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={()=>setMoney(money + 1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;