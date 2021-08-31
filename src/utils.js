const context = new window.AudioContext();
let ids = [];
export const map = new Map();
export const mapPlay = new Map();

export const play = (value, event) => {
    if (event) ids.push(event);

    map.set(event, true);
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.type = "sine";

    oscillator.frequency.value = value;
    gain.gain.setValueAtTime(0.1, 0);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 3);

    oscillator.start(context.currentTime);
    mapPlay.set(event, {
        oscillator: oscillator,
        context: context.currentTime,
    });
};

export const stop = (event, time) => {
    if (event && ids.length && !mapPlay.get(event)) {
        event = ids[0];
        ids = [];
    }

    const { oscillator, context } = mapPlay.get(event);
    if(oscillator && context) {
        oscillator.stop(context + time);
        ids = [];
        map.set(event, "");
        mapPlay.set(event, "");
    }
};
