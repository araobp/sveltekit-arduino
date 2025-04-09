import { SerialPort } from 'serialport';

const PORT = "/dev/cu.usbmodem101";
const BAUD_RATE = 9600;
const port = new SerialPort({
    path: PORT,
    baudRate: BAUD_RATE,
});

export async function POST({ url }) {

    const switch_ = url.searchParams.get('switch');
    var cmd = '0';
    if (switch_ == "on") {
        cmd = '1';
    } else if (switch_ == "off") {
        cmd = '0';
    } else {
        return new Response("Invalid switch value", { status: 400 });
    }

    port.write(cmd, err => {
        console.log(err);
        if (err) {
            console.log('Error on write: ', err.message);
            return new Response("Error on write", { status: 500 });
        } else {
            console.log('Message written');
            return new Response("Message written", { status: 200 });
        }
    });
}