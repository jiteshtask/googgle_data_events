import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

import  CommonModel  from '../common/Model';
import { DATE_VALUE } from '../../actions/date_action_types';

const localizer= Calendar.momentLocalizer(moment);

const Datepicker =props => {
	const[show, handleShow] = useState(false)
	const[msg, handlemsg] = useState(null)
	const[title, handleTitle] = useState(null)
	const[events, handleEvents] = useState([
		{
			start: new Date(),
			end: new Date(),
			title: "Event 1"
		},
		{
			start: new Date(),
			end: new Date(),
			title: "Event 2"
		},
		{
			start: new Date(),
			end: new Date(),
			title: "Event 3"
		},
		{
			start: new Date(),
			end: new Date(),
			title: "Event 4"
		},
		{
			start: new Date(),
			end: new Date(),
			title: "Event 5"
		}
	])

	useEffect(()=>{
		if(props.dateObj && props.dateObj.msg){
			let { title, msg }= props.dateObj;
			handleShow(true);
			handleTitle(title);
			handlemsg(msg)
		}

	},[props.dateObj])
		

	const onView= (event)=> {
		let msgObj= {
			title: `${event} wise`,
			msg: `You are able to show calendar ${event} wise`
		};
		props.changeDateObj(msgObj);
	}

	const onSelectEvent= (event)=> {
		let { start, end, title }= event;
		let startDate= moment(start).format('DD/MM/YYYY');
		let endDate= moment(end).format('DD/MM/YYYY');
		let msgObj= {
			title: 'onSelectEvent',
			msg: `You have seleced Event 1 Which is available from ${startDate} to ${endDate}`
		};
		props.changeDateObj(msgObj);
	}

	const onNavigate= (date, selectedRangle, buttonName)=> {
		let month= new Date(date).getMonth() + 1;
		let msgObj= {
			title: `You just click on ${buttonName} button`,
			msg: `You are able to show ${month}th month`
		};
		props.changeDateObj(msgObj);
	}

	const onDrillDown= (date, selectedRangle, buttonName)=> {
		let dateVal= moment(date).format('DD/MM/YYYY');
		let msgObj= {
			title: `You just click on truncated button`,
			msg: `You are able to show remaining event of ${dateVal} date.`
		};
		props.changeDateObj(msgObj);
	}

	const onSelectSlot= (slot)=> {
		let { start, end }= slot;
		let startDate= moment(start).format('DD/MM/YYYY');
		let endDate= moment(end).format('DD/MM/YYYY');
		let msgObj= {
			title: `the slot`,
			msg: `You have selected a slot from ${startDate} to ${endDate}.`
		};
		props.changeDateObj(msgObj);
	}

	

	const handleHide= ()=> {
		handleShow(false)
	}


		return (
			<div>
				<Calendar
					localizer= {localizer}
					defaultDate= {new Date()}
					defaultView= "month"
					drilldownView="month"
					selectable= {true}
					onView= { onView }
					onSelectEvent= {onSelectEvent}
					onNavigate= {onNavigate}
					onDrillDown= {onDrillDown}
					onSelectSlot= {onSelectSlot}
					events= {events}
				/>
				{ show &&
					<CommonModel title= {title} msg= {msg} handleHide= {handleHide} classes="in"/>
				}
			</div>
		)
	}


const mapStateToProps= state=> {
	return {
		dateObj: state.date_reducer.get('dateObj')
	}
}

const mapDispatchToProps= dispatch=> {
	return {
		changeDateObj: (msgObj)=> dispatch({
			type: DATE_VALUE,
			payload: msgObj
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);