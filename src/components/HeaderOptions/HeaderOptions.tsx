import * as React from "react";
import "./HeaderOptions.css";

// import Logo from "../logo/Logo";
// import { directive } from "@babel/types";
// import { render } from "react-dom";

export interface HeaderNavProps {
  text: string;
}

const HeaderOptions = ({ text }) => {
  switch (text) {
    case "inicio":
      return (
        <div className="container">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="#42A29E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.8552 21.5531C19.8966 21.5531 19.938 21.5531 19.9877 21.5531C20.0043 21.5531 20.0208 21.5531 20.0374 21.5531C20.0622 21.5531 20.0954 21.5531 20.1202 21.5531C22.5472 21.5117 24.5104 20.6585 25.9599 19.0267C29.149 15.4318 28.6189 9.269 28.5609 8.68089C28.3538 4.26589 26.2664 2.15366 24.5435 1.16794C23.2596 0.430731 21.7603 0.0331332 20.0871 0H20.0291C20.0208 0 20.0043 0 19.996 0H19.9463C19.0268 0 17.2211 0.149099 15.4899 1.13481C13.7504 2.12052 11.6299 4.23276 11.4228 8.68089C11.3648 9.269 10.8347 15.4318 14.0237 19.0267C15.465 20.6585 17.4282 21.5117 19.8552 21.5531ZM13.6344 8.88797C13.6344 8.86312 13.6427 8.83827 13.6427 8.8217C13.916 2.88258 18.1322 2.24477 19.938 2.24477H19.9711C19.9877 2.24477 20.0125 2.24477 20.0374 2.24477C22.2739 2.29447 26.0759 3.20563 26.3327 8.8217C26.3327 8.84655 26.3327 8.8714 26.341 8.88797C26.3493 8.94595 26.9291 14.5786 24.295 17.544C23.2513 18.7202 21.8597 19.3001 20.0291 19.3166C20.0125 19.3166 20.0043 19.3166 19.9877 19.3166C19.9711 19.3166 19.9628 19.3166 19.9463 19.3166C18.1239 19.3001 16.7241 18.7202 15.6887 17.544C13.0629 14.5952 13.6261 8.93767 13.6344 8.88797Z" />
            <path d="M37.0098 31.7747C37.0098 31.7664 37.0098 31.7581 37.0098 31.7498C37.0098 31.6836 37.0015 31.6173 37.0015 31.5428C36.9518 29.9027 36.8441 26.0675 33.2491 24.8416C33.2243 24.8333 33.1912 24.825 33.1663 24.8167C29.4305 23.8642 26.3243 21.7105 26.2912 21.6856C25.7859 21.3295 25.0901 21.4537 24.7339 21.959C24.3777 22.4643 24.502 23.1601 25.0073 23.5163C25.1481 23.6157 28.4448 25.9101 32.5699 26.9704C34.4999 27.6579 34.7153 29.7204 34.7733 31.609C34.7733 31.6836 34.7733 31.7498 34.7816 31.8161C34.7898 32.5616 34.7401 33.713 34.6076 34.3756C33.2657 35.1377 28.0058 37.7718 20.0042 37.7718C12.0356 37.7718 6.74262 35.1294 5.39245 34.3674C5.25991 33.7047 5.20193 32.5533 5.2185 31.8078C5.2185 31.7416 5.22678 31.6753 5.22678 31.6007C5.28476 29.7122 5.50013 27.6496 7.43013 26.9621C11.5552 25.9018 14.852 23.5991 14.9928 23.508C15.4981 23.1518 15.6223 22.456 15.2661 21.9507C14.9099 21.4454 14.2141 21.3212 13.7089 21.6774C13.6757 21.7022 10.5861 23.8559 6.83374 24.8084C6.8006 24.8167 6.77575 24.825 6.7509 24.8333C3.15596 26.0675 3.04827 29.9027 2.99858 31.5345C2.99858 31.609 2.99857 31.6753 2.99029 31.7416C2.99029 31.7498 2.99029 31.7581 2.99029 31.7664C2.98201 32.1971 2.97373 34.4088 3.41274 35.5187C3.49557 35.7341 3.64467 35.9163 3.84347 36.0406C4.09197 36.2063 10.0477 40 20.0125 40C29.9772 40 35.9329 36.198 36.1814 36.0406C36.3719 35.9163 36.5293 35.7341 36.6122 35.5187C37.0263 34.4171 37.018 32.2054 37.0098 31.7747Z" />
          </svg>
          <h1>Inicio</h1>
        </div>
      );
    case "events":
      return (
        <div className="container">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="#42A29E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M35.8597 4.33897C35.778 4.33565 35.6962 4.33509 35.6144 4.3374H32.53V1.68677C32.5301 0.626521 31.518 0 30.4577 0H27.6144C26.5542 0 25.7831 0.626521 25.7831 1.68677V4.33731H14.2168V1.68677C14.2168 0.626521 13.4457 0 12.3855 0H9.54207C8.48191 0 7.46981 0.626521 7.46981 1.68677V4.33731H4.38555C2.41669 4.28242 0.776135 5.83406 0.72125 7.80282C0.718943 7.88455 0.719497 7.96646 0.722818 8.04819V35.9035C0.722818 38.024 2.26495 39.9999 4.38545 39.9999H35.6144C37.735 39.9999 39.2771 38.024 39.2771 35.9035V8.04819C39.3577 6.08026 37.8277 4.41959 35.8597 4.33897ZM27.6144 1.92771H30.6024V7.22888H27.6144V1.92771ZM9.54217 1.92771H12.2892V7.22888H9.54217V1.92771ZM37.3494 35.9035C37.3494 36.9638 36.6747 38.0722 35.6144 38.0722H4.38555C3.3253 38.0722 2.65062 36.9638 2.65062 35.9035V15.4217H37.3494V35.9035ZM37.3494 8.04819V13.494H2.65053V8.04819C2.5689 7.14697 3.23333 6.35016 4.13455 6.26853C4.21794 6.26096 4.30188 6.25986 4.38545 6.26511H7.46981V7.32537C7.46981 8.38562 8.48182 9.15668 9.54207 9.15668H12.3855C13.3699 9.18371 14.1898 8.40748 14.2168 7.42305C14.2177 7.39049 14.2177 7.35793 14.2168 7.32537V6.26502H25.7831V7.32527C25.7561 8.3097 26.5323 9.12956 27.5167 9.15659C27.5493 9.15751 27.5819 9.15751 27.6144 9.15659H30.4578C31.5181 9.15659 32.5301 8.38552 32.5301 7.32527V6.26502H35.6144C36.5176 6.20811 37.2959 6.89413 37.3528 7.79729C37.358 7.88086 37.3569 7.9648 37.3494 8.04819Z" />
          </svg>
          <h1>Eventos</h1>
        </div>
      );
    case "groups":
      return (
        <div className="container">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="#42A29E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36.676 30.2593L30.3073 27.0753C29.7067 26.7747 29.3333 26.1707 29.3333 25.4987V23.2447C29.486 23.058 29.6467 22.8453 29.8127 22.6107C30.6387 21.444 31.3007 20.1453 31.782 18.7447C32.7227 18.3133 33.3333 17.3833 33.3333 16.3333V13.6667C33.3333 13.0247 33.0933 12.4027 32.6667 11.9167V8.37066C32.704 8.00399 32.8507 5.82132 31.272 4.02066C29.9027 2.45866 27.6807 1.66666 24.6667 1.66666C21.6527 1.66666 19.4307 2.45866 18.0613 4.01999C17.1047 5.11132 16.7827 6.34066 16.6853 7.22332C15.5427 6.63266 14.196 6.33332 12.6667 6.33332C5.74067 6.33332 5.33733 12.2367 5.33333 12.3333V15.386C4.90133 15.8567 4.66667 16.4 4.66667 16.9393V19.242C4.66667 19.9613 4.98867 20.632 5.54067 21.0853C6.09067 23.1587 7.44333 24.7253 7.97 25.2753V27.104C7.97 27.6287 7.68467 28.11 7.18933 28.3807L2.754 31.1627C1.05533 32.0893 0 33.8673 0 35.802V38.3333H9.33333H10.6667H40V35.638C40 33.346 38.726 31.2847 36.676 30.2593ZM9.33333 35.508V37H1.33333V35.802C1.33333 34.3553 2.12267 33.026 3.42733 32.3133L7.862 29.5313C8.75067 29.0467 9.30267 28.1173 9.30267 27.104V24.71L9.09067 24.512C9.07333 24.496 7.302 22.8227 6.77867 20.542L6.718 20.278L6.49 20.1313C6.18333 19.9327 6 19.6 6 19.242V16.9393C6 16.6993 6.16333 16.414 6.44733 16.1567L6.66667 15.9587L6.66533 12.372C6.67733 12.1807 7.02467 7.66666 12.6667 7.66666C14.262 7.66666 15.6053 8.03532 16.6667 8.76266V11.9167C16.24 12.4027 16 13.0247 16 13.6667V16.3333C16 16.536 16.0233 16.7353 16.0673 16.9287C16.0853 17.006 16.1213 17.0767 16.146 17.1513C16.1827 17.2633 16.212 17.3787 16.2633 17.4847C16.264 17.486 16.2647 17.4867 16.2653 17.488C16.436 17.84 16.6847 18.1547 16.998 18.406C17.0013 18.4187 17.0053 18.43 17.0087 18.442C17.0487 18.5947 17.0907 18.7467 17.136 18.8953L17.19 19.0693C17.1993 19.1 17.2107 19.1313 17.2207 19.162C17.244 19.234 17.2667 19.3053 17.2907 19.376C17.3307 19.4927 17.3727 19.6133 17.4213 19.7447C17.442 19.7993 17.4647 19.8487 17.486 19.9027C17.5407 20.042 17.5953 20.1767 17.6527 20.31C17.6667 20.342 17.6787 20.3767 17.6927 20.408L17.73 20.492C17.7473 20.5307 17.7653 20.5653 17.7827 20.6033C17.848 20.746 17.912 20.884 17.9787 21.0173C17.9893 21.0387 17.9993 21.062 18.01 21.0833C18.052 21.1667 18.094 21.2453 18.136 21.3253C18.208 21.4627 18.2787 21.592 18.3493 21.7173C18.384 21.7787 18.418 21.8387 18.452 21.8967C18.548 22.0607 18.6393 22.2113 18.728 22.3513C18.7473 22.3813 18.766 22.4127 18.7847 22.4413C18.946 22.6913 19.086 22.894 19.202 23.052C19.2327 23.094 19.2593 23.13 19.2853 23.1653C19.3 23.1847 19.32 23.2127 19.3327 23.23V25.436C19.3327 26.0813 18.9807 26.6733 18.4147 26.9827L16.6507 27.9447L16.3433 27.9173L16.218 28.1807L12.4673 30.2267C10.534 31.2827 9.33333 33.3053 9.33333 35.508ZM38.6667 37H10.6667V35.508C10.6667 33.794 11.6013 32.2187 13.106 31.3987L19.0533 28.1547C20.0487 27.6113 20.6667 26.5693 20.6667 25.4367V22.758V22.7573L20.5373 22.6027L20.512 22.5727C20.5107 22.5707 20.4693 22.5207 20.402 22.4327C20.398 22.4273 20.394 22.422 20.3893 22.4167C20.354 22.3707 20.3127 22.3153 20.2653 22.2493C20.2647 22.248 20.264 22.2473 20.2633 22.246C20.164 22.108 20.0393 21.9287 19.9007 21.7127C19.8973 21.708 19.8947 21.7027 19.8913 21.698C19.826 21.596 19.7567 21.4847 19.686 21.3667C19.6807 21.358 19.6753 21.3493 19.67 21.34C19.5193 21.0873 19.3593 20.8013 19.2 20.4847C19.2 20.4847 19.1993 20.484 19.1993 20.4833C19.1147 20.3133 19.03 20.1347 18.9473 19.9487C18.936 19.9227 18.924 19.8973 18.9127 19.8713C18.876 19.788 18.8393 19.7007 18.802 19.6107C18.7887 19.578 18.7753 19.544 18.762 19.5107C18.7273 19.4233 18.692 19.3353 18.6547 19.2347C18.5867 19.0533 18.5227 18.864 18.4613 18.6687L18.4247 18.55C18.4207 18.5367 18.416 18.5233 18.412 18.5093C18.3493 18.2987 18.2893 18.0833 18.2387 17.862L18.178 17.598L17.9507 17.4513C17.564 17.202 17.3333 16.784 17.3333 16.3333V13.6667C17.3333 13.2927 17.492 12.944 17.78 12.6833L18 12.4853V8.33332V8.09732L17.982 8.08332C17.9593 7.60199 17.988 6.12666 19.064 4.89932C20.1687 3.63866 22.054 2.99999 24.6667 2.99999C27.27 2.99999 29.1513 3.63399 30.2573 4.88532C31.5553 6.35266 31.3407 8.22999 31.3393 8.24599L31.3333 12.4853L31.5533 12.684C31.8413 12.944 32 13.2927 32 13.6667V16.3333C32 16.9153 31.6187 17.4247 31.052 17.5993L30.72 17.7013L30.6133 18.0313C30.1673 19.4187 29.532 20.7 28.724 21.84C28.526 22.1207 28.3333 22.3693 28.166 22.5593L28 22.7487V25.4987C28 26.6787 28.6553 27.7393 29.7107 28.2673L36.0793 31.4513C37.6753 32.2493 38.6667 33.8533 38.6667 35.638V37Z" />
          </svg>
          <h1>Grupos</h1>
        </div>
      );
    default:
      return <h1>nada</h1>;
  }
};

export default HeaderOptions;
