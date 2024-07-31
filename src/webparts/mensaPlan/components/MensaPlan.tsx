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
              <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="15" viewBox="0 0 34 19" fill="none">
                <path d="M1 2L16.6824 16L32 2" stroke="#FEFEFE" stroke-width="3"/>
              </svg>
              <div className={styles.mensaLocationName}>Speiseplan - Uni Salzburg Mensa & M-Cafe NaWi</div>
            </div>
          </div>
          <div className={styles.mensaDateFlex}>
            <div id={styles.date1} className={styles.selectedDate}>Mi, 31.07.</div>
            <div id={styles.date2}>Do, 01.08.</div>
            <div id={styles.date3}>Fr, 02.08.</div>
          </div>
          <div className={styles.mensaMenuFlex}>
            <div id={styles.veggieMenuContainer}>
              <div className={styles.menuTitle}>Menü veggie</div>
              <div className={styles.menuTime}>11:30-14:00 Uhr</div>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>Klare Gemüsesuppe mit Einlage</div>
                <div className={styles.menuItem} style={{ fontWeight: 'bolder' }}>Penne Linsenbolognese VEGAN</div>
                <div className={styles.menuItem}>frischer Parmesan</div>
                <div className={styles.menuItem}>(A, C, F, G, L)</div>
                <div className={styles.menuPrice}>€6.20</div>
              </div>
            </div>
            <div id={styles.herzhaftMenuContainer}>
              <div className={styles.menuTitle}>Menü herzhaft</div>
              <div className={styles.menuTime}>11:30-14:00 Uhr</div>
              <div className={styles.menuItems}>
                <div className={styles.menuItem}>Klare Gemüsesuppe mit Einlage</div>
                <div className={styles.menuItem} style={{ fontWeight: 'bolder' }}>Hühnerragout AT</div>
                <div className={styles.menuItem}>mit frischen Kräutern Reis</div>
                <div className={styles.menuItem}>(A, C, F, G, L, O)</div>
                <div className={styles.menuPrice}>€7.20</div>
              </div>
            </div>
          </div>	     
        </div> 
      </div>
 
    );

  }
}
