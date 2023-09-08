document.addEventListener("DOMContentLoaded", function() {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    function updateDateTime() {
        const daysOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        const dayOfWeek = daysOfWeek[now.getUTCDay()];
        const utcTime = now.getTime();

        slackUserName.textContent = "Nick Laniyi";
        currentDayOfTheWeek.textContent = `Current Day: ${dayOfWeek}`;
        currentUTCTime.textContent = `Current UTC Time: ${utcTime}`


    }

    updateDateTime();
});