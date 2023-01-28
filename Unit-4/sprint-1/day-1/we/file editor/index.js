const {writefile,readfile,deletefile,appendfile,renamefile,list} = require("./file")

const process = require("process")
const commands= process.argv[2]
const x= process.argv[3]
const y= process.argv[4]


switch(commands){
    case "wf":
      writefile(x,y)
      break;
      case "rf":
       readfile(x)
        break; 
        case "dl":
            deletefile(x)
            break;
            case "ad":
                appendfile(x,y)
                break;
                case "rnf":
                    renamefile(x,y)
                    break;
                    case "rd":
                    list(x)
                    break;


      default : console.log("i am random")  

      
}
