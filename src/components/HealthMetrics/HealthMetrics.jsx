import React from "react";

import './HealthMetrics.css';
import { icons } from "lucide-react";
const HealthMetrics = () =>{
    const metrics =[
        {
            icons:'🫁',
            title:'Lungs',
            subtitle:'Better this week',
            color:'#ff6b6b',
            progress:75,
        },
        {
            icons:'🦷',
            title:'Teeth',
            subtitle:'Good',
            color:'#4ecdc4',
            progress:90,
        },
        {
            icons:'🦴',
            title:'Bone',
            subtitle:'Get 2x on oct 2021',
            color:'#ffa726',
            progress:60,
        }
    ];
    return (
        <div className='health-metrics'>
            <div className="human-body">
                <div className="body-container"> 
                    <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop" 
            alt="Human anatomy" 
            className="body-image"
          />
          <div className="health-tag">
            <span className="tag-icon">❤️</span>
            <span>Healthy Heart</span>
          </div>
          <div className="healthy-log-btn">
            <span>📊 Healthy Leg</span>
          </div>
                </div>
            </div>
            <div className="metrics-list">
                {metrics.map((metric,index) =>(
                  <div key={index} className="metric-card">
                    <div className="metric-icon">{metric.icon}</div>
                    <div className="metric-info">
                        <h3 className="metric-title">{metric.title}</h3>
                        <p className="metric-subtitle">{metric.subtitle}</p>
                        <div className="progress-bar">
                            <div className="progress-fill"
                            style={{width:`${metric.progress}%`,
                            backgroundColor: metric.color}}></div>
                        </div>
                    </div>
                    <button className="detail-btn">Details → </button>
                  </div>  
                ))}
            </div>
        </div>

    );
};

export default HealthMetrics;