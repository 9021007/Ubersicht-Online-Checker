export const command = "echo Hello World!"

export const refreshFrequency = 250 // ms

var status = "Unknown";
var color = "#ddd";

setInterval(() => {
    if (navigator.onLine.toString() === "true") {
        status = "Online";
        color = "#0d0";
    } else {
        status = "Offline";
        color = "#d00";
    }
}, 50);



export const render = ({ output }) => (
    <div id="checker"><h1>{status}</h1><style>
        {`
        #checker {
            position: fixed;
            margin-left: 20px;
            margin-top: 335px;
            
        }
        #checker h1 {
            color: ${color};
            font-size: 30px;
            border: 0px solid #000;
            border-radius: 10px;
            background-color: #00000055;
            padding: 10px;
            font-family: 'Source Code Pro', monospace;
        `}
    </style></div>
)

export const className = `
  left: 20px
  top: 20px
  color: #fff
`



