import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter} from "rxjs";

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.scss']
})
export class MerchantProfileComponent implements OnInit{
  public imgUrl = '';
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/';

  public merchantInfo: any = [];
  constructor(private _httpClient: HttpClient) {
  }
  ngOnInit() {
    this.convertSVGToB64();
  }

  convertSVGToB64() {
    let svg  = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <style type="text/css">
            @font-face {
                font-family: 'Roboto-Bold';
                src: url('data:font/woff;charset=utf-8;base64,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') format('woff');
                font-weight: normal;
                font-style: normal;
            }
        </style>
    </defs>
    <g>
        <circle cx="100" cy="100" r="99" fill="#272932" stroke="#272932" stroke-width="1" />
        <text  x="45%" y="59" font-size="45" fill="white"
            style="text-anchor: middle; font-family: 'Roboto-Bold';">__NOTE__</text>
         <text x="68%" y="59" font-size="28" fill="white" style="text-anchor: middle; font-family: 'Roboto-Bold';">
            /5
        </text>
        <text x="50%" y="84" font-size="13" fill="white" style="text-anchor: middle; font-family: 'Roboto-Bold';">__COUNT__  client reviews</text>
        <svg viewBox="0 0 163 200" x="0" y="15.5" width="200" >
            <g>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="31">
                    <rect x="0" y="0" width="100" height="100" fill="white" />

                </svg>
                <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="white" />
                </svg>
                <mask id="Mask1">
                        <rect x="0" y="0" width="100" height="100" fill="white" />
                    </mask>
                 <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#D6254F" mask="url(#Mask1)" />
                </svg>
            </g>
            <g transform="translate(33 0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="31">
                    <rect x="0" y="0" width="100" height="100" fill="white" />

                </svg>
                <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#FDD0C7" />
                </svg>
                <mask id="Mask2">
                        <rect x="0" y="0" width="100" height="100" fill="white" />
                    </mask>
                 <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#D6254F" mask="url(#Mask2)" />
                </svg>
            </g>
            <g transform="translate(66 0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="31">
                    <rect x="0" y="0" width="100" height="100" fill="white" />

                </svg>
                <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#FDD0C7" />
                </svg>

                <mask id="Mask3">
                        <rect x="0" y="0" width="100" height="100" fill="white" />
                    </mask>
                 <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#D6254F" mask="url(#Mask3)" />
                </svg>
            </g>
            <g transform="translate(99 0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="31">
                    <rect x="0" y="0" width="100" height="100" fill="white" />


                </svg>
                <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#FDD0C7" />
                </svg>
                <mask id="Mask4">
                        <rect x="0" y="0" width="50" height="100" fill="white" />
                    </mask>
                 <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#D6254F" mask="url(#Mask4)" />
                </svg>
            </g>
            <g transform="translate(132 0)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="31">
                    <rect x="0" y="0" width="100" height="100" fill="white" />

                </svg>
                <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#FDD0C7" />
                </svg>

                <mask id="Mask5">
                        <rect x="0" y="0" width="0" height="100" fill="white" />
                    </mask>
                 <svg width="23" x="4" viewBox="0 0 101 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.6038 2.60183L62.6806 29.8371C63.1245 31.1679 64.3862 32.0551 65.823 32.0551H96.6982C99.899 32.0551 101.231 36.0476 98.6374 37.8804L73.6499 55.5547C72.4934 56.3719 72.0144 57.8311 72.4467 59.1503L81.9907 87.763C82.9837 90.7282 79.5025 93.1914 76.9091 91.3586L52.2253 73.8827C50.8936 72.9371 49.118 72.9371 47.7862 73.8827L23.0908 91.3703C20.5091 93.2031 17.0279 90.7399 18.0091 87.7747L27.5532 59.1619C27.9971 57.8311 27.5065 56.3835 26.35 55.5664L1.37416 37.8687C-1.20753 36.0359 0.11252 32.0434 3.31335 32.0434H34.1885C35.6137 32.0434 36.887 31.1445 37.331 29.8254L46.4078 2.59015C47.5526 -0.865327 52.4473 -0.865327 53.6038 2.60183Z"
                        fill="#D6254F" mask="url(#Mask5)" />
                </svg>
            </g>
        </svg>
                   <text  x="35%" y="165" font-size="15" fill="white"
            style="text-anchor: middle; font-family: 'Roboto-Bold';">MCB</text>
         <text x="60%" y="165" font-size="15" fill="white" style="text-anchor: middle; font-family: 'Roboto-Bold';">
            Reviews
        </text>
    </g>
</svg>`;
    const merchantId = 6;
    this._httpClient.get(`${this.URL_BACKEND}api/merchants/${merchantId}`)
      .pipe(filter(response => !!response))
      .subscribe((merchantInfo: any) => {
      this.merchantInfo = merchantInfo.data;
      console.log('this.merchantInfo', this.merchantInfo);
      const rating:any = parseFloat(merchantInfo.data.ratings).toFixed(1);
      const count = merchantInfo.data.reviews.length;
      svg = svg.replace('__NOTE__', rating);
      svg = svg.replace('__COUNT__', count)
      this.imgUrl = 'data:image/svg+xml;base64,'+btoa(svg);
    })
  }
}
