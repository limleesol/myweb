

function Login2(){

  return(
      <div>
      <Input/>
      <Button onClick = { (e) => {
        console.log(e)
        alert(e.target.value)
      } }> 로그인! </Button>
      </div>

  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "아무것도 입력하지 않았습니다."}
  }

    render(){
      return(
        <div>
        <Input onChange = { (e) => this.setState({id : e.target.value })  }/>
        <Button value = {this.state.id} onClick = { (event) => {
          alert(this.state.id)
        } }> Login </Button>
        </div>

      )
    }
}


<Login / >
