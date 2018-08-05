// This file isn't used yet, its a POC for the future as a way to implement
// subscribable events

class EventListener {
    constructor(notificationObj, notificationFunc, eventTypeTag) {
        this.notificationObj = notificationObj;
        this.notificationFunc = notificationFunc;
        this.eventTypeTag = eventTypeTag;
    }
}

class EventStream {
    constructor() {
        this.listeners = [];
    }

    addEvent(notifyingObj, eventTypeTag, eventTime) {
        var eventArgs = { "notifyingObj": notifyingObj, "eventTypeTag": eventTypeTag, "eventTime": eventTime }
        this.listeners.filter(x => x.eventTypeTag == eventTypeTag).map(x => x.notificationObj.notificationFunc(eventArgs));
    }

    subscribe(obj, eventTypeTag) {
        this.listeners.push(new EventListener(obj, eventTypeTag))
    }

    unsubscribe(obj, eventTypeTag) {
        this.listeners = this.listeners.filter(x => x.notificationObj != obj && x.eventTypeTag != eventTypeTag);
    }
}