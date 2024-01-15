import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import school from '../Images/school-logo.png'
import work from '../Images/working-logo.png'
import SectionTitle from './SectionTitle';

export default function WorkExp(){
    function SchoolIcon(){
        return(
        <div className='SchoolIcon'>
            <img  src={school} alt='d'></img>
        </div>
        )
    }
    function WorkIcon(){
        return(
        <div className='workIcon'>
            <img className='work-image' src={work} alt='d'></img>
        </div>
        )
    }
    return(
        <div className='work-timeline' id='workexp'>
            <SectionTitle
                header = 'WORK EXPERIENCE.'
                sub_header = 'JOURNEY SO FAR -'
            />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    date="Aug 2022 - Present"
                    iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science and Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master's Degree</h4>
                    <p>
                    George Mason University, Fairfax,VA
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2021 - Jul 2022"
                    contentStyle={{ background: 'rgb(51, 51, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Application Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Accenture Technologies, India</h4>
                    <p>
                    Experienced Java Full Stack Developer with a proven track record of successfully enhancing application functionality and addressing client requirements.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul 2019 - Aug 2019"
                    iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Center for Development of Telematics, India</h4>
                    <p>
                    Funtional and Test Automation Developer for Governent of India, Telecommunications.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul 2018 - Aug 2018"
                    contentStyle={{ background: 'rgb(51, 51, 51)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Engineering Trainee</h3>
                    <h4 className="vertical-timeline-element-subtitle">Utthunga LLC - Engineering Services & Industrial Solutions, India</h4>
                    <p>
                    Design and Development for Automation scripts.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    date="Aug 2016 - Aug 2020"
                    iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science and Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
                    <p>
                    Jss Academy of Technical Education, India
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}