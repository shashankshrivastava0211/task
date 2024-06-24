import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPlan } from './utils/cartSlice';
import { PLANS,  } from './utils/constants';

const SelectPlan = () => {
    const [isYearly, setIsYearly] = useState(false);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    

    const handlePlanSelect = (plan) => {
        const cost = isYearly ? plan.yearlyCost : plan.monthlyCost;
        dispatch(selectPlan({name:plan.name , cost}))
    };

    return (
        <div className='w-full md:w-6/12 h-auto rounded-xl p-4'>
            <h2 className="font-serif text-xl p-3 font-bold">Select your plan</h2>
            <h6 className='pl-3'>You have the option for monthly and yearly billing</h6>
            <div className='container pt-8 flex gap-7'>
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className="h-32 w-24 rounded-xl shadow-lg cursor-pointer flex flex-col items-center justify-between p-4"
                        onClick={() => handlePlanSelect(plan)}
                    >
                        <div className='text-2xl'>{plan.icon}</div>
                        <div className='text-center'>
                            <p className='font-semibold'>{plan.name}</p>
                            <p className='text-gray-500'>{isYearly ? plan.yearlyCost : plan.monthlyCost}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-8 flex w-full">
                <label className="mr-3 font-semibold">Monthly</label>
                <div className="relative inline-block w-12 mr-2 align-middle">
                    <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        checked={isYearly}
                        onChange={handleToggle}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                        htmlFor="toggle"
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${isYearly ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></label>
                </div>
                <label className="ml-3 font-semibold">Yearly</label>
            </div>
            <div className='pt-40 flex gap-11'>
                <Link to={"/"}><button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>Prev</button></Link>
                <Link to={"/select"}> <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>Next</button></Link>
            </div>
        </div>
    );
};

export default SelectPlan;
