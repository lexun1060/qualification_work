import React, {useEffect, useMemo, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTableData} from "../redux-components/actions/loadTableActions";
import {setDataUpdate} from "../redux-base-logic/common/actions";
import Loader from "../Loader";
import Message from "../Message";
import TableLoad from "../TableLoad";

const TablePage = ({match}) => {
    const dispatch = useDispatch()
    const tableId = match.params.id
    const [show, setShow] = useState(false)
    const {parsedData, loading, error} = useSelector(state => state.data)
    const {currentTableData} = useSelector(state => state.currentTableData)
    useMemo(() => {
        if (tableId) {
            dispatch(setCurrentTableData(tableId))
        }
    }, [dispatch, tableId])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return loading ? <Loader/> : error ?
        <Message variant="danger">{error}</Message> : parsedData === currentTableData ? (
            <TableLoad
                tableId={tableId}
                parsedData={parsedData}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />
        ) : <Loader/>
}

export default TablePage