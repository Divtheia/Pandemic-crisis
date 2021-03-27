import { Component, OnInit } from '@angular/core';
// import { NzMessageService } from "ng-zorro-antd/message";
import { interval } from 'rxjs/internal/observable/interval';
import { timer } from 'rxjs/internal/observable/timer';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  nameA = '武曲';
  nameB = '天機';
  nameC = '太陰';
  nameD = '紫微';
  nameE = '廉貞';
  nameF = '天同';
  nameG = '天梁';

  valueA = 103;
  valueB = 101;
  valueC = 106;
  valueD = 104;
  valueE = 105;
  valueF = 102;
  valueG = 104;

  healA = 0;
  healB = 0;
  healC = 0;
  healD = 0;
  healE = 0;
  healF = 0;
  healG = 0;

  donateA = 0;
  donateB = 0;
  donateC = 0;
  donateD = 0;
  donateE = 0;
  donateF = 0;
  donateG = 0;

  favorA = 0;
  favorB = 0;
  favorC = 0;
  favorD = 0;
  favorE = 0;
  favorF = 0;
  favorG = 0;

  countryList = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  addList = [];
  lessList = [];

  visible = false;
  isRiseShow = false;
  isHelpShow = false;
  isTimerShow = false;
  isRemindShow = false;
  isCountryShow = false;
  isAudioShow = false;
  isAddShow = false;
  isLessShow = false;
  isStop = false;
  isPic1 = false;
  isPic2 = false;
  isPic3_1 = false;
  isPic3_2 = false;
  isPic3_3 = false;
  isPic4 = false;
  helpNum = 0;
  helpValue = 0;
  timer = '';
  timerSet = { min: 10, isDynamic: true };
  lessTime = 0;

  constructor() {}

  ngOnInit() {}

  // 疫情增加
  toShowRise() {
    this.isRiseShow = true;
  }

  handleRiseCancel() {
    this.isRiseShow = false;
    this.visible = false;
  }

  handleRiseOk() {
    this.valueA = Math.round(this.valueA * 1.5);
    this.valueB = Math.round(this.valueB * 1.5);
    this.valueC = Math.round(this.valueC * 1.5);
    this.valueD = Math.round(this.valueD * 1.5);
    this.valueE = Math.round(this.valueE * 1.5);
    this.valueF = Math.round(this.valueF * 1.5);
    this.valueG = Math.round(this.valueG * 1.5);

    this.valueA <= 300 ? this.valueA : (this.valueA = 300);
    this.valueB <= 300 ? this.valueB : (this.valueB = 300);
    this.valueC <= 300 ? this.valueC : (this.valueC = 300);
    this.valueD <= 300 ? this.valueD : (this.valueD = 300);
    this.valueE <= 300 ? this.valueE : (this.valueE = 300);
    this.valueF <= 300 ? this.valueF : (this.valueF = 300);
    this.valueG <= 300 ? this.valueG : (this.valueG = 300);
    this.isRiseShow = false;
    this.visible = false;
  }

  // 使用疫苗事件
  toShowHelp() {
    this.isHelpShow = true;
  }

  handleHelpCancel() {
    this.isHelpShow = false;
    this.visible = false;
  }

  handleHelpOk() {
    let total =
      this.valueA +
      this.valueB +
      this.valueC +
      this.valueD +
      this.valueE +
      this.valueF +
      this.valueG;

    this.helpValue = this.helpNum * 27;

    this.valueA = Math.floor(
      this.valueA - this.helpValue * (this.valueA / total)
    );
    this.valueB = Math.floor(
      this.valueB - this.helpValue * (this.valueB / total)
    );
    this.valueC = Math.floor(
      this.valueC - this.helpValue * (this.valueC / total)
    );
    this.valueD = Math.floor(
      this.valueD - this.helpValue * (this.valueD / total)
    );
    this.valueE = Math.floor(
      this.valueE - this.helpValue * (this.valueE / total)
    );
    this.valueF = Math.floor(
      this.valueF - this.helpValue * (this.valueF / total)
    );
    this.valueG = Math.floor(
      this.valueG - this.helpValue * (this.valueG / total)
    );

    this.helpNum = 0;
    this.isHelpShow = false;
    this.visible = false;
  }

  // 使用疫苗
  lessA() {
    if (this.valueA > 0) {
      this.healA++;
    }
    this.valueA -= 18;
    if (this.valueA < 0) {
      this.valueA = 0;
    }
    this.checkDone();
  }

  lessB() {
    if (this.valueB > 0) {
      this.healB++;
    }
    this.valueB -= 18;
    if (this.valueB < 0) {
      this.valueB = 0;
    }
    this.checkDone();
  }

  lessC() {
    if (this.valueC > 0) {
      this.healC++;
    }
    this.valueC -= 18;
    if (this.valueC < 0) {
      this.valueC = 0;
    }
    this.checkDone();
  }

  lessD() {
    if (this.valueD > 0) {
      this.healD++;
    }
    this.valueD -= 18;
    if (this.valueD < 0) {
      this.valueD = 0;
    }
    this.checkDone();
  }

  lessE() {
    if (this.valueE > 0) {
      this.healE++;
    }
    this.valueE -= 18;
    if (this.valueE < 0) {
      this.valueE = 0;
    }
    this.checkDone();
  }

  lessF() {
    if (this.valueF > 0) {
      this.healF++;
    }
    this.valueF -= 18;
    if (this.valueF < 0) {
      this.valueF = 0;
    }
    this.checkDone();
  }

  lessG() {
    if (this.valueG > 0) {
      this.healG++;
    }
    this.valueG -= 18;
    if (this.valueG < 0) {
      this.valueG = 0;
    }
    this.checkDone();
  }

  // 疫苗使用回復：如果有使用疫苗紀錄才能回復
  reA() {
    if (this.healA > 0) {
      this.valueA += 18;
      if (this.valueA > 300) {
        this.valueA = 300;
      }
      this.healA--;
    }
  }

  reB() {
    if (this.healB > 0) {
      this.valueB += 18;
      if (this.valueB > 300) {
        this.valueB = 300;
      }
      this.healB--;
    }
  }

  reC() {
    if (this.healC > 0) {
      this.valueC += 18;
      if (this.valueC > 300) {
        this.valueC = 300;
      }
      this.healC--;
    }
  }

  reD() {
    if (this.healD > 0) {
      this.valueD += 18;
      if (this.valueD > 300) {
        this.valueD = 300;
      }
      this.healD--;
    }
  }

  reE() {
    if (this.healE > 0) {
      this.valueE += 18;
      if (this.valueE > 300) {
        this.valueE = 300;
      }
      this.healE--;
    }
  }

  reF() {
    if (this.healF > 0) {
      this.valueF += 18;
      if (this.valueF > 300) {
        this.valueF = 300;
      }
      this.healF--;
    }
  }

  reG() {
    if (this.healG > 0) {
      this.valueG += 18;
      if (this.valueG > 300) {
        this.valueG = 300;
      }
      this.healG--;
    }
  }

  // 疫苗捐贈
  toDonateA() {
    this.donateA++;
    if (this.valueA > 0) {
      this.valueA -= 6;
    }
    if (this.valueA < 0) {
      this.valueA = 0;
    }
  }

  toDonateB() {
    this.donateB++;
    if (this.valueB > 0) {
      this.valueB -= 6;
    }
    if (this.valueB < 0) {
      this.valueB = 0;
    }
  }

  toDonateC() {
    this.donateC++;
    if (this.valueC > 0) {
      this.valueC -= 6;
    }
    if (this.valueC < 0) {
      this.valueC = 0;
    }
  }

  toDonateD() {
    this.donateD++;
    if (this.valueD > 0) {
      this.valueD -= 6;
    }
    if (this.valueD < 0) {
      this.valueD = 0;
    }
  }

  toDonateE() {
    this.donateE++;
    if (this.valueE > 0) {
      this.valueE -= 6;
    }
    if (this.valueE < 0) {
      this.valueE = 0;
    }
  }

  toDonateF() {
    this.donateF++;
    if (this.valueF > 0) {
      this.valueF -= 6;
    }
    if (this.valueF < 0) {
      this.valueF = 0;
    }
  }

  toDonateG() {
    this.donateG++;
    if (this.valueG > 0) {
      this.valueG -= 6;
    }
    if (this.valueG < 0) {
      this.valueG = 0;
    }
  }

  // 捐贈回收
  reDonateA() {
    if (this.donateA > 0) {
      this.donateA--;
      this.valueA += 6;
      if (this.valueA > 300) {
        this.valueA = 300;
      }
    }
  }

  reDonateB() {
    if (this.donateB > 0) {
      this.donateB--;
      this.valueB += 6;
      if (this.valueB > 300) {
        this.valueB = 300;
      }
    }
  }

  reDonateC() {
    if (this.donateC > 0) {
      this.donateC--;
      this.valueC += 6;
      if (this.valueC > 300) {
        this.valueC = 300;
      }
    }
  }

  reDonateD() {
    if (this.donateD > 0) {
      this.donateD--;
      this.valueD += 6;
      if (this.valueD > 300) {
        this.valueD = 300;
      }
    }
  }

  reDonateE() {
    if (this.donateE > 0) {
      this.donateE--;
      this.valueE += 6;
      if (this.valueE > 300) {
        this.valueE = 300;
      }
    }
  }

  reDonateF() {
    if (this.donateF > 0) {
      this.donateF--;
      this.valueF += 6;
      if (this.valueF > 300) {
        this.valueF = 300;
      }
    }
  }

  reDonateG() {
    if (this.donateG > 0) {
      this.donateG--;
      this.valueG += 6;
      if (this.valueG > 300) {
        this.valueG = 300;
      }
    }
  }

  // 各國接受他國疫苗支援
  toFavorA() {
    if (this.valueA > 0) {
      this.favorA++;
    }
    this.valueA -= 12;
    if (this.valueA < 0) {
      this.valueA = 0;
    }
    this.checkDone();
  }

  toFavorB() {
    if (this.valueB > 0) {
      this.favorB++;
    }
    this.valueB -= 12;
    if (this.valueB < 0) {
      this.valueB = 0;
    }
    this.checkDone();
  }

  toFavorC() {
    if (this.valueC > 0) {
      this.favorC++;
    }
    this.valueC -= 12;
    if (this.valueC < 0) {
      this.valueC = 0;
    }
    this.checkDone();
  }

  toFavorD() {
    if (this.valueD > 0) {
      this.favorD++;
    }
    this.valueD -= 12;
    if (this.valueD < 0) {
      this.valueD = 0;
    }
    this.checkDone();
  }

  toFavorE() {
    if (this.valueE > 0) {
      this.favorE++;
    }
    this.valueE -= 12;
    if (this.valueE < 0) {
      this.valueE = 0;
    }
    this.checkDone();
  }

  toFavorF() {
    if (this.valueF > 0) {
      this.favorF++;
    }
    this.valueF -= 12;
    if (this.valueF < 0) {
      this.valueF = 0;
    }
    this.checkDone();
  }

  toFavorG() {
    if (this.valueG > 0) {
      this.favorG++;
    }
    this.valueG -= 12;
    if (this.valueG < 0) {
      this.valueG = 0;
    }
    this.checkDone();
  }

  // 取消接收他國疫苗

  reFavorA() {
    if (this.favorA > 0) {
      this.favorA--;
      this.valueA += 12;
      if (this.valueA > 300) {
        this.valueA = 300;
      }
    }
  }

  reFavorB() {
    if (this.favorB > 0) {
      this.favorB--;
      this.valueB += 12;
      if (this.valueB > 300) {
        this.valueB = 300;
      }
    }
  }

  reFavorC() {
    if (this.favorC > 0) {
      this.favorC--;
      this.valueC += 12;
      if (this.valueC > 300) {
        this.valueC = 300;
      }
    }
  }

  reFavorD() {
    if (this.favorD > 0) {
      this.favorD--;
      this.valueD += 12;
      if (this.valueD > 300) {
        this.valueD = 300;
      }
    }
  }

  reFavorE() {
    if (this.favorE > 0) {
      this.favorE--;
      this.valueE += 12;
      if (this.valueE > 300) {
        this.valueE = 300;
      }
    }
  }

  reFavorF() {
    if (this.favorF > 0) {
      this.favorF--;
      this.valueF += 12;
      if (this.valueF > 300) {
        this.valueF = 300;
      }
    }
  }

  reFavorG() {
    if (this.favorG > 0) {
      this.favorG--;
      this.valueG += 12;
      if (this.valueG > 300) {
        this.valueG = 300;
      }
    }
  }

  // 動態取得國家 Class
  getAClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueA == 0) {
      return 'field done before';
    } else if (this.valueA >= 240 && this.valueA < 300) {
      return 'field danger';
    } else if (this.valueA < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getBClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueB == 0) {
      return 'field done';
    } else if (this.valueB >= 240 && this.valueB < 300) {
      return 'field danger';
    } else if (this.valueB < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getCClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueC == 0) {
      return 'field done';
    } else if (this.valueC >= 240 && this.valueC < 300) {
      return 'field danger';
    } else if (this.valueC < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getDClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueD == 0) {
      return 'field done';
    } else if (this.valueD >= 240 && this.valueD < 300) {
      return 'field danger';
    } else if (this.valueD < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getEClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueE == 0) {
      return 'field done';
    } else if (this.valueE >= 240 && this.valueE < 300) {
      return 'field danger';
    } else if (this.valueE < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getFClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueF == 0) {
      return 'field done';
    } else if (this.valueF >= 240 && this.valueF < 300) {
      return 'field danger';
    } else if (this.valueF < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getGClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else if (this.valueG == 0) {
      return 'field done';
    } else if (this.valueG >= 240 && this.valueG < 300) {
      return 'field danger';
    } else if (this.valueG < 240) {
      return 'field doing';
    } else {
      return 'field over';
    }
  }

  getTimeClass() {
    if (this.isAllPass()) {
      return 'field done';
    } else {
      return 'field doing';
    }
  }

  isAllPass() {
    if (
      this.valueA <= 0 &&
      this.valueB <= 0 &&
      this.valueC <= 0 &&
      this.valueD <= 0 &&
      this.valueE <= 0 &&
      this.valueF <= 0 &&
      this.valueG <= 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  // 動態取得隱藏 class

  getAHide() {
    if (this.valueA == 0) {
      return 'a-hide-done';
    } else if (this.valueA >= 240 && this.valueA < 300) {
      return 'a-hide-danger';
    } else if (this.valueA < 240) {
      return 'a-hide-doing';
    } else {
      return 'a-hide-over';
    }
  }

  getBHide() {
    if (this.valueB == 0) {
      return 'b-hide-done';
    } else if (this.valueB >= 240 && this.valueB < 300) {
      return 'b-hide-danger';
    } else if (this.valueB < 240) {
      return 'b-hide-doing';
    } else {
      return 'b-hide-over';
    }
  }

  getCHide() {
    if (this.valueC == 0) {
      return 'c-hide-done';
    } else if (this.valueC >= 240 && this.valueC < 300) {
      return 'c-hide-danger';
    } else if (this.valueC < 240) {
      return 'c-hide-doing';
    } else {
      return 'c-hide-over';
    }
  }

  getDHide() {
    if (this.valueD == 0) {
      return 'd-hide-done';
    } else if (this.valueD >= 240 && this.valueD < 300) {
      return 'd-hide-danger';
    } else if (this.valueD < 240) {
      return 'd-hide-doing';
    } else {
      return 'd-hide-over';
    }
  }

  getEHide() {
    if (this.valueE == 0) {
      return 'e-hide-done';
    } else if (this.valueE >= 240 && this.valueE < 300) {
      return 'e-hide-danger';
    } else if (this.valueE < 240) {
      return 'e-hide-doing';
    } else {
      return 'e-hide-over';
    }
  }

  getFHide() {
    if (this.valueF == 0) {
      return 'f-hide-done';
    } else if (this.valueF >= 240 && this.valueF < 300) {
      return 'f-hide-danger';
    } else if (this.valueF < 240) {
      return 'f-hide-doing';
    } else {
      return 'f-hide-over';
    }
  }

  getGHide() {
    if (this.valueG == 0) {
      return 'g-hide-done';
    } else if (this.valueG >= 240 && this.valueG < 300) {
      return 'g-hide-danger';
    } else if (this.valueG < 240) {
      return 'g-hide-doing';
    } else {
      return 'g-hide-over';
    }
  }

  // 確認是否完成條件
  checkDone() {
    if (this.healA + this.favorA >= 18) {
      this.valueA = 0;
    }
    if (this.healB + this.favorB >= 18) {
      this.valueB = 0;
    }
    if (this.healC + this.favorC >= 18) {
      this.valueC = 0;
    }
    if (this.healD + this.favorD >= 18) {
      this.valueD = 0;
    }
    if (this.healE + this.favorE >= 18) {
      this.valueE = 0;
    }
    if (this.healF + this.favorF >= 18) {
      this.valueF = 0;
    }
    if (this.healG + this.favorG >= 18) {
      this.valueG = 0;
    }
  }

  // 抽屜開關
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // 計時
  timing(lessTime: number) {
    let timerMin: any;
    let timerSec: any;
    timerMin = Math.floor(lessTime / 60);
    timerSec = lessTime % 60;

    this.lessTime = lessTime;

    if (!this.isStop) {
      timerMin < 10 ? (timerMin = '0' + timerMin) : timerMin;
      timerSec < 10 ? (timerSec = '0' + timerSec) : timerSec;
      this.timer = timerMin + ':' + timerSec;
    }

    if (this.timerSet.isDynamic && this.timer == '02:00') {
      this.toShowRemind();
    }

    if (lessTime > 0 && !this.isStop) {
      setTimeout(() => {
        this.timing(lessTime - 1);
      }, 1000);
    }
  }

  // 使用計時事件
  toShowTimer() {
    if (this.timer == '' || this.timer == '00:00') {
      this.isTimerShow = true;
    }
  }

  handleTimerCancel() {
    this.isTimerShow = false;
  }

  handleTimerOk() {
    this.timing(this.timerSet.min * 60);
    this.isTimerShow = false;
    // this.nzMessageService.info("計時開始");
  }

  timeOut() {
    this.isStop = true;
  }

  continue() {
    this.isStop = false;
    this.timing(this.lessTime);
  }

  // 使用提醒
  toShowRemind() {
    this.isRemindShow = true;
  }

  handleRemindCancel() {
    this.isRemindShow = false;
  }

  handleRemindOk() {
    this.isRemindShow = false;
  }

  // 國家啟用
  toShowCountry() {
    this.isCountryShow = true;
  }

  handleCountryCancel() {
    this.isCountryShow = false;
    this.visible = false;
  }

  handleCountryOk() {
    this.countryChange();
    this.isCountryShow = false;
    this.visible = false;
  }

  countryLog(event: any[]) {
    this.countryList = event;
    console.log(event);
  }

  countryChange() {
    const indexA = this.countryList.findIndex((f) => f == 'A');
    const indexB = this.countryList.findIndex((f) => f == 'B');
    const indexC = this.countryList.findIndex((f) => f == 'C');
    const indexD = this.countryList.findIndex((f) => f == 'D');
    const indexE = this.countryList.findIndex((f) => f == 'E');
    const indexF = this.countryList.findIndex((f) => f == 'F');
    const indexG = this.countryList.findIndex((f) => f == 'G');
    indexA == -1 ? (this.valueA = -1) : (this.valueA = 103);
    indexB == -1 ? (this.valueB = -1) : (this.valueB = 101);
    indexC == -1 ? (this.valueC = -1) : (this.valueC = 106);
    indexD == -1 ? (this.valueD = -1) : (this.valueD = 104);
    indexE == -1 ? (this.valueE = -1) : (this.valueE = 105);
    indexF == -1 ? (this.valueF = -1) : (this.valueF = 102);
    indexG == -1 ? (this.valueG = -1) : (this.valueG = 104);
  }

  // 疫情增加事件
  toShowAdd() {
    this.isAddShow = true;
  }

  handleAddCancel() {
    this.isAddShow = false;
    this.visible = false;
  }

  handleAddOk() {
    this.addChangh();
    this.isAddShow = false;
    this.visible = false;
  }

  addLog(event: any) {
    this.addList = event;
  }

  addChangh() {
    const indexA = this.addList.findIndex((f) => f == 'A');
    const indexB = this.addList.findIndex((f) => f == 'B');
    const indexC = this.addList.findIndex((f) => f == 'C');
    const indexD = this.addList.findIndex((f) => f == 'D');
    const indexE = this.addList.findIndex((f) => f == 'E');
    const indexF = this.addList.findIndex((f) => f == 'F');
    const indexG = this.addList.findIndex((f) => f == 'G');
    indexA != -1 ? (this.valueA += 10) : this.valueA;
    indexB != -1 ? (this.valueB += 10) : this.valueB;
    indexC != -1 ? (this.valueC += 10) : this.valueC;
    indexD != -1 ? (this.valueD += 10) : this.valueD;
    indexE != -1 ? (this.valueE += 10) : this.valueE;
    indexF != -1 ? (this.valueF += 10) : this.valueF;
    indexG != -1 ? (this.valueG += 10) : this.valueG;
  }

  // 疫情減少事件
  toShowLess() {
    this.isLessShow = true;
  }

  handleLessCancel() {
    this.isLessShow = false;
    this.visible = false;
  }

  handleLessOk() {
    this.lessChangh();
    this.isLessShow = false;
    this.visible = false;
  }

  lessLog(event: any) {
    this.lessList = event;
  }

  lessChangh() {
    const indexA = this.lessList.findIndex((f) => f == 'A');
    const indexB = this.lessList.findIndex((f) => f == 'B');
    const indexC = this.lessList.findIndex((f) => f == 'C');
    const indexD = this.lessList.findIndex((f) => f == 'D');
    const indexE = this.lessList.findIndex((f) => f == 'E');
    const indexF = this.lessList.findIndex((f) => f == 'F');
    const indexG = this.lessList.findIndex((f) => f == 'G');
    indexA != -1 && this.valueA > 10 ? (this.valueA -= 10) : this.valueA;
    indexB != -1 && this.valueB > 10 ? (this.valueB -= 10) : this.valueB;
    indexC != -1 && this.valueC > 10 ? (this.valueC -= 10) : this.valueC;
    indexD != -1 && this.valueD > 10 ? (this.valueD -= 10) : this.valueD;
    indexE != -1 && this.valueE > 10 ? (this.valueE -= 10) : this.valueE;
    indexF != -1 && this.valueF > 10 ? (this.valueF -= 10) : this.valueF;
    indexG != -1 && this.valueG > 10 ? (this.valueG -= 10) : this.valueG;
  }

  // 播放音效
  playAudioOpen() {
    const audio = new Audio();
    audio.src =
      // 原本音效
      // 'http://docs.google.com/uc?export=open&id=1BBJ1VRHL8j8CO_R5ug6Q9xVjvy-0ziY9';
      // 增強 7 db
      // 'http://docs.google.com/uc?export=open&id=1yft6Vd9_EyVhndDGb24TYRJRfBPJ-toj';
      // 增強 10 db
      'http://docs.google.com/uc?export=open&id=1IM8bJxgDStc5mK_g9FB7boh_DcsTFUoC';
    audio.load();
    audio.play();
  }

  playAudioEnd() {
    const audio = new Audio();
    audio.src =
      // 原本音效
      // 'http://docs.google.com/uc?export=open&id=1Mf8fbs7yUmFvboYeoIZs6RkokQjKQNUV';
      // 增強 5 db
      // 'http://docs.google.com/uc?export=open&id=1IxncLg3NWhFowXc-Zqg0jFBCpG1nD8qN';
      // 增強 7 db
      'http://docs.google.com/uc?export=open&id=19F14FQOztsOXIujAD3kQ2crKz2bkfax-';
    audio.load();
    audio.play();
    this.isAudioShow = false;
  }

  toShowAudio() {
    this.isAudioShow = true;
    this.visible = false;
  }

  handleAudioCancel() {
    this.isAudioShow = false;
  }

  // 圖片控制
  showPic1() {
    this.isPic1 = true;
  }

  showPic2() {
    this.isPic2 = true;
  }

  showPic3_1() {
    this.isPic3_1 = true;
  }

  showPic3_2() {
    this.isPic3_2 = true;
  }

  showPic3_3() {
    this.isPic3_3 = true;
  }

  showPic4() {
    this.isPic4 = true;
  }

  closePicture() {
    this.isPic1 = false;
    this.isPic2 = false;
    this.isPic3_1 = false;
    this.isPic3_2 = false;
    this.isPic3_3 = false;
    this.isPic4 = false;
  }
}
