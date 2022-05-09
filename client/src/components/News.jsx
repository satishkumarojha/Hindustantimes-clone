import { Component, useEffect, useState } from "react";

import "./News.css";

function News() {
  const [allnews, setallnews] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e7377b0713d74867bbe937e39a05aa64"
      );
      let data = await res.json();
      data = data.articles;
      console.log(data);
      setallnews(data);
    }
    getData();
  }, []);

  const [count, setCount] = useState(0);
  return (
    <div className="conatainer_news">
      <div className="hindustanNews">
        <div className="top">
          <div className="hindustanNews-top">
            {/* <h2>
              <hr className="hd" />
              <hr className="hd" />
              <hr className="hd" />
              <span className="hdstyle1">
                <span>[</span>Top News <span>]</span>
              </span>
            </h2> */}
            <div className="left_bars">
              <div className="left_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
              <div className="hdstyle1">
        
                  <span>[</span>Top News <span>]</span>
             
              </div>
              <div className="right_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
            </div>
        
          </div>
          <div className="side1">
            <p>
              NIMCET 2022 registration window closes tomorrow, apply on
              nimcet.in
            </p>
            <p className="p1">Published on May 08, 04:34 PM IST</p>
          </div>
          <hr className=" hr1" />
          <div className="side1">
            <p>
              Who were Haider and Shahbaz Shah - the two Lashkar terrorists
              killed in J&K?
            </p>
            <p className="p1">Published on May 08, 04:34 PM IST</p>
          </div>
          <hr className=" hr1" />
          <div className="side1">
            <p>
              How to emotionally be there for your partner? Relationship experts
              answer
            </p>
            <p className="p1">Published on May 08, 04:34 PM IST</p>
          </div>
          <hr className=" hr1" />
          <div className="side1">
            <p>
              CSK vs DC Live Score IPL 2022: Delhi face Covid concerns ahead of
              Chennai clash
            </p>
            <p className="p1">Published on May 08, 04:34 PM IST</p>
          </div>
          <hr className=" hr1" />
          <div className="side1">
            <p>NICU at Sassoon saves 12k infants in 5 years</p>
            <p className="p1">Published on May 08, 04:34 PM IST</p>
          </div>
          <hr className=" hr1" />
          <h2 className="h22">View All </h2>
        </div>

        <div className="latest">
          <div className="hindustanNews-latest">
            {/* <h2>
                            <hr className='hd' />
                            <hr className='hd' />
                            <hr className='hd' />
                            <span className='hdstyle2'>

                                <span>[

                                </span>Latest News <span>]</span>

                            </span>
                        </h2> */}
            <div className="left_bars">
              <div className="left_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
              <div className="hdstyle2">
        
                  <span>[</span>Latest News <span>]</span>
             
              </div>
              <div className="right_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
            </div>
          </div>

          {allnews.map((e, i) => {
            if (i == 0) {
              return (
                <>
                  <div className="mainnews-card">
                    <div className="">
                      <h3>{e.source.name}</h3>
                    </div>
                    <div className="mainnews-card-image">
                      <img src={e.urlToImage} />
                    </div>
                    <div>
                      {" "}
                      <h2>{e.title}</h2>
                    </div>
                    <div>
                      <p>{e.publishedAt}</p>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="news-card">
                    <div className="news-card-left">
                      <div>
                        <h3>{e.source.name}</h3>
                      </div>

                      <div>
                        {" "}
                        <h4>{e.title}</h4>
                      </div>
                      <div>
                        <p>{e.publishedAt}</p>
                      </div>
                    </div>
                    <div className="news-card-right">
                      <img src={e.urlToImage} />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="sport">
          <div className="hindustanNews-sport">
            {/* <h2>
              <hr className="hd" />
              <hr className="hd" />
              <hr className="hd" />
              <span className="hdstyle3">
                <span>[</span>Sports <span>]</span>
              </span>
            </h2> */}
            <div className="left_bars">
              <div className="left_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
              <div className="hdstyle3">
        
                  <span>[</span>Sports <span>]</span>
             
              </div>
              <div className="right_line_bars">
                <hr className="hd" />
                <hr className="hd" />
                <hr className="hd" />
              </div>
            </div>
          
          </div>
          <div>
            <p className="side1">
              IPL 2022, Punjab Kings vs Rajasthan Royals: Action in Images
            </p>
            <div className="image1">
              <img
                src="https://images.hindustantimes.com/img/2022/05/07/550x309/PTI05-07-2022-000201A-0_1651938791119_1651938932699.jpg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="sport1">
            <p>Are you making these common time management mistakes?</p>
            <img
              src="https://images.hindustantimes.com/img/2022/05/07/148x111/time_management_thumb_1651932980236_1651933025223.jpg"
              alt=""
            />
          </div>
          <div className="sport1">
            <p>
              Prithviraj actor Manushi Chhillar looks trendy in strappy top and
              flared pants?
            </p>
            <img
              src="https://images.hindustantimes.com/img/2022/05/07/148x111/manushi_chhillar_8_1651902656050_1651902974446.jpg"
              alt=""
            />
          </div>
          <div className="sport1">
            <p>
              ADog loves her blanket so much that she carries it everywhere she
              goes. Watch
            </p>
            <img
              src="https://images.hindustantimes.com/img/2022/05/07/148x111/Dog_Video_Blanket_Instagram_Viral_1651932057879_1651932062772.PNG"
              alt=""
            />
          </div>
          <div className="sport1">
            <p>
              Jos Buttler and Yuzvendra Chahal groove to Dhanashree Verma’s
              Balle Ni Balle
            </p>
            <img
              src="https://images.hindustantimes.com/img/2022/05/07/148x111/Yuzvendra_Chahal_Jos_Butler_Aparshakti_Khurana_Balle_Ni_Balle_Dhanashree_Verma_1651927797184_1651927813315.PNG"
              alt=""
            />
          </div>
          <hr className=" hr1" />
          <h2 className="h22">View All </h2>
        </div>
      </div>
    </div>
  );
}

export default News;
