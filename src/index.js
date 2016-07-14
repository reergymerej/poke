import fetch from 'node-fetch';
const url = 'https://classflowdev2.prometheanjira.com/classflow';
const intervalMS = 20000;

function isDesiredStatus(status) {
    return status !== 403;
}

function check() {
    console.log(`[${new Date()}] checking...`);
    fetch(url).then(
        resp => {
            const {status} = resp;
            if (!isDesiredStatus(status)) {
                setTimeout(() => {
                    check();
                }, intervalMS);
            } else {
		console.log(`status: ${status}`);
                console.log(`[${new Date()}] it's ready`);
            }
        }
    )
}

check();
