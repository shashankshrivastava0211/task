import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddOns } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import { ADD_ONS } from '../utils/constants';

const AddOns = () => {
    const dispatch = useDispatch();
    const selectedAddOns = useSelector(state => state.plan.selectedAddOns);

    const handleCheckboxChange = (planName, cost) => {
        const isSelected = selectedAddOns.some(addOn => addOn.plan === planName);
        let updatedSelectedAddOns;

        if (isSelected) {
            updatedSelectedAddOns = selectedAddOns.filter(addOn => addOn.plan !== planName);
        } else {
            updatedSelectedAddOns = [...selectedAddOns, { plan: planName, cost }];
        }

        dispatch(selectAddOns(updatedSelectedAddOns));
    };

    return (
        <div className='w-4/12 md:w-6/12 h-auto rounded-xl p-4'>
            <div className='heading font-serif text-lg font-bold mb-4'>
                <h2 className='text-lg'>Pick add-ons</h2>
                <h5 className='font-serif'>add-ons help enhance gaming experience</h5>
            </div>
            <div className='buttonContainer p-2'>
                {
                    ADD_ONS.map((plan, index) => (
                        <div key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
                            <input 
                                type="checkbox" 
                                className="mr-4" 
                                checked={selectedAddOns.some(addOn => addOn.plan === plan.plan)}
                                onChange={() => handleCheckboxChange(plan.plan, plan.cost)}
                            />
                            <div className="flex flex-col flex-grow">
                                <span className="font-bold">{plan.plan}</span>
                                <p className="text-sm text-gray-500">{plan.description}</p>
                            </div>
                            <div className="text-right font-semibold">
                                {plan.cost}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='pt-40 flex gap-11'>
                <Link to="/select">
                    <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>
                        Prev
                    </button>
                </Link>
                <Link to="/summary">
                    <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AddOns;
