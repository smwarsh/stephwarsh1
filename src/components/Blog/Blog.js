import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page sub-page">
      <div className="page" id="blog">
        <h1>Blog</h1>

        <div className="blog-post white-bg">
          <h2 id="git-branch">Make and Use a Git Branch in Terminal</h2>
          <p><a href="#git-branch">Link to this post</a></p>
          <p className="author">Steph Warsh</p>
          <div className="time-stamp">
            <p>Tuesday February 25, 2020</p>
            <p>8:36pm ET</p>
          </div>

          <h3>Time to branch out (ha)</h3>
          <p>I want to start using Git branches in my personal project, a <a href="https://github.com/smwarsh/thrift" target="_blank" rel="noopener noreferrer">spending tracker called Thrift</a>. I'm the only one who works on it for now, but at this point, I want to be able to do bug fixes in a safe space where I won't destroy my project if things go awry.</p>
          <p>I like to use Git in the command line, but I couldn't find a clear-cut explanation of how to do what I wanted, so I went through a fun trial-and-error process to piece together the Terminal commands that would give me my desired result.</p>

          <h3>Don't sue me</h3>
          <p>I have only done this once, so I'm by no means an authority. These steps might not even work the next time I try. However, I want to document the steps I took so I can easily access them next time I want to make a branch. Like I said in my last post, <a href="#git-setup">Quick Start with Git</a>, I want to emphasize that this post is mostly a note-to-self, and I realize that it may not be fully helpful to anyone else. I am not going into detail with the steps beyond what I need to replicate this next time.</p>
          <p>These steps are specific to my situation. I don't want to keep my new branch local; I want it to appear in my GitHub repository. I work on a Mac. I don't have anything special installed for my Terminal (yet). This is a simple list of the steps I need to take and Terminal commands I need to type to achieve my purpose.</p>

          <p>These are the articles I used on this journey:</p>

          <ul>
            <li key="0">
              <a href="https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches" target="_blank" rel="noopener noreferrer">"Create a new branch with git and manage branches"</a>
            </li>
            <li key="1">
              <a href="https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/" target="_blank" rel="noopener noreferrer">"Don’t Mess with the Master: Working with Branches in Git and GitHub"</a> (the most helpful, but missing a few key points like how to use the branch with the GitHub remote repository)
            </li>
            <li key="2">
              <a href="https://www.freecodecamp.org/forum/t/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too/13222" target="_blank" rel="noopener noreferrer">"Push a new local branch to a remote Git repository and track it too"</a>
            </li>
          </ul>

          <h3>The how-to</h3>

          <p><span className="step">Step 1:</span> In your project's directory, create the new branch and switch to it: 
          <code>git checkout -b branch_name</code></p>

          <p><span className="step">Step 2:</span> To see all branches, with an asterisk next to the current one:
          <code>git branch -a</code></p>

          <p><span className="step">Step 3:</span> To put the branch on GitHub: 
          <code>git push origin branch_name</code></p>

          <p><span className="step">Step 4:</span> I'm actually fuzzy on what purpose this step has. A "remote" repository is the repository on GitHub, and this "adds a new remote." One thing I do see is that it adds a new branch to the list of branches called remotes/origin/branch_name:
          <code>git remote add branch_name_but_different branch_name</code></p>

          <p><span className="step">Step 5:</span> Make changes to code, add, and commit.</p>

          <p><span className="step">Step 6:</span> To push these changes to the branch on GitHub:
          <code>git push -u origin branch_name</code></p>

          <p><span className="step">Step 7:</span> When you are ready to merge the changes to the master branch, switch back to the master branch:
          <code>git checkout master</code>
          Note: you can switch between any branches with this command.</p>

          <p><span className="step">Step 8:</span> To merge from branch_name to master (make sure you are on the master branch for this!): 
          <code>git merge branch_name --no-ff</code>
          The --no-ff is to keep commit messages from before the merge. You'd think this would be the default, but I guess not.</p>

          <p><span className="step">Step 9:</span> To push the changes to the master branch on GitHub: 
          <code>git push origin master</code></p>
        </div>

        {/**********************************/}

        <div className="blog-post white-bg">
          <h2 id="git-setup">Quick Start with Git</h2>
          <p><a href="#git-setup">Link to this post</a></p>
          <p className="author">Steph Warsh</p>
          <div className="time-stamp">
            <p>Wednesday January 2, 2019</p>
            <p>11:09pm ET</p>
          </div>

          <h3>Why</h3>
          <p>I am writing this post because I am learning to use Git from the command line and I have been through the steps of setting up a repository several times, but my notes are scattered and I wanted to bring the process into one, concise format.</p>

          <h3>What</h3>
          <p>I want to emphasize that this post is mostly a note-to-self, and I realize that it may not be fully helpful to anyone else. I am not going into detail, because this is a review of steps I already know.</p>
          <p>These steps are specific to my situation. I already have a project underway, with multiple files in a folder on my computer, and I want to create a new repository on GitHub in which I will start working with the code. I am the only person working on this project, so I don't need to worry about merges or pull requests. I work on a Mac. This is a simple list of the steps I need to take and Terminal commands I need to type to achieve my purpose.</p>

          <p>If you are looking for better resources, these are the places where I learned all this information:</p>
          <ul>
            <li key="0"><em>Course:</em> <a href="https://www.udemy.com/short-and-sweet-get-started-with-git-and-github-right-now/learn/v4/content" target="_blank" rel="noopener noreferrer">Short and Sweet: Get Started with Git and GitHub Right Now</a></li>
            <li key="1"><em>Article:</em> <a href="https://medium.freecodecamp.org/how-you-can-learn-git-and-github-while-youre-learning-to-code-7a592ea287ba" target="_blank" rel="noopener noreferrer">"How you can learn Git and GitHub while you’re learning to code"</a></li>
          </ul>

          <h3>How</h3>

          <p><span className="step">Step 1:</span> Have the files you want to put on GitHub in the workspace folder on your computer in their own folder. If you don't have the workspace folder, create it with the command 
          <code>mkdir workspace</code></p>

          <p><span className="step">Step 2:</span> Create the (empty) repository on GitHub.</p>

          <p><span className="step">Step 3:</span> Change your location to your project folder (mine is named "thrift"): 
          <code>cd workspace/thrift</code></p>

          <p><span className="step">Step 4:</span> Initialize your repository: 
          <code>git init</code></p>

          <p><span className="step">Step 5:</span> To check what files are in your folder: 
          <code>ls -al</code> 
          You should see .git, which was created in Step 4, in addition to whatever other files were already in the folder.</p>

          <p><span className="step">Step 6:</span> Mark files you do not want uploaded: 
          <code>touch .gitignore</code></p>

          <p><span className="step">Step 7:</span> Open .gitignore in a text editor and add .DS_Store and any other file(s) you want to ignore to the file. Each file name goes in plain text on its own line.</p>

          <p><span className="step">Step 8:</span> See what is in .gitignore: 
          <code>cat .gitignore</code></p>

          <p><span className="step">Step 9:</span> Add all files in the current repository to the local repository: 
          <code>git add --all</code></p>

          <p><span className="step">Step 10:</span> See what has changed: 
          <code>git status</code></p>

          <p><span className="step">Step 11:</span> Commit the current version of the project: 
          <code>git commit -m "Whatever you want to call the commit"</code></p>

          <p><span className="step">Step 12:</span> Link to the online repository created in Step 2 (I use SSH to connect, and the link is given to you when you create an empty repository on GitHub): 
          <code>git remote add origin git@github.com:smwarsh/thrift.git</code></p>

          <p><span className="step">Step 13:</span> Push changes: 
          <code>git push -u origin master</code> 
          Note: "origin" refers to the online repository and "master" refers to the local repository.</p>

          <p><span className="step">Step 14:</span> Check your files: 
          <code>git status</code> 
          If all went well, you should see something like: 
          <code>On branch master<br />Your branch is up-to-date with 'origin/master'.<br />nothing to commit, working tree clean</code></p>

          <p><span className="step">Step 15:</span> When you make more changes later, it is best practice to add changed files inspanidually: 
          <code>git add README.md</code></p>

        </div>

        {/**********************************/}

        <div className="blog-post white-bg">
          <h2 id="day-100">Day 100</h2>
          <p><a href="#day-100">Link to this post</a></p>
          <p className="author">Steph Warsh</p>
          <div className="time-stamp">
            <p>Thursday December 6, 2018</p>
            <p>10:42pm ET</p>
          </div>

          <h3>I Did It!</h3>
          <p>I have completed the 100 days of code challenge! I’m proud of myself for having stuck to it, and I won’t stop now.</p>

          <h3>What Happened</h3>
          <p>My goal for these 100 days was to learn JavaScript, so that’s what I did.</p>
          <p>I started with FreeCodeCamp, but I didn’t find it effective. I soon moved on to other things, but every time I was dragging my feet about what I was working on, I returned to the FreeCodeCamp challenges. I did get through 213 challenges during these 100 days, but they weren’t my main focus.</p>

          <p>I worked a bit on my portfolio site. In the first days of the challenge, I created the Blog and Contact pages, and in the last days, I added tabbed navigation to my site. I’m pleased with these additions.</p>

          <p>I spent the majority of my time working on my spending tracker project, Thrift, which led me in wildly unpredictable directions.</p>

          <p>Around day 80, I burned out during my weeklong trip to Texas and didn’t code for that entire week. It took another week to get back to coding for a full hour every day, and after that, I took more frequent days off, resulting in a total of 119 days passing between Day 1 and Day 100.</p>

          <p>In the last dozen or so days of the challenge, I put Thrift on hold and started a course in Node.js, which is what I am working on now.</p>

          <h3>My Project</h3>

          <p>I track my expenses in an Excel spreadsheet. I would love a dynamic web application that could replace the currently tedious process, so I set out to make it. I am invested in its success, because ideally I would like to use it when it is complete!</p>

          <p>Thrift started out well. I did have one sizable hiccup in the beginning (<a href="https://github.com/smwarsh/100-days-of-code" target="_blank" rel="noopener noreferrer">check my log for all the gory details</a>), but coding in JavaScript went smoothly after that. I had difficulty moving the code from an online development environment like CodeSandbox to a real website, but Jared helped me when I got seriously stuck.</p>

          <p>I finished the JavaScript elements, and I was at the point where I needed a database and needed to learn how to implement one. That adventure deserves its own section, so check out “My Accidental Journey into Backend Development” below.</p>

          <p>I am currently working on a project in Node.js, guided by Wes Bos’ “Learn Node” course, and I will apply that knowledge to Thrift once I’m done, because Thrift is my one true love when it comes to coding projects, and I am learning Node.js mainly so I can succeed with Thrift.</p>

          <p>I want Thrift to be a project that I can display proudly in my portfolio when I am done, and show to potential employers.</p>

          <h3>My Accidental Journey into Backend Development</h3>

          <p>When I realized Thrift could not move forward without a database, I was determined not to spend too much time learning how to implement one. I did not want to spend too much time on the backend while creating my project, but my project is useless without a database.</p>

          <p>I spent 15 long days taking SQL tutorials, and each of those 15 days felt even longer because of my desire not to spend any days at all on the topic.</p>

          <p>Once I learned SQL, I realized I couldn’t use it on my webpage. So I taught myself PHP, which can communicate between SQL and HTML, and then I experienced my most exciting moment of these 100 days.</p>

          <p>I connected my database to the webpage, and I was ecstatic. I’d never done anything like it before. I’d always had HTML, JavaScript, and other languages hard-coded on my websites, but it was amazing to see information from my database displaying on the page with all the complexities that go into making that happen. The excitement from this success stayed with me for days.</p>

          <p>However, I quickly encountered my next problem. “I have all the transactions displayed,” I thought, “but how do I bring all the math, all the logic I wrote in JavaScript to the page?”</p>

          <p>I went to my JavaScript file, tried to import my database, and utterly failed. Apparently, JavaScript and SQL don’t communicate, even with the help of PHP.</p>

          <p>“What now?” I groaned. What new technology would I have to learn, as I continued down this seemingly infinite rabbit hole?</p>

          <p>Of course, I turned to Jared for guidance, and learned that the best option was to learn Node.js and implement it on my site. I was so sick of all the time this detour had taken away from my path to learning JavaScript, and I didn’t want to “waste” more time learning backend technologies.</p>

          <p>But then I thought, although I was reflexively shying away from backend development because of my commitment to the idea of becoming a frontend developer, I couldn't say I wasn’t having at least a little fun.</p>

          <p>So, I thought, “Oh, what the heck,” and since then I’ve been working on a project learning Node.js.</p>

          <p>In the end, I spent a full half of my 100 days learning backend development, but I learned a significant amount of JavaScript as well, thanks to my work on Thrift.</p>

          <h3>What I've Learned</h3>

          <p>These 100 days took me in directions I could never have predicted.</p>

          <p>I wanted to see whether I was more interested in web development or UX/UI design, and in the end, I am leaning towards web development, because I haven’t even gone near UX/UI design in the past 100 days, and I haven’t wanted to. I feel engaged learning JavaScript and all these other technologies.</p>

          <p>FreeCodeCamp challenges are fine for learning syntax, but I didn’t really learn from them. It tells you how to do each challenge beforehand, and you don’t have to think for yourself at all! It was helpful to start, but I’m glad it’s not the only thing I did.</p>

          <p>Through my work on Thrift, I now have a small arsenal of technologies that I can use. I already knew HTML and CSS but I’ve quickly learned JavaScript, SQL, PHP, now Node.js… It’s incredible how doing a project takes you down paths you never would have imagined.</p>

          <p>I can’t emphasize enough how important <a href="https://twitter.com/smwarsh" target="_blank" rel="noopener noreferrer">Twitter</a> was to this journey. Not only did I hold myself accountable with daily tweets, but I also started connecting with people. They encouraged me, gave me good recommendations, and best of all, I met Jared, who has become a much-needed mentor for me. Lacking a professor, TA, or classmates, I struggled, and I needed a real person to help me past seemingly impossible obstacles.</p>

          <p>One small observation: Many times, I felt frustrated by how slowly I go through tutorials and how many notes I take, but I have realized that I am a kinesthetic learner and I need to do this. These careful studies provide a strong foundation that I build on. My favorite example is the 4 or 5 days I spent learning JavaScript array iteration methods; I have referred back to those notes countless times and benefited tremendously from the time I spent on it.</p>

          <p>It is important to remember that everyone learns differently, and to cater to my own strengths to do this challenge in the way that works best for me.</p>

          <h3>What Next?</h3>

          <p>I will do a modified version of the challenge for Round 2. I’ll take a week off now, after the first round, and then start again. I will allow myself one day off every 10 days rather than every 14, and a week off at day 50 so I don’t burn out again.</p>

          <p>I told myself I would start applying for jobs in the new year, but I don’t feel a serious urgency to do so. I know the application process will be difficult for me, so I will need to prepare, and I want to use a portion of my daily hour of code to do that, but not yet.</p>

          <p>There’s so much I still want to do before then. I want to finish this Node.js course, apply my new knowledge to Thrift, then completely revamp my personal website. I want my website to represent me well, and I am embarrassed by its current amateurish design and coding. I have to beef up my content too, and sell myself to potential employers.</p>

          <p>I will take the first 50 days of my next 100 days to continue what I’ve been doing. On Day 50, I will write a blog post, assess the situation, and maybe then I will begin the job search.</p>

          <h3>Overall...</h3>

          <p>This was an amazing experience, and I plan to continue it. 100 Days of Code is exactly what I needed to start my path towards a career in web development, and I’m optimistic about what Round 1 has done for me. It has turned me into a coder. I practice web development every day, and I’m proud of myself.</p>

        </div>

        <div className="blog-post white-bg">
          <h2 id="day-60-of-100-days-of-code">Day 60 of 100 Days of Code</h2>
          <p><a href="#day-60-of-100-days-of-code">Link to this post</a></p>
          <p className="author">Steph Warsh</p>
          <div className="time-stamp">
            <p>Saturday October 13, 2018</p>
            <p>10:03pm ET</p>
          </div>

          <h3>Day 60 Check-In</h3>

          <p>What do I think about 100 Days of Code so far? Frankly, I love it. It has definitely been hard. For instance, right now I’d really rather just go to sleep. It’s been a long week and I’m looking forward to just going to bed, but I have an hour ahead of me and I promised myself I would write a blog post. I had planned to write one every 30 days and I did not, but Google likes a website that’s been updated, so I should check in.</p>

          <h3>My Progress So Far</h3>

          <p>I have been focusing on learning JavaScript, and I started out by going through <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> challenges (which was not very stimulating). Then, someone on Twitter, <a href="https://twitter.com/vanessacnaja" target="_blank" rel="noopener noreferrer">Vanessa</a>, recommended the <a href="https://watchandcode.com/" target="_blank" rel="noopener noreferrer">Practical Javascript</a> course to me (which felt more useful). While working on that course, I started my project.</p>

          <p><strong>I’m writing an <a href="https://codesandbox.io/s/93m01wq3qo" target="_blank" rel="noopener noreferrer">expense tracker app</a></strong>, which I’ve named Thrift. I track my spending in my daily life, so I’m excited about making a web application for this. The project will help me learn JavaScript in a more concentrated, interesting way.</p>

          <p>I am really glad I’m working on a project, because it will be great to add it to my portfolio and showcase it for people to see. Everyone I talk to says projects are the best way to learn, and that makes me feel really good about my project. I definitely have the most fun when I am working on my project; those days go by the fastest.</p>

          <h3>Challenges</h3>

          <p>I initially set up Thrift to be similar to Gordon Zhu’s to do list project, but it didn’t work out at all. While I was dealing with that block, <a href="https://twitter.com/cjaredm" target="_blank" rel="noopener noreferrer">Jared</a>, a developer, reached out to me through Twitter. He invited me to a JavaScript meet up and has been really helpful whenever I get stuck on my project.</p>

          <p>I quickly realized, upon starting my 100 days of code, that there is not a single person in my life who knows JavaScript. I have no one to talk to about what I’m doing. So it’s nice to attend the meet ups that Jared occasionally hosts, and it is a relief to have a real person I can go to for help. It has been hard to adjust to not having a TA or professor to look to, or even just classmates to discuss my code with.</p>

          <p>It is hard to find the time to code every day, what with working a full time job, maintaining a fulfilling long distance relationship, going to what feels like constant doctors appointments, and exercising regularly. Almost every day I have to sacrifice sleep or my lunch break to fit in the hour.</p>

          <p>I tend to compare myself to people out there who code for three hours a day. I have to constantly remind myself that I’m doing the very best I can, and I need to be fair to myself. I don’t even know what others’ situations are like, and it’s not worth comparing myself to them and getting down about it.</p>

          <p>Although <a href="https://twitter.com/smwarsh" target="_blank" rel="noopener noreferrer">I post my progress on Twitter every day</a>, and I comment on two tweets daily to encourage people in their 100 days progress, I haven’t been very active on Twitter beyond that. I had intended to read articles, connect with people, and more, but that takes up a lot of time I don’t have. My life doesn’t usually feature much free time, so I don’t think I can make a commitment to all that extra engagement on Twitter. I can only focus on so many things at once.</p>

          <p>I try to stick to only two “projects” at a time, which is often difficult. My mind naturally tends to jump around and follow different ideas, so this rule has been helpful to keep in mind. I follow one tutorial through to completion before starting another one, while concurrently working on Thrift. Two things at a time.</p>

          <h3>Concerns Revisited</h3>

          <p>Going into this challenge, I was concerned about how to keep coding when attending work conferences. I have a conference in early November, and that will be tough, but I am going to do my best. Also, I have had a couple of friends visit me during these first sixty days. They have been very willing to let me code, and we usually just have a quiet hour where we both work on things. So far, so good with all of this.</p>

          <p>I was also concerned about the rule that time spent doing tutorials, online courses, and other similar resources should not count towards the challenge, and that only work on real code and projects count. I have been counting the tutorials and such resources, and I think that is the way it has to be. I mean, I am moving forward every day. I might not be moving forward as quickly as someone who codes on a project every day, but, for example, there’s no way I would have gotten through that four-and-a-half hour SQL tutorial if it didn’t count towards my hour of code. I don’t have very much time. I’m just going to keep it up like this. I’ll start the clock and work on whatever it is I’ve decided to work on, for an hour or as long as I can.</p>

          <h3>Conclusion</h3>

          <p>I have been able to stick to almost all of the rules I set for myself at Day 1. There have only been two days where I have been unable to finish my hour of code. I don’t count them as full days, but I don’t necessarily count them as skip days either. I’ve taken four days off, which is the allotted amount. I’m proud of how well I’ve been doing, even on Wednesdays when I have to wake up super early to code because I won’t be home until very late. I’m proud of myself for keeping up with it.</p>

          <p>It’s crazy, I’ve been doing this for two months now, but I have just gotten so far. I never thought I’d be this far in my project, and I’m thrilled.</p>

          <p>I hope to keep coding every day, even after 100 days have passed. I mean, I’ll probably take a nice break of about a week after the 100 days are over, but then I want to get right back to it, because it is really fun.</p>
        </div>

        {/**********************************/}

        <div className="blog-post white-bg">
          <h2 id="day-1-of-100-days-of-code">Day 1 of 100 Days of Code</h2>
          <p><a href="#day-1-of-100-days-of-code">Link to this post</a></p>
          <p className="author">Steph Warsh</p>
          <div className="time-stamp">
            <p>Friday August 10, 2018</p>
            <p>9:43pm ET</p>
          </div>

          <h3>Background</h3>

          <p>For over a year, I have been telling myself that I’m going to do three projects in particular, and I have not done them:</p>

          <ol>
          <li><strong>Make <a href="https://www.stephwarsh.com/" target="_blank" rel="noopener noreferrer">my website</a> better.</strong> Improve the content, make the design and code more sophisticated.</li>
          <li><strong>Expand <a href="https://www.stephwarsh.com/portfolio.php" target="_blank" rel="noopener noreferrer">my portfolio</a>.</strong> A couple of friends have expressed interest in having me make websites for them, and this is a great opportunity and something I’ve been <em>saying</em> I’ll capitalize on, but have not.</li>
          <li><strong>Learn JavaScript.</strong> My school, University of Rochester, didn’t have any classes on JavaScript, so although I’m pretty proficient in HTML and CSS, I need Javascript if I want to get a career in web dev. I’ve known this since an interview for a front end web developer position in May 2017 (15 months ago!). That was the moment I realized, “These companies want someone who knows JavaScript. I need to learn JavaScript if I’m going to get a job in this industry.”</li>
          </ol>

          <p>Like the creator of #100DaysOfCode, <a href="https://twitter.com/ka11away" target="_blank" rel="noopener noreferrer">Alexander Kallaway</a>, points out, the hardest part is just sitting down and doing it.</p>

          <h3>Goals</h3>

          <p>I am asking myself, What is the <em>point</em> of doing 100 Days of Code? Throughout the challenge, I want to be able to remember why I started. <strong>Overall, my mission is to make myself a better candidate for a job in web development.</strong></p>

          <p>I applied to probably forty jobs in web design and related job titles before leaving college and didn’t get any of them. I am not qualified (yet) for a job as a web developer or UX/UI designer or whatever it is I want to be.</p>

          <p>One of the things I want to do for the next 100 days is to maintain a presence in the design community on Twitter. It will be helpful for me to read articles and conversations and immerse myself in the current events of design, and that will also help me be a more competitive candidate when I do start looking for jobs.</p>

          <p>Daily:</p>

          <ul>
          <li>1-5 relevant tweets</li>
          <li>Find and like 5 new accounts</li>
          <li>Retweet 3 new pieces of content</li>
          <li>Experiment with 1 trending hashtag</li>
          </ul>

          <p>I also want to find out whether I’m more interested in UX/UI design or whether I’m more interested in the coding aspect and becoming a front end web developer. My friend Zoe pointed out to me that the label isn’t as important as being confident in knowing my interests, so this is a secondary goal for #100DaysOfCode, like the goal to stay active on Twitter.</p>

          <h3>Project – Learn JavaScript</h3>

          <p>Learning JavaScript will help me succeed in my other goals, so I will start there.</p>

          <p>Alexander Kallaway suggests that if you don’t know the language yet and can’t work on projects, get as far as you can in 100 days in the FreeCodeCamp Front End Curriculum. A front-end web developer I spoke to recommended the same thing.</p>

          <p>Based on these suggestions, this is my plan of attack:</p>

          <ol>
          <li>Start with HTML/CSS</li>
          <li>If that’s too easy, do all the projects for HTML/CSS</li>
          <li>Then, move on the the JavaScript curriculum</li>
          </ol>

          <h3>Rules</h3>

          <ol>
          <li>Code for minimum one hour a day</li>
          <li>Tweet about my progress every day <a href="https://twitter.com/smwarsh" target="_blank" rel="noopener noreferrer">@smwarsh</a> using the hashtag <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash" target="_blank" rel="noopener noreferrer">#100DaysOfCode</a></li>
          <li>Each day, reach out to at least two people on Twitter who are also doing the challenge</li>
          <li>Log daily on GitHub</li>
          <li>Write a blog post at Day 1, Day 30, Day 60, Day 90, and Day 100 to see how well I’m following the rules, what kinds of adjustments I need to make, etc.</li>
          <li>Push code to GitHub every day (when relevant) so that anyone can see my progress. If you want, you can follow me <a href="https://github.com/smwarsh" title="smwarsh on GitHub" target="_blank" rel="noopener noreferrer">here</a>.</li>
          </ol>

          <p>I am worried I won’t have time to code every single day, specifically at work conferences, where I get only a couple hours of sleep every night. Realistically, I don’t know if I will manage to code on those days.</p>

          <p>I don’t know what to do when I am traveling, but I don’t want to cheat on those days. I don't want to skip them.</p>

          <p>Zoe suggested that I could do those hours beforehand. For example, if I know I’m going to be away all week at a work conference, I could spend the whole weekend before the trip coding, doing those hours. This would be similar to how I used to treat college assignments when I went away for sports or other trips. I know you’re not supposed to skip two days in a row, but I’m trying to think realistically in terms of my lifestyle. As a compromise, even if I do the extra work ahead of time, I should add the skipped days onto the end of the challenge.</p>

          <p>I will try to code even while I’m on vacation. Hopefully the friends I’m visiting will understand if I ask for an hour of time to code each day. Or maybe it will end up happening something like I just described for the work conferences.</p>

          <p>Another rule that worries me, from Alexander Kallaway’s <a href="https://medium.freecodecamp.org/join-the-100daysofcode-556ddb4579e4" target="_blank" rel="noopener noreferrer">blog post</a>: “The time spent doing tutorials, online courses, and other similar resources will NOT count towards this challenge. I want to write real code and work on real projects, facing real challenges.”</p>

          <p>I don’t think I can commit at this level. For the first thirty days I will start the clock and work on the FreeCodeCamp curriculum or other tasks related to my goals. It is a small step, but that is what I need to get started. It will be <em>more</em> than what I have been doing and I will be doing something for eventually changing my career to web design. After thirty days I will reevaluate this rule. Perhaps if I have enough coding knowledge to do projects, I will start to follow it more strictly.</p>

          <h3>Conclusion</h3>

          <p>These are my thoughts on the rules so far, my interpretation of them, and my game plan for #100DaysOfCode. I really want to make it work, because I keep saying that I want to change my career to web design, but I’m not doing anything about it. That needs to change. I know this will make me happy in the long run, so I need to do it, even if it is hard in the short term.</p>

        </div>
      </div>
    </div>
  );
}

export default Blog;