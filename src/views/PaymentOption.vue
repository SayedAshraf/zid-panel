<template>
  <div class="paymentView">
    <PaymentHeader />
    <div class="container-fluid text-right PaymentOption">
      <div class="row">
        <!-- TopBox -->
        <div class="col-md-12">
          <div class="Contenetalert alert-primary">
            عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك
            الإلكتروني بإحدى تلك البوابات المختلفة. كل بوابة من البوابات لديها
            إشتراطات معينة لتفعيل حسابك لديهم. خيارات الدفع تتيح لك استقبال
            المدفوعات الإلكترونية عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى،
            للدفع الإلكتروني سنقوم بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى
            تفعيل اشتراكك لديهم وتعبئة النماذج اللازمة.
          </div>
        </div>

        <!-- MiddleBox -->
        <div class="middlebox container col-md-12">
          <div class="row titlebox">
            <div class="col-12">
              <div class="content-title other-color">بوابات الدفع</div>
            </div>
          </div>

          <!-- Right and Left BoXs -->
          <div class="submiddle row">
            <div class="subbox-content col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="container innerBox">
                <div class="row">
                  <div class="col-md-8 col-sm-8 col-8">
                    <div class="title">بوابة تاب</div>
                    <div class="subtitle">يمكنك تفعيل بوابة تاب للدفع</div>
                    <button class="btn btn-primary btn-sm">اضغط لمزيد من التفاصيل</button>
                  </div>
                  <div class="container col-md-4 col-sm-4 col-4">
                    <span class="featured-badge">الاختيار المفضل</span>
                    <i class="zid zid-tap-logo"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="subbox-content col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="container innerBox">
                <div class="row">
                  <div class="col-md-8 col-sm-8 col-8">
                    <div class="title">بوابات دفع أخرى</div>
                    <div class="subtitle">من هنا يمكنك تفعيل بوابات أخرى</div>
                    <button class="btn btn-primary btn-sm">اضغط لمزيد من التفاصيل</button>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <i class="fas fa-money-check-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="boxfooter col-lg-12 col-md-12 col-sm-12 text-center">
            <div class="info-with-img">
              <div class="comp-logo-holder">
                <img class="img" src="../assets/images/apple-pay-logo.svg" alt />
              </div>
              <span class="text">يمكنك الان تفعيل Apple Pay في متجرك</span>
              <router-link to="" class="btn btn-success btn-sm" >اضغط لمعرفة المزيد</router-link>
            </div>
          </div>
        </div>

        <!-- LastBox -->
        <div class="LastBox container col-md-12">
          <div class="boxborder">
            <div class="titlebox">
              <div class="content-title">التحويل البنكي</div>
              <div class="opp-dir">
                <a href="#" class="btn btn-success btn-sm" @click="showModelHandler" >إضافة حساب جديد</a>
              </div>
            </div>
          </div>
          <div class="lastboxmiddle">
            <div class="boxelment row" v-for="(bank , indx) in banks" :key="indx">
              <div class="col-12">
                <div class="boxheader">
                  <div class="textheader">{{bank.bankName}}</div>
                  <div class="items">
                    <a href="#" class="btn btn-icon-sm" @click="showModelHandler" > <i class="fas fa-pencil-alt"></i></a>
                    <a href="#" class="btn btn-icon-sm"> <i class="far fa-trash-alt"></i> </a>
                  </div>
                </div>
              </div>
              <div class="itemlist col-12">
                <div class="img-with-details">
                  <div class="comp-logo-holder">
                    <img class="img" :src="getImgUrl(bank.imagURL)" alt="ImagAlt" />
                  </div>
                  <div class="details">
                    <div class="owenr">{{bank.owner}}</div>
                    <div class="accountNum">{{bank.AccountNum}}</div>
                    <div class="iban">{{bank.Iban}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="learn-more-btn-holder">
          <a href="#" class="btn btn-outline-primary btn-sm"> لمعرفة المزيد عن الدفع <i class="fas fa-question"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Bank MOdel -->
    <AccountModel :show="ShowModel" @close="hideModelHandler" v-one:keyup.esc="hideModelHandler" :width="600"></AccountModel>
  </div>
</template>

<script>
import PaymentHeader from "../components/PaymentOption/PaymentHeader";
import AccountModel from "../components/PaymentOption/AccountModel";

export default {
  name: "PaymentOption",
  components: {
    PaymentHeader,
    AccountModel,
  },
  data() {
    return {
      ShowModel: false,
      banks: [
        {
          bankName: "مصرف الراجحي",
          owner: "محمد سامي",
          AccountNum: 123456789012345,
          Iban: "SA1234567890123456789011",
          imagURL: "al-rajhi.png"
        },
        {
          bankName: "البنك الأهلي التجاري",
          owner: "متجرر اللبس الجميل للتجارة",
          AccountNum: 123457889,
          Iban: "SA98002876190018718901",
          imagURL: "bank_ahli.png"
        },
        {
          bankName: "البنك الأول",
          owner: "Test@test",
          AccountNum: 3456789765437,
          Iban: "Sa5467890-98765435567890",
          imagURL: "bank_holandi.png"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
    showModelHandler: function() {
      this.ShowModel = true;
    },
    hideModelHandler: function() {
      this.ShowModel = false;
    },
  }
};
</script>

<style lang="scss" scoped>
.paymentView {
  // height: 700px;
  direction: rtl;
  background-color: #1d1920;
  .PaymentOption {
    padding: 15px 40px;
    .Contenetalert {
      color: #8c5da7;
      background-color: rgba(117, 75, 136, 0.21);
      border-radius: 1.3rem;
      border-color: transparent;
      font-weight: 600;
      font-size: 16px;
      padding: 8px 16px;
      margin: 15px 0;
    }
    .content-title {
      padding: 20px;
      color: #fff;
      text-align: right;
      font-size: 14px;
      font-weight: 700;
    }
    .middlebox {
      border: #443550 solid 1px;
      padding: 15px;
      border-radius: 20px;
      background-color: rgba(117, 75, 136, 0.21);

      .submiddle {
        padding: 20px 0;
        box-sizing: border-box;
      }
      .titlebox {
        border-bottom: 1px solid #443550;
      }
      .subbox-content {
        padding: 20px;
        .innerBox {
          padding: 15px;
          border: #443550 solid 1px;
          box-sizing: border-box;
          border-radius: 5px;
        }
        .title {
          color: #fff;
          font-size: 14px;
          font-weight: 700;
        }
        .subtitle {
          color: #d4ccde;
          font-size: 12px;
        }
        .featured-badge {
          display: block;
          background-color: rgba(176, 129, 201, 0.25);
          color: #8c5da7;
          font-size: 13px;
          font-weight: 700;
          padding: 3px 5px;
          border-radius: 5px;
          text-align: center;
        }
        .btn {
          margin: 20px 0 20px 0;
          padding: 5px;
          color: #fff;
          background-color: #8d5da7;
          border-color: #8d5da7;
          line-height: 1.5;
          border-radius: 5px;
          font-size: 14px;
          padding: 3px 15px;
        }
        .zid-tap-logo {
          display: block;
          text-align: center;
          color: #60536c;
          font-size: 45px;
          padding-top: 10px;
        }
        .fa-money-check-alt {
          display: block;
          text-align: center;
          color: #60536c;
          font-size: 50px;
          padding: 30px 10px;
        }
      }
      .boxfooter {
        text-align: center;
        margin-bottom: 20px;
        .text {
          color: #6c627a;
          font-weight: 600;
          font-size: 14px;
          margin: 0 10px;
        }
        .btn.btn-sm {
          font-size: 14px;
          border-radius: 5px;
          font-weight: 600;
          padding: 6px 19px;
          color: #fff;
          background-color: #45a787;
          border-color: #45a787;
        }
        .comp-logo-holder {
          display: inline-block;
          padding: 5px;
          border-radius: 5px;
          background-color: #fff;
          img {
            width: 70px;
            vertical-align: middle;
            border-style: none;
          }
        }
      }
    }
    .LastBox {
      margin-top: 15px;
      border: #443550 solid 1px;
      border-radius: 20px;
      background-color: rgba(117, 75, 136, 0.21);
      padding: 0;
      .boxborder {
        border-bottom: 1px solid #443550;
        .titlebox {
          padding: 5px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .opp-dir {
          .btn {
            font-size: 14px;
            border-radius: 5px;
            font-weight: 600;
            padding: 6px 19px;
            transition: all 0.3s ease;
            color: #fff;
            background-color: #45a787;
            border-color: #45a787;
          }
        }
      }
      .lastboxmiddle {
        padding: 0 70px 0 40px;
        .boxelment {
          padding: 15px 0;
          border-bottom: 1px solid #443550;
          .boxheader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            .items {
              // color: #fff;
              .btn.btn-icon-sm {
                padding: 0 7px;
                cursor: pointer;
                color: #7e7484;
              }
            }
          }
          .itemlist {
            padding: 15px 0;
            .img-with-details {
              display: flex;
              justify-content: right;
              align-items: center;
              .comp-logo-holder {
                background-color: #fff;
                padding: 5px;
                margin: 0 15px;
                // width: 80px;
                border-radius: 5px;
                .img {
                  width: 70px;
                  display: inline-block;
                  border-style: none;
                }
              }
              .details {
                color: #6c627a;
                font-size: 14px;
              }
            }
          }
        }
        .boxelment:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .learn-more-btn-holder {
    text-align: center;
    margin: 20px 0;
    padding: 10px;
    .btn-sm {
      font-size: 14px;
      background-color: transparent;
      border-radius: 5px;
      border-color: #8d5da7;
      color: #8d5da7;
      line-height: 1.5;
      .btn {
        font-weight: 600;
        padding: 6px 19px;
        border-radius: 5px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
    }
  }

}
</style>
