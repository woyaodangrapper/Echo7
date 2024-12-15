import "@/styles/bim-left.css";
import { CircleBigIcon, CircleMinIcon, CircleSmallIcon } from "../icons";

export const BIMLeft = () => {
  return (
    <div className="left-project-container">
      <div className="project-container">
        <div className="heating-container">
          <div className="func-title">
            <div>Urban Planning</div>
          </div>
          <div className="sdv-box">
            <div className="left-container">
              <div className="info-label">80</div>
              <div className="info-circle">
                <CircleBigIcon />
                <CircleSmallIcon />
              </div>
              <div className="info-trend" />
            </div>

            <div className="right-container">
              <div className="info-top-value-box font-bold">
                <div className="info-value-box">
                  <div className="info-value">10011</div>
                  <div className="info-label">traffic flow</div>
                </div>
                <div className="info-value-box">
                  <div className="info-value">10011</div>
                  <div className="info-label">pedestrian flow</div>
                </div>
              </div>

              <div className="info-botton-value-box">
                <div className="info-value-box">
                  <div className="info-label">TF</div>

                  <div className="info-value">200/</div>
                  <div className="info-value">2000</div>

                  <div className="percentage">
                    <div className="info-circle">
                      <CircleMinIcon />
                    </div>

                    <div className="info-value">80</div>
                  </div>
                </div>
                <div className="info-value-box">
                  <div className="info-label">PF</div>

                  <div className="info-value">20/</div>
                  <div className="info-value">3000</div>

                  <div className="percentage">
                    <div className="info-circle">
                      <CircleMinIcon />
                    </div>

                    <div className="info-value">80</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
