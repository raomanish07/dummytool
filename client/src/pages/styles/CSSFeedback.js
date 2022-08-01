import { makeStyles } from '@material-ui/core/styles';
export const CSSFeedback = makeStyles({
    root:{
        width:'100%',
        height:window.innerHeight-80,
        padding:30
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        width:550,
        height:50,
        alignItems:'center',
        '& label':{
            padding:10
        }
    },
    search:{
        marginLeft:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    input:{
       paddingLeft:10,
       paddingRight:10,
       width:240
    },
    searchInput:{
        border:'none',
        outline:'none'
    },
    col1:{
        width:200,
        paddingRight:10
    },
    selectEmpty:{
        width:80
    },
    errmsg:{
        marginTop:10,
        color:'red',
        fontSize:12,
    },
    container:{
        width:'100%',
        height:window.innerHeight-300,
        overflowY:'auto'
    },
    lblmanager:{
        marginBottom:20,
        textAlign:'right',
        display:'inline-block'
    },
    btnDownloadholder:{
        width:'100%',
        marginTop:20,
        textAlign:"center"
    },
    btnDownload:{
        width:200
    },
    noFeedback:{
        width:300,
        height:100,
        marginTop:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    divider:{
        marginBottom:20
    },
    feedbackDisabled:{
        height:100,
        display:'inline-block',
        resize:'none'
    },
    inputDisabled:{
        display:'inline',
        marginTop:10
    },
    ef:{
        marginTop:'-20%'
    }
})