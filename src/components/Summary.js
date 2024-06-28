import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Summary = () => {
    const selectedPlan = useSelector(state => state.plan.selectedPlan);
    const selectedAddOns = useSelector(state => state.plan.selectedAddOns);

    // Calculate total cost of selected add-ons
    const totalCost = selectedAddOns.reduce((acc, addOn) => {
        // Ensure addOn.cost is a valid string before processing
        const costString = addOn.cost || '0';

        // Extract the numeric part of the cost string and parse it to a float
        const costNumeric = parseFloat(costString.replace(/[^\d.]/g, ''));
        return acc + costNumeric;
    }, selectedPlan ? parseFloat(selectedPlan.cost || '0') : 0);

    return (
        <div className='w-4/12 md:w-6/12 h-auto rounded-xl p-4'>
            <div className='heading font-serif text-lg font-bold mb-4 p-4'>
                <h2 className='text-lg'>Finishing Up</h2>
                <h5 className='font-serif'>Check everything before confirming</h5>
            </div>
            <div className='container pt-4 bg-slate-100'>
                <div className='header flex justify-between border-b-2 pb-2 mb-4'>
                    <div className='font-bold font-serif flex flex-col'>
                        <span>{selectedPlan ? selectedPlan.name : 'No Plan Selected'}</span>
                        <span className='text-sm text-gray-500'>{selectedPlan ? selectedPlan.description : ''}</span>
                    </div>
                    <div className='text-right font-semibold'>
                        {selectedPlan ? selectedPlan.cost +" "+"$" : ''}
                    </div>
                </div>
                <div className='addOns'>
                    <h3 className='font-bold mb-2 items-center'>Selected Add-Ons</h3>
                    {selectedAddOns && selectedAddOns.length > 0 ? (
                        <div className='flex flex-col gap-2'>
                            {selectedAddOns.map((addOn, index) => (
                                <div key={index} className='flex justify-between items-center p-2 border-b border-gray-300'>
                                    <div className='font-bold'>{addOn.plan}</div>
                                    <div className='text-right font-semibold'>{addOn.cost}</div>
                                </div>
                            ))}
                            <div className='flex justify-between items-center p-2 border-b border-gray-300'>
                                <div className='font-bold'>Total</div>
                                <div className='text-right font-semibold'>{totalCost.toFixed(2)}$</div>
                            </div>
                        </div>
                    ) : (
                        <p>No add-ons selected</p>
                    )}
                </div>
            </div>
            <div className='pt-4 flex gap-11'>
                <Link to="/addons">
                    <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>Prev</button>
                </Link>
                <Link to="/checkout">
                    <button className='pt-2 my-2 block w-16 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>Next</button>
                </Link>
            </div>
        </div>
    );
};

export default Summary;
