export const handleTitle = (events, field) =>{
    
    const value = field.value;
    
    var event = events.state.event;
    event.title = value
    events.setState({
        event: event
    });
};

export const handleStart = (events, field) =>{
    
    const value = field.value;
    
    var event = events.state.event;
    event.start = value
    events.setState({
        event: event
    });
};

export const handleEnd = (events, field) =>{
    
    const value = field.value;
    
    var event = events.state.event;
    event.end = value
    events.setState({
        event: event
    });
};