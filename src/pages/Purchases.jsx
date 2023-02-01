import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPuchasesThunk } from '../store/slices/puchases.slice';

const Purchases = () => {

    const puchases = useSelector(state => state.puchases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPuchasesThunk())
    }, [])
        
    return (
        <div>
            <h1>Compras</h1>
        </div>
    );
};

export default Purchases;