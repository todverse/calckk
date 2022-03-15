import React from 'react'
import './index.css'





class Answer extends React.Component {
    render() {
        return(
            <div className='answer'>
                <div className='answer_part'>
                    <p className='answer_answ'></p>
                    <p className='text_answer'>Необходимо что бы скинуть вес</p>
                </div>
                <div className='answer_part'>
                    <p className='answer_answ'></p>
                    <p className='text_answer'>Суточная норма </p>
                </div>
                <div className='answer_part'>
                    <p className='answer_answ'></p>
                    <p className='text_answer'>Необходимо что бы набрать вес</p>
                </div>
            </div>
        )
    }
}

class Physact extends React.Component {
    render() {
        return(
            <div className='physact'>
                <div className='physact_text-box'>
                    <h3 className='physact_text'>Физическая активность</h3>
                </div>
                <input className='ph_rad' id='a' type='radio' name='ph' onChange={this.props.intense}></input>
                <label htmlFor='a' id='al' className='ph_btn'>
                    Минимальная<br/>
                    <span className='ph_meta'>Сидячая работа и нет физических нагрузок</span>
                </label><br/>
                <input className='ph_rad' id='b' type='radio' name='ph' onChange={this.props.intense}></input>
                <label htmlFor='b' id='bl' className='ph_btn'>
                    Низкая<br/>
                    <span className='ph_meta'>Редкие нерегулярные тренировки, активность в быту</span>    
                </label><br/>
                <input className='ph_rad' id='c' type='radio' name='ph' onChange={this.props.intense}></input>
                <label htmlFor='c' id='al' className='ph_btn'>
                    Средняя<br/>
                    <span className='ph_meta'>Тренировки 3-5 раз в неделю</span>
                </label><br/>
                <input className='ph_rad' id='d' type='radio' name='ph' onChange={this.props.intense}></input>
                <label htmlFor='d' id='al' className='ph_btn'>
                    Высокая<br/>
                    <span className='ph_meta'>Тренировки 6-7 раз в неделю</span>
                </label><br/>
                <input className='ph_rad' id='e' type='radio' name='ph' onChange={this.props.intense}></input>
                <label htmlFor='e' id='al' className='ph_btn'>
                    Очень высокая<br/>
                    <span className='ph_meta'>Больше 6 тренировок в неделю и физическая работа</span>    
                </label><br/>
            </div>
        )
    }
}


class Awh extends React.Component {
    render() {
        return(
            <div className='awh'>
                <div className='awh_part'>
                    <h3 className='awh_part_text'>Возраст</h3>
                    <input className='awh_in' type='number' id='age' onChange={this.props.age}></input>
                </div>
                <div className='awh_part'>
                    <h3 className='awh_part_text'>Вес</h3>
                    <input className='awh_in' type='number' id='weight' onChange={this.props.weight}></input>
                </div>
                <div className='awh_part'>
                    <h3 className='awh_part_text'>Рост</h3>
                    <input className='awh_in' type='number' id='height' onChange={this.props.height}></input>
                </div>
            </div>
        )
    }
}


