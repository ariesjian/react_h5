import React, {Component} from 'react';
import styles from './index.less';
class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.image_wrap}>
                        <img alt={'bg'} src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'/>
                    </div>
                    <div className={styles.data_image}>
                        <div className={styles.image_div}>
                            <img alt={'top'}
                                 src='http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'/>
                        </div>
                        <div className={styles.name}>深夜打狗队 刚刚免费拿了此商品</div>
                    </div>
                    <div className={styles.top_btm}>
                        <div className={styles.baoyou}>包邮</div>
                        <div className={styles.text_name}>网红USB迷你加湿器</div>
                        <div className={styles.money}>现价:0趣币</div>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
