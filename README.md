# Hackathon-2022

## Problem Statement:
As a hiring manager, it can be annoying to search LinkedIn and GitHub accounts while looking for talent. Present an idea that makes finding developers easier for hiring managers.

## Pitch (Solution):
**HireMe** provides a One-Stop solution for Hiring Talent.
- It has a very Simple and Beautiful UI divided into appropriate sections to handle all the levels of hiring, Right from the Job creation to the Interview Conducting State of the Candidate.
- It also provides a skill-based filtering search that can help to filter candidates based on relevant skills.

A Deep Explanation with visuals is provided in the UI Section.

## Sections of UI
The main sections of the Product are as follows:

- **Dashboard**
    - It provides the overall outlook of the recruitment process.
    - Summaries of each section such as no of joining candidates, number of vacancies for a job, the candidates currently in progress, etc are provided in the dashboard.
![Dashboard](https://github.com/priyanks25coder/hackathon2022/blob/main/images/3_Dashboard.png?raw=true)
    
- **Job Section**
    - This section provides a clear vision of the number of jobs in which hiring is going on along with its detail. Also, jobs can be added or removed.
    - It provides a complete list of candidates that have applied with their information(Position, Resume, Phone, and Email).
    - An accept/reject button is provided to Hiring Managers/Recuitrires to accept/reject candidates based on their Resume and skills.
![Job](https://github.com/priyanks25coder/hackathon2022/blob/main/images/4_Jobs.png?raw=true)

- **Task Section**
    - In this section, a task can be added to a particular job that candidates need to attempt.
    - The candidate's uploaded solution is also available on this screen. Once the team decides to go ahead with the candidate, they can Accept/Reject the candidate. 
    - If the candidate is accepted an interview link is created and shared with the candidate.
![Task](https://github.com/priyanks25coder/hackathon2022/blob/main/images/5_Tasks.png?raw=true)

- **Analytics Section**
    - This section can help in understanding various charts and graphs on our hiring process.
    - It can help in analyzing data such as (Reason of Rejection, Rejection vs No of Candidates Placed, Analysing the Social Platforms where candidates have applied, etc.)

![Analytics](https://github.com/priyanks25coder/hackathon2022/blob/main/images/6_Analytics.png?raw=true)

- **Message Section**
    - This section provides the ability to communicate with the candidates. In this way, it is a one-stop solution for managers to communicate and update candidates about their progress.
![Message](https://github.com/priyanks25coder/hackathon2022/blob/main/images/7_Messages.png?raw=true)

- **Settings Section**
    - In this section, HM can set up their profile and toggle some settings such as notification, and theme settings.
![Settings](https://github.com/priyanks25coder/hackathon2022/blob/main/images/8_Settings.png?raw=true)

## Backend Solution: (Search)
- We are using NodeJs on the Backend along with HyperDb as a Database. In this, we have implemented a search filter that is based on the skills of the candidate.
- The search can be seen in the UI prototype at the top.

### Search Example:

Search Example 1: ```In this example we are searching based on First Name as well as Skill```
![Search-Example](https://github.com/priyanks25coder/hackathon2022/blob/main/images/SearchExample.jpg?raw=true)

Search-Example-2: ```In this example we are just searching based on skills```
![Search-Example-2](https://raw.githubusercontent.com/priyanks25coder/hackathon2022/main/images/SearchExample2.jpg?token=GHSAT0AAAAAABXPXPSGFGS2VPUJCUQK7Y7OYYLV6NQ)

## Important Links:

- **FIGMA Prototype**: https://www.figma.com/proto/omR8NA1EeF4FcY6lPoPovX/Untitled?page-id=0%3A1&node-id=1%3A11758&viewport=1432%2C123%2C0.14&scaling=scale-down&starting-point-node-id=1%3A11758

## Tech-Stack:
    - Backend: NodeJs
    - DB: HyperDB
    - DesignTool - Figma

## Team (TriGeeks)
Priyank Shah, Hetal Gantara, Pranjal Goyal

## Mentions
We would like to thank Dennis Ivy for conducting this Hackathon.
