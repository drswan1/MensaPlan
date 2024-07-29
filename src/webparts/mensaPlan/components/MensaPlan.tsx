import * as React from 'react';
import styles from './MensaPlan.module.scss';
import type { IMensaPlanProps } from './IMensaPlanProps';


export default class MensaPlan extends React.Component<IMensaPlanProps, {}> {
  public render(): React.ReactElement<IMensaPlanProps> {

    return (
      <div className={styles.mensaPlan}>
        <div className={styles.container}>
          <div className={styles.mensaLocationFlex}>
            <div className={styles.mensaLocationContainer}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="34" height="19" viewBox="0 0 34 19" fill="none">
                <path d="M1 2L16.6824 16L32 2" stroke="#FEFEFE" stroke-width="3"/>
              </svg>
              <div className={styles.mensaLocationName}>Speiseplan - Uni Salzburg Mensa & M-Cafe NaWi</div>
            </div>
          </div>
          <div className={styles.mensaDateFlex}>
            <div id={styles.date1}>Mo 18.03</div>
            <div id={styles.date2}>Di 19.03</div>
            <div id={styles.date3}>Mi 20.03</div>
          </div>
          <div className={styles.mensaMenuFlex}></div>	     
        </div> 


            </div>
 
    );

  }
}