class Sex extends React.Component {
    render() {
        return(
            <div className='sex'>
                <h3 className='sex_text'>Укажите ваш пол</h3>
                <input className='sex_rad' id='male' type='radio' name='sex'></input>
                <label htmlFor='male' id='lblMale' className='sex_btn' onClick={this.props.male}>Мужчина</label>
                <input className='sex_rad' id='female' type='radio' name='sex'></input>
                <label htmlFor='female' id='lblFemale' className='sex_btn'onClick={this.props.female}>Женщина</label>
            </div>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sex : 'nun',
            age : 0,
            weight : 0,
            height : 0,
            intense : 0
        }
    }
    componentDidMount() {
        document.getElementsByClassName('calculate')[1].disabled = true;
        document.getElementsByClassName('answer')[0].style.display = 'none';
    }
    calc = () => {
        let ph = false;
        let awh = false;
        let sex = false;
        if(document.getElementsByClassName('ph_rad')[0].checked) {
            ph = true;
        } else if(document.getElementsByClassName('ph_rad')[1].checked) {
            ph = true;
        } else if(document.getElementsByClassName('ph_rad')[2].checked) {
            ph = true;
        } else if(document.getElementsByClassName('ph_rad')[3].checked) {
            ph = true;
        } else if(document.getElementsByClassName('ph_rad')[4].checked) {
            ph = true;
        }
        if(document.getElementsByClassName('sex_rad')[0].checked) {
            sex = true;
        } else if(document.getElementsByClassName('sex_rad')[1].checked) {
            sex = true;
        }
        if(document.getElementsByClassName('awh_in')[0].value != '' && 
        document.getElementsByClassName('awh_in')[1].value != '' && 
        document.getElementsByClassName('awh_in')[2].value != '') {
            awh = true
        }
        if(sex && ph && awh) { 
        document.getElementsByClassName('calculate')[1].disabled = false;
        document.getElementsByClassName('answer')[0].style.display = '';
        let answ;
        if(this.state.sex === 'male') {
            answ = Math.round((this.state.weight*10 + this.state.height*6.25 - this.state.age*5 + 5)*this.state.intense)
        } else if(this.state.sex === 'female') {
            answ = Math.round((this.state.weight*10 + this.state.height*6.25 - this.state.age*5 - 161)*this.state.intense)
        }
        document.getElementsByClassName('answer_answ')[0].innerHTML = answ - answ/4 + 'ккал';
        document.getElementsByClassName('answer_answ')[1].innerHTML = answ + 'ккал';
        document.getElementsByClassName('answer_answ')[2].innerHTML = answ + answ/4 + 'ккал';
        }
    }
    male = () => {
        this.setState({sex:'male'})
    }
    female = () => {
        this.setState({sex:'female'})
    }
    age = () => {
        let ag = Number(document.getElementById('age').value)
        this.setState({age : ag})
    }
    weight = () => {
        let ag = Number(document.getElementById('weight').value)
        this.setState({weight : ag})
    }
    height = () => {
        let ag = Number(document.getElementById('height').value)
        this.setState({height : ag})
    }
    intense = () => {
        if(document.getElementsByClassName('ph_rad')[0].checked) {
            this.setState({intense : 1.2})
        } else if(document.getElementsByClassName('ph_rad')[1].checked) {
            this.setState({intense : 1.38})
        } else if(document.getElementsByClassName('ph_rad')[2].checked) {
            this.setState({intense : 1.46})
        } else if(document.getElementsByClassName('ph_rad')[3].checked) {
            this.setState({intense : 1.55})
        } else if(document.getElementsByClassName('ph_rad')[4].checked) {
            this.setState({intense : 1.9})
        }
    }
    clear = () => {
        document.getElementsByClassName('answer')[0].style.display = 'none';
        document.getElementsByClassName('calculate')[1].disabled = true;
        this.setState({
            sex : 'nun',
            age : 0,
            weight : 0,
            height : 0,
            intense : 0
        })
        let ph = document.getElementsByClassName('ph_rad');
        for(let i = 0; i < ph.length; i++) {
            ph[i].checked = false;
        }
        let sex = document.getElementsByClassName('sex_rad');
        for(let i = 0; i < sex.length; i++) {
            sex[i].checked = false;
        }
        let awh = document.getElementsByClassName('awh_in');
        for(let i = 0; i < awh.length; i++) {
            awh[i].value = '';
        }
    }
    render() {
        return(
            <div className='app'>
                <Sex male={this.male} female={this.female}/>
                <Awh age={this.age} weight={this.weight} height={this.height}/>
                <Physact intense={this.intense}/>
                <button className='calculate' onClick={this.calc}>Расчитать</button>
                <button className='calculate' onClick={this.clear}>Очистить</button>
                <Answer />
            </div>
        )
    }
}


export default App