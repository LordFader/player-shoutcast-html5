$(document).ready(function() {
    $("#headerLiveHolder").airtimeLiveInfo({
        sourceDomain: "http://radio.soundworks.live",
        text: {onAirNow:"On Air Now", offline:"Offline", current:"Current", next:"Next"},
        updatePeriod: 20 //seconds
    });
    $("#headerLiveTrackHolder").airtimeLiveTrackInfo({
        sourceDomain: "http://radio.soundworks.live",
        text: {onAirNow:"On Air Now", offline:"Offline", current:"Current", next:"Next"},
        updatePeriod: 20 //seconds
    });
    $("#onAirToday").airtimeShowSchedule({
        sourceDomain: "http://radio.soundworks.live",
        text: {onAirToday:"On air today"},
        updatePeriod: 5, //seconds
        showLimit: 10
    });
    $("#scheduleTabs").airtimeWeekSchedule({
        sourceDomain:"http://radio.soundworks.live",
        dowText:{monday:"Monday", tuesday:"Tuesday", wednesday:"Wednesday", thursday:"Thursday", friday:"Friday", saturday:"Saturday", sunday:"Sunday", nextmonday:"Next Monday", nexttuesday:"Next Tuesday",nextwednesday:"Next Wednesday", nextthursday:"Next Thursday",nextfriday:"Next Friday", nextsaturday:"Next Saturday", nextsunday:"NextSunday"},
        miscText:{time:"Time", programName:"Program Name", details:"Details", readMore:"Read More"},
        updatePeriod: 600 //seconds
    });
    var d = new Date().getDay();
    $('#scheduleTabs').tabs({selected: d === 0 ? 6 : d-1, fx: { opacity: 'toggle' }});

});