import React, {Component} from 'react';
import styles from './index.less';

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const domObj = document.getElementsByTagName('*');
        // 去重
        const newObject = {};
        const arr = [];
        domObj.map(i => {
            return {...i, name: i.name}
        })
        console.log()

    }

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <span> 获取所有标签</span>
                </div>
                <p>
                    <text>但是需要去掉重复的</text>
                </p>
            </div>

        );
    }
}

export default App;
