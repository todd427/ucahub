// UCAHub Cyberpsychology Quiz — Question Bank
// All MCQ options are balanced in length and plausibility.
// Categories: cyber-aggression, moral-disengagement, online-disinhibition,
//             ai-psychology, research-methods, personality, viva-specific

const QUIZ_QUESTIONS = [

  // ═══════════════════════════════════════════════════════════════
  // CYBER-AGGRESSION
  // ═══════════════════════════════════════════════════════════════

  {id:"ca_001",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"What is the key distinction between cyber-aggression and cyberbullying?",
    options:[
      "Cyber-aggression only refers to acts committed by adults against minors in digital settings",
      "Cyberbullying requires repetition and a power imbalance, while cyber-aggression is a broader umbrella term",
      "Cyberbullying refers to aggression on social media, whereas cyber-aggression refers to gaming contexts",
      "Cyber-aggression involves illegal acts while cyberbullying covers behaviours that are harmful but legal"
    ],correct:1,explanation:"Cyberbullying is a subset of cyber-aggression requiring repetition and power imbalance (Olweus, 1993). Cyber-aggression is the umbrella term for any intentional online harm.",reference:"Smith, P. K., et al. (2008).",tags:["definition","cyberbullying"]},

  {id:"ca_002",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyber-aggression can only occur through direct messages between individuals.",
    options:["True","False"],correct:1,explanation:"Cyber-aggression can occur through public posts, comments, image sharing, exclusion, impersonation, and many other channels.",reference:"Grigg, D. W. (2010).",tags:["definition","forms"]},

  {id:"ca_003",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"Which of the following is NOT typically considered a form of cyber-aggression?",
    options:[
      "Posting insulting comments in a hostile and aggressive online argument (flaming)",
      "Researching and broadcasting a person's home address without their consent (doxing)",
      "Quietly scrolling through a social media feed without interacting with any posts",
      "Deliberately shutting someone out of group chats and collaborative online activities"
    ],correct:2,explanation:"Passive scrolling is not an aggressive act. Cyber-aggression includes flaming, doxing, trolling, exclusion, and other intentionally harmful acts.",reference:"Kowalski, R. M., et al. (2014).",tags:["forms","definition"]},

  {id:"ca_004",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"What does 'flaming' refer to in the context of cyber-aggression?",
    options:[
      "Rapidly sharing viral content across multiple social media platforms simultaneously",
      "Using automated bot accounts to amplify a particular political viewpoint online",
      "Engaging in hostile and insulting arguments characterised by profanity and attacks",
      "Systematically monitoring another person's online activity without their knowledge"
    ],correct:2,explanation:"Flaming involves hostile, aggressive exchanges between users, often characterised by profanity, insults, and personal attacks in online discussions.",reference:"O'Sullivan, P. B., & Flanagin, A. J. (2003).",tags:["flaming","definition"]},

  {id:"ca_005",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"What is 'doxing'?",
    options:[
      "Creating multiple fake profiles to harass a single target from different accounts",
      "Publishing someone's private or identifying information online without their consent",
      "Sending a very large number of unwanted messages to overwhelm someone's inbox",
      "Deliberately spreading false rumours about someone across several online platforms"
    ],correct:1,explanation:"Doxing involves researching and publicly broadcasting private or identifying information about an individual, typically with malicious intent.",reference:"Douglas, D. M. (2016).",tags:["doxing","definition"]},

  {id:"ca_006",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyberstalking is a form of cyber-aggression.",
    options:["True","False"],correct:0,explanation:"Cyberstalking — repeated, unwanted online contact or monitoring that causes fear — is a recognised form of cyber-aggression.",reference:"Spitzberg, B. H., & Hoobler, G. (2002).",tags:["cyberstalking","forms"]},

  {id:"ca_007",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"What is 'trolling' in online contexts?",
    options:[
      "Using encryption software to disguise your identity while browsing internet forums",
      "Deliberately posting inflammatory or provocative content to disrupt and provoke",
      "Reporting content that violates a platform's community guidelines and terms of use",
      "Passively reading posts in online forums without ever contributing any comments"
    ],correct:1,explanation:"Trolling involves deliberately posting provocative, offensive, or off-topic content in online communities to disrupt discussion and elicit emotional reactions.",reference:"Hardaker, C. (2010).",tags:["trolling","definition"]},

  {id:"ca_008",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"Which of these best describes 'online exclusion' as a form of cyber-aggression?",
    options:[
      "Choosing not to accept a friend request from someone you do not personally know",
      "Deliberately leaving someone out of online groups, chats, or collaborative activities",
      "Adjusting your privacy settings so that strangers cannot view your personal profile",
      "Temporarily deactivating your social media account to take a break from the internet"
    ],correct:1,explanation:"Online exclusion involves intentionally shutting someone out of online social groups, group chats, gaming sessions, or collaborative activities as a means of social aggression.",reference:"Smith, P. K., et al. (2008).",tags:["exclusion","forms"]},

  {id:"ca_009",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'impersonation' in the context of cyber-aggression?",
    options:[
      "Using a consistent pseudonym to maintain privacy while participating in forums",
      "Operating a fan account that celebrates and shares content about a public figure",
      "Pretending to be another specific person online in order to damage their reputation",
      "Connecting to the internet through a virtual private network to protect your data"
    ],correct:2,explanation:"Impersonation involves creating fake profiles or accounts that pretend to be another person, typically to post embarrassing or harmful content that damages the victim's reputation.",reference:"Kowalski, R. M., et al. (2014).",tags:["impersonation","forms"]},

  {id:"ca_010",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What distinguishes 'outing' from other forms of cyber-aggression?",
    options:[
      "It requires a sustained pattern of harassment occurring over several months minimum",
      "It specifically involves sharing someone's private secrets or information without consent",
      "It can only be committed by people who hold a position of authority over the victim",
      "It exclusively refers to revealing someone's sexual orientation without their permission"
    ],correct:1,explanation:"Outing specifically involves sharing someone's private secrets, embarrassing information, or images publicly online. It exploits trust and can cause significant psychological harm.",reference:"Willard, N. E. (2007).",tags:["outing","definition"]},

  {id:"ca_011",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyber-aggression only affects adolescents and teenagers.",
    options:["True","False"],correct:1,explanation:"Cyber-aggression affects all age groups. Adults experience workplace cyberbullying, online harassment, and other forms of digital aggression.",reference:"Kowalski, R. M., et al. (2014).",tags:["demographics","prevalence"]},

  {id:"ca_012",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What characteristic of digital environments most commonly facilitates cyber-aggression?",
    options:[
      "The high cost of internet access that limits participation to wealthier demographics",
      "The absence of physical and social cues that would normally inhibit aggressive behaviour",
      "The requirement for all users to verify their real identity before creating an account",
      "The prevalence of end-to-end encryption that prevents platforms from moderating content"
    ],correct:1,explanation:"Digital environments reduce feedback cues (facial expressions, tone, visible distress) that normally inhibit aggressive behaviour in face-to-face interactions.",reference:"Suler, J. (2004).",tags:["digital-environment","disinhibition"]},

  {id:"ca_013",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"How does the permanence of online content relate to cyber-aggression?",
    options:[
      "Permanent content reduces harm because people become desensitised to it over time",
      "Most aggressive content is automatically deleted within 48 hours by platform algorithms",
      "Aggressive content can be saved, shared, and resurface indefinitely, amplifying the harm",
      "Content permanence only matters in legal contexts and has no psychological relevance"
    ],correct:2,explanation:"The permanence of digital content means victims may be repeatedly re-exposed to aggressive content, and harmful material can resurface long after the original incident.",reference:"Slonje, R., & Smith, P. K. (2008).",tags:["permanence","impact"]},

  {id:"ca_014",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is the 'audience effect' in cyber-aggression?",
    options:[
      "The tendency for people to perform better at tasks when they are being observed",
      "The potential for a large online audience to witness aggression, amplifying humiliation",
      "The phenomenon where audiences on live streams donate money to encourage conflict",
      "The effect of algorithmic audience-building on a content creator's mental health"
    ],correct:1,explanation:"Unlike face-to-face bullying witnessed by few, cyber-aggression can potentially be seen by hundreds or thousands, dramatically increasing humiliation and harm.",reference:"Slonje, R., & Smith, P. K. (2008).",tags:["audience","amplification"]},

  {id:"ca_015",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What role does 'intent' play in defining cyber-aggression?",
    options:[
      "Intent is entirely irrelevant because only the impact on the victim matters definitionally",
      "Cyber-aggression requires deliberate intent to cause harm to another person or group",
      "Accidental harm is always classified as cyber-aggression regardless of the sender's intent",
      "Intent can only be legally determined through a formal court proceeding and investigation"
    ],correct:1,explanation:"Most definitions of cyber-aggression specify intentionality — the perpetrator must deliberately aim to cause harm.",reference:"Anderson, C. A., & Bushman, B. J. (2002).",tags:["intent","definition"]},

  {id:"ca_016",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"A single aggressive act online can constitute cyber-aggression.",
    options:["True","False"],correct:0,explanation:"Unlike cyberbullying (which requires repetition), a single intentionally harmful act online does qualify as cyber-aggression.",reference:"Grigg, D. W. (2010).",tags:["definition","single-act"]},

  {id:"ca_017",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'happy slapping' in cyber-aggression research?",
    options:[
      "Sending overly enthusiastic congratulatory messages to mock someone's achievements",
      "Recording a physical assault on video and then distributing the footage online widely",
      "Using excessive emoji and exclamation marks in a passive-aggressive communication style",
      "Creating viral challenges that encourage participants to engage in risky physical stunts"
    ],correct:1,explanation:"Happy slapping involves filming a physical attack on an unsuspecting victim and then distributing the recording online. It bridges physical aggression and cyber-aggression.",reference:"Smith, P. K., et al. (2008).",tags:["happy-slapping","forms"]},

  {id:"ca_018",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What does 'griefing' refer to in online gaming contexts?",
    options:[
      "Expressing genuine sadness or disappointment about losing a competitive match online",
      "Deliberately disrupting other players' experience through harassment or rule-breaking",
      "Providing constructive feedback to teammates about how to improve their gameplay",
      "Reporting other players to game moderators for suspected violations of game rules"
    ],correct:1,explanation:"Griefing involves intentionally irritating, harassing, or disrupting other players' experience in online games through teamkilling, blocking, exploiting, or other antisocial behaviours.",reference:"Chesney, T., et al. (2009).",tags:["griefing","gaming"]},

  {id:"ca_019",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What does CAI stand for in cyber-aggression research, and how is it measured?",
    options:[
      "Computer-Assisted Intervention — a clinical interview protocol administered by trained staff",
      "Cognitive Aggression Indicator — a reaction-time task measuring implicit hostile cognitions",
      "Cyber-Aggression Inventory — a self-report scale measuring frequency of online aggression",
      "Cyber-Aggression Index — a content analysis scoring system applied to social media posts"
    ],correct:2,explanation:"The Cyber-Aggression Inventory (CAI) is a self-report instrument that measures the frequency and types of aggressive behaviours perpetrated through digital technologies.",reference:"Grigg, D. W. (2010).",tags:["CAI","measurement"]},

  {id:"ca_020",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality trait showed the largest gender difference in cyber-aggression research (McCaffrey, 2026)?",
    options:[
      "Impulsivity, with a large gender difference of Cohen's d = 0.85 (men scoring higher)",
      "Agreeableness, with a large gender difference of Cohen's d = 0.95 (women scoring higher)",
      "Emotional detachment, with a very large gender difference of Cohen's d = 1.20 (men higher)",
      "Neuroticism, with a moderate gender difference of Cohen's d = 0.72 (women scoring higher)"
    ],correct:2,explanation:"Emotional detachment showed the largest gender difference (d = 1.20), with men scoring significantly higher. This is a very large effect size.",reference:"McCaffrey, T. (2026).",tags:["gender-differences","emotional-detachment"]},

  {id:"ca_021",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"In McCaffrey (2026), what was the dominant predictor of CAI scores?",
    options:[
      "Perceived anonymity online, with a positive standardised beta of .33 and medium effect",
      "Trust in artificial intelligence systems, with a standardised beta of .28 and small effect",
      "Normalisation of aggression, with a standardised beta of .37 and medium-to-large effect",
      "Trait-level extraversion, with a standardised beta of .31 and medium effect size overall"
    ],correct:2,explanation:"Normalisation of aggression was the strongest predictor (β = .37, f² = .22), indicating that viewing online aggression as normal behaviour was the most powerful driver.",reference:"McCaffrey, T. (2026).",tags:["normalisation","prediction"]},

  {id:"ca_022",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"CAI scores strongly predicted responses to which type of measure in McCaffrey (2026)?",
    options:[
      "Rosenberg Self-Esteem Scale scores, with a standardised beta of .39 in the final model",
      "Hostile vignette responses, with a strong standardised beta coefficient of .47 overall",
      "Marlowe-Crowne Social Desirability scores, with a standardised beta of .42 in step three",
      "Grade Point Average and academic engagement measures, with a standardised beta of .35"
    ],correct:1,explanation:"CAI scores strongly predicted hostile vignette responses (β = .47), showing that self-reported cyber-aggression was meaningfully related to hostile responding.",reference:"McCaffrey, T. (2026).",tags:["vignettes","prediction"]},

  {id:"ca_023",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyber-aggression can occur 24 hours a day, 7 days a week.",
    options:["True","False"],correct:0,explanation:"Unlike traditional bullying confined to school or work hours, cyber-aggression can occur at any time through smartphones and always-on connections.",reference:"Slonje, R., & Smith, P. K. (2008).",tags:["24-7","impact"]},

  {id:"ca_024",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What does the 'bully-victim' classification refer to?",
    options:[
      "An individual who exclusively engages in bullying behaviour without ever being targeted",
      "An individual who exclusively experiences victimisation without engaging in perpetration",
      "An individual who both engages in aggressive behaviour and experiences victimisation",
      "An individual who witnesses bullying and then reports the incident to authorities"
    ],correct:2,explanation:"Bully-victims are individuals who both perpetrate and experience aggression. Research suggests they may face worse psychological outcomes than 'pure' bullies or 'pure' victims.",reference:"Haynie, D. L., et al. (2001).",tags:["bully-victims","classification"]},

  {id:"ca_025",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Being a victim of cyber-aggression and being a perpetrator are mutually exclusive roles.",
    options:["True","False"],correct:1,explanation:"Research consistently shows significant overlap between victimisation and perpetration. Many individuals are 'bully-victims' who both experience and engage in cyber-aggression.",reference:"Kowalski, R. M., et al. (2014).",tags:["bully-victims","overlap"]},

  {id:"ca_026",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What role do bystanders play in cyber-aggression?",
    options:[
      "Bystanders are unable to influence the outcome of an incident in any meaningful way",
      "Bystanders always intervene to defend the victim and report the perpetrator immediately",
      "Bystanders can amplify harm by sharing content, reinforce it by silence, or reduce it by defending",
      "Bystanders are always classified as co-perpetrators under current cyberbullying legislation"
    ],correct:2,explanation:"Online bystanders can witness, share, like, or comment on aggressive content. Their responses range from passive observation to active reinforcement or active defense of the victim.",reference:"Bastiaensens, S., et al. (2014).",tags:["bystanders","roles"]},

  {id:"ca_027",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is a common psychological consequence of being a victim of cyber-aggression?",
    options:[
      "Improved self-esteem resulting from the resilience developed through the experience",
      "Increased anxiety and depression, along with lower self-esteem and social withdrawal",
      "Better academic performance driven by heightened motivation to prove others wrong",
      "Enhanced social skills gained from learning to navigate difficult online interactions"
    ],correct:1,explanation:"Victims commonly experience increased anxiety, depression, lower self-esteem, social withdrawal, and in severe cases, suicidal ideation.",reference:"Kowalski, R. M., et al. (2014).",tags:["impact","mental-health"]},

  {id:"ca_028",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Cyber-aggression can have physical health consequences for victims.",
    options:["True","False"],correct:0,explanation:"The stress of victimisation can manifest physically through headaches, sleep disturbances, appetite changes, stomach problems, and other psychosomatic symptoms.",reference:"Kowalski, R. M., & Limber, S. P. (2013).",tags:["physical-health","impact"]},

  {id:"ca_029",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'digital self-harm'?",
    options:[
      "Accidentally damaging your own electronic devices through careless physical handling",
      "Spending excessive amounts of time on screens resulting in eye strain and headaches",
      "Anonymously posting negative or hurtful content about yourself on online platforms",
      "Deliberately deleting all of your own social media accounts out of frustration or anger"
    ],correct:2,explanation:"Digital self-harm involves anonymously posting negative content about oneself online. It may serve as a cry for help, a way to elicit support, or a reflection of self-hatred.",reference:"Patchin, J. W., & Hinduja, S. (2017).",tags:["digital-self-harm","forms"]},

  {id:"ca_030",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is the most recommended first response for someone experiencing cyber-aggression?",
    options:[
      "Immediately retaliate with an equally aggressive response to deter further attacks",
      "Permanently delete all of your social media accounts to avoid any further contact",
      "Save evidence of the aggression, block the perpetrator, and report to the platform",
      "Confront the perpetrator publicly to shame them into stopping their hostile behaviour"
    ],correct:2,explanation:"Experts recommend documenting/saving evidence (screenshots), blocking the perpetrator, and reporting the behaviour. Retaliation tends to escalate situations.",reference:"Hinduja, S., & Patchin, J. W. (2015).",tags:["response","evidence"]},

  {id:"ca_031",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What approach do the most effective anti-cyberbullying programmes take?",
    options:[
      "Exclusively focusing on severe punishments for perpetrators as a deterrent to others",
      "Whole-school approaches combining education, policy, parental involvement, and SEL",
      "Completely banning all technology and internet access during school hours and at home",
      "Only addressing individual perpetrators through one-on-one counselling and therapy"
    ],correct:1,explanation:"Meta-analyses show whole-school approaches — combining awareness education, clear policies, bystander training, social-emotional skill building, and parental involvement — are most effective.",reference:"Ttofi, M. M., & Farrington, D. P. (2011).",tags:["prevention","whole-school"]},

  {id:"ca_032",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Simply banning smartphones in schools is an effective strategy for preventing cyber-aggression.",
    options:["True","False"],correct:1,explanation:"Phone bans alone are ineffective because cyber-aggression occurs outside school hours and on personal devices. Effective prevention requires building skills and changing norms.",reference:"Kowalski, R. M., et al. (2014).",tags:["phone-ban","prevention"]},

  {id:"ca_033",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Which theoretical framework conceptualises cyber-aggression as partly resulting from reduced self-awareness?",
    options:[
      "Attachment theory, which focuses on early caregiving bonds and their effects on behaviour",
      "Deindividuation theory, which proposes that anonymity weakens internal behavioural restraints",
      "Self-determination theory, which examines autonomy, competence, and relatedness needs",
      "Social learning theory, which emphasises observational learning and modelling of behaviour"
    ],correct:1,explanation:"Deindividuation theory (Zimbardo, 1969) proposes that anonymity and reduced self-awareness weaken internal restraints, potentially increasing aggression online.",reference:"Zimbardo, P. G. (1969).",tags:["deindividuation","theory"]},

  {id:"ca_034",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"What is the Social Identity Model of Deindividuation Effects (SIDE)?",
    options:[
      "A model proposing that anonymity always disinhibits individuals equally across all contexts",
      "A model proposing that anonymity can increase conformity to group norms rather than simply disinhibiting",
      "A model explaining why social media platforms use algorithmic content recommendation systems",
      "A model describing the psychological effects of creating and maintaining multiple online identities"
    ],correct:1,explanation:"The SIDE model (Reicher et al., 1995) argues that anonymity doesn't just disinhibit — it can increase conformity to salient group norms, whether prosocial or antisocial.",reference:"Reicher, S. D., et al. (1995).",tags:["SIDE","deindividuation"]},

  {id:"ca_035",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"How does routine activities theory explain cyber-aggression?",
    options:[
      "It proposes that habitual internet use gradually desensitises users to aggressive content online",
      "It argues that aggression occurs when a motivated offender, suitable target, and absent guardianship converge",
      "It suggests that daily routines of exercise and healthy eating reduce aggressive online tendencies",
      "It explains how platform algorithms create routine exposure to increasingly extreme online content"
    ],correct:1,explanation:"Routine activities theory adapted to online contexts posits that cyber-aggression is more likely when motivated offenders encounter suitable targets in unmonitored online spaces.",reference:"Navarro, J. N., & Jasinski, J. L. (2012).",tags:["routine-activities","theory"]},

  {id:"ca_036",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'context collapse' and how does it contribute to online conflicts?",
    options:[
      "When a website's server infrastructure fails, causing all user-generated content to be lost",
      "When content intended for one audience is seen by unintended audiences, leading to misunderstandings",
      "When an online discussion loses its original topic and devolves into unrelated personal attacks",
      "When multiple social media platforms merge their user databases into a single unified service"
    ],correct:1,explanation:"Context collapse occurs when the multiple audiences in someone's life merge into one online audience. A joke for close friends may offend colleagues, triggering conflict.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["context-collapse","conflict"]},

  {id:"ca_037",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"How does algorithmic amplification relate to cyber-aggression?",
    options:[
      "Platform algorithms effectively prevent all aggressive content from reaching users' feeds",
      "Social media algorithms may amplify aggressive content because it generates high engagement",
      "Algorithms have been shown to have no measurable effect on the spread of online aggression",
      "Algorithmic amplification only affects political content and has no link to interpersonal aggression"
    ],correct:1,explanation:"Platform algorithms optimise for engagement, and aggressive or outrage-inducing content often generates more reactions. This creates feedback loops that amplify aggressive content.",reference:"Brady, W. J., et al. (2017).",tags:["algorithms","amplification"]},

  {id:"ca_038",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Blocking someone on social media is considered a form of cyber-aggression.",
    options:["True","False"],correct:1,explanation:"Blocking is a self-protective action, not aggression. It allows users to control who can contact them. While it can accompany other acts, blocking itself is a safety feature.",reference:"Kowalski, R. M., et al. (2014).",tags:["blocking","misconception"]},

  {id:"ca_039",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is the 'chilling effect' in the context of online aggression?",
    options:[
      "The physical sensation of cold that victims report experiencing during panic attacks",
      "The cooling down period that platforms enforce before allowing users to post again",
      "The deterrent effect where threat of aggression causes people to self-censor online",
      "The calming influence that moderators have when they intervene during heated debates"
    ],correct:2,explanation:"The chilling effect describes how the threat or experience of online aggression leads individuals to self-censor, withdraw from discussions, or avoid participating online.",reference:"Citron, D. K. (2014).",tags:["chilling-effect","self-censorship"]},

  {id:"ca_040",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyber-aggression perpetrators always know they are being aggressive.",
    options:["True","False"],correct:1,explanation:"Some perpetrators may not recognise their behaviour as aggressive — they may see it as humour, justified retaliation, or normal online interaction.",reference:"Kowalski, R. M., et al. (2014).",tags:["awareness","intent"]},

  {id:"ca_041",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'sealioning' as a form of online harassment?",
    options:[
      "Persistently and politely demanding evidence or explanations in bad faith to exhaust a target",
      "Flooding someone's social media mentions with images of animals to distract from their point",
      "Creating a seal of approval badge for verified accounts that cannot be revoked or appealed",
      "Using voice-changing software to impersonate a marine biologist during video conference calls"
    ],correct:0,explanation:"Sealioning involves repeatedly and superficially politely asking questions not in genuine inquiry but to exhaust and silence the target. Its surface politeness makes it hard to moderate.",reference:"Johnson, N., et al. (2019).",tags:["sealioning","bad-faith"]},

  {id:"ca_042",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'DARVO' in the context of online aggression?",
    options:[
      "A protocol used by platforms to automatically detect and remove violent online content",
      "Deny, Attack, Reverse Victim and Offender — a manipulation tactic used by aggressors",
      "A research methodology for studying the demographic factors associated with online harm",
      "Digital Assessment of Risk and Vulnerability Online — a clinical screening questionnaire"
    ],correct:1,explanation:"DARVO is a manipulation pattern where perpetrators deny behaviour, attack the accuser, then reverse roles by claiming to be the real victim. Common in online harassment.",reference:"Freyd, J. J. (1997).",tags:["DARVO","manipulation"]},

  {id:"ca_043",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'cross-platform harassment'?",
    options:[
      "Harassment that only takes place on platforms that support cross-device synchronisation",
      "Disagreements between users who prefer different social media platforms over others",
      "Harassment campaigns that follow a target across multiple platforms, making escape difficult",
      "Technical attacks that exploit security vulnerabilities shared between multiple platforms"
    ],correct:2,explanation:"Cross-platform harassment occurs when aggressors pursue targets across multiple platforms and channels, overwhelming any single platform's moderation efforts.",reference:"Marwick, A. E. (2021).",tags:["cross-platform","persistence"]},

  {id:"ca_044",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Memes can function as a vehicle for cyber-aggression.",
    options:["True","False"],correct:0,explanation:"Memes can carry aggressive content through humour, targeting individuals or groups. Their shareable format can make harassment go viral, and comedic framing provides deniability.",reference:"Phillips, W. (2015).",tags:["memes","humour"]},

  {id:"ca_045",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The impact of cyber-aggression depends partly on the victim's interpretation of the act.",
    options:["True","False"],correct:0,explanation:"While perpetrator intent matters, the victim's perception significantly influences the psychological impact. The same act may be experienced differently depending on context and relationship.",reference:"Kowalski, R. M., et al. (2014).",tags:["perception","impact"]},

  {id:"ca_046",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"In McCaffrey's (2026) sample, what was the approximate gender composition?",
    options:[
      "An even split of approximately 50% female and 50% male participants in the study",
      "Approximately 73% female and 27% male, a common pattern in psychology convenience samples",
      "Approximately 60% female and 40% male, reflecting the general university student population",
      "Approximately 85% female and 15% male, due to recruitment from a nursing programme only"
    ],correct:1,explanation:"The sample was approximately 73% female, a common pattern in psychology research where women are overrepresented, particularly in university convenience samples.",reference:"McCaffrey, T. (2026).",tags:["sample","gender"]},

  {id:"ca_047",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What was the approximate sample size range in McCaffrey (2026)?",
    options:[
      "N = 50 to 80 depending on the specific analysis and the amount of missing data encountered",
      "N = 131 to 167 depending on the analysis, reflecting different levels of missing data",
      "N = 500 to 600 depending on the analysis, with dropout rates varying across time points",
      "N = 1,000 or more, as the study used a large-scale online data collection methodology"
    ],correct:1,explanation:"The sample ranged from N = 131 to N = 167 depending on the specific analysis, reflecting different levels of missing data across measures.",reference:"McCaffrey, T. (2026).",tags:["sample-size","methodology"]},

  {id:"ca_048",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Research consistently shows that boys are always more likely than girls to engage in cyber-aggression.",
    options:["True","False"],correct:1,explanation:"Gender differences are inconsistent across studies. Some find boys higher, others no difference, and some find girls higher in certain forms like relational cyber-aggression.",reference:"Barlett, C., & Coyne, S. M. (2014).",tags:["gender","prevalence"]},

  {id:"ca_049",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Emoji and GIFs can be used aggressively in online communication.",
    options:["True","False"],correct:0,explanation:"While often playful, emoji and GIFs can be used aggressively — threatening imagery, mocking GIFs, or emoji used to demean. Context determines whether their use constitutes aggression.",reference:"Kowalski, R. M., et al. (2014).",tags:["emoji","nonverbal"]},

  {id:"ca_050",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Cyber-aggression between romantic partners (cyber dating abuse) is a recognised phenomenon.",
    options:["True","False"],correct:0,explanation:"Cyber dating abuse includes monitoring partner's online activity, sending threatening messages, and using technology for control within intimate relationships.",reference:"Zweig, J. M., et al. (2013).",tags:["dating-abuse","intimate-partner"]},

  // ═══════════════════════════════════════════════════════════════
  // MORAL DISENGAGEMENT
  // ═══════════════════════════════════════════════════════════════

  {id:"md_001",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"How many mechanisms of moral disengagement did Bandura identify?",
    options:[
      "Four primary mechanisms operating at the individual level of moral reasoning only",
      "Six mechanisms derived from Kohlberg's stages of moral development framework",
      "Eight distinct mechanisms that selectively deactivate moral self-regulation processes",
      "Ten mechanisms spanning biological, cognitive, and social dimensions of moral thought"
    ],correct:2,explanation:"Bandura identified eight mechanisms: moral justification, euphemistic labelling, advantageous comparison, displacement of responsibility, diffusion of responsibility, distortion of consequences, dehumanisation, and attribution of blame.",reference:"Bandura, A. (1999).",tags:["Bandura","mechanisms"]},

  {id:"md_002",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Which mechanism involves reframing harmful behaviour as serving a higher purpose?",
    options:[
      "Displacement of responsibility, which transfers blame onto authority figures or systems",
      "Moral justification, which recasts harmful behaviour as serving a worthy or noble cause",
      "Diffusion of responsibility, which spreads accountability across multiple group members",
      "Euphemistic labelling, which uses sanitised language to disguise the nature of the act"
    ],correct:1,explanation:"Moral justification reframes harmful behaviour as serving a worthy cause. It is distinct from displacement/diffusion (responsibility) and euphemistic labelling (language).",reference:"Bandura, A. (1999).",tags:["moral-justification","mechanism"]},

  {id:"md_003",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Which mechanism involves using sanitised language to make harmful actions seem less damaging?",
    options:[
      "Dehumanisation, which strips targets of human qualities to reduce empathic restraint",
      "Advantageous comparison, which minimises harm by contrasting it with far worse actions",
      "Euphemistic labelling, which uses clean or convoluted language to disguise harmful conduct",
      "Attribution of blame, which shifts moral responsibility onto the victim of the harmful act"
    ],correct:2,explanation:"Euphemistic labelling uses sanitised language to make harmful conduct appear less harmful — e.g., calling aggression 'just trolling' or casualties 'collateral damage'.",reference:"Bandura, A. (1999).",tags:["euphemistic-labelling","mechanism"]},

  {id:"md_004",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement is a stable personality trait that cannot change across situations.",
    options:["True","False"],correct:1,explanation:"Moral disengagement consists of cognitive mechanisms that can be activated or deactivated depending on context. People may disengage morally in some situations but not others.",reference:"Bandura, A. (2002).",tags:["situational","cognitive"]},

  {id:"md_005",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'diffusion of responsibility' in Bandura's framework?",
    options:[
      "Blaming the victim for provoking the harmful behaviour through their own poor choices",
      "Comparing one's harmful actions to far worse examples to minimise perceived severity",
      "Spreading responsibility across multiple group members so no individual feels accountable",
      "Claiming that an authority figure or institutional policy required the harmful behaviour"
    ],correct:2,explanation:"Diffusion of responsibility occurs when harm is carried out by a group, so no single individual feels personally responsible. Online mob harassment facilitates this.",reference:"Bandura, A. (1999).",tags:["diffusion","group"]},

  {id:"md_006",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'displacement of responsibility'?",
    options:[
      "Attributing one's harmful actions to the directions or influence of an authority figure",
      "Spreading accountability across all members of a group to reduce individual culpability",
      "Minimising the perceived impact of harmful behaviour on the target of the aggression",
      "Redefining harmful behaviour as a necessary or justified response to prior provocation"
    ],correct:0,explanation:"Displacement of responsibility involves viewing one's actions as dictated by authority or social pressure — 'I was just following orders' or 'the platform enables it'.",reference:"Bandura, A. (1999).",tags:["displacement","authority"]},

  {id:"md_007",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How does 'advantageous comparison' work as a moral disengagement mechanism?",
    options:[
      "Making harmful behaviour seem minor by comparing it to much worse actions by others",
      "Comparing the positive outcomes of one's behaviour against the negative outcomes for others",
      "Evaluating different aggressive strategies to select the one most likely to succeed",
      "Contrasting the target's behaviour with community standards to justify the aggressive response"
    ],correct:0,explanation:"Advantageous comparison minimises perceived severity by contrasting it with far worse actions: 'I just sent a mean message — at least I'm not physically hurting anyone'.",reference:"Bandura, A. (1999).",tags:["advantageous-comparison","mechanism"]},

  {id:"md_008",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'distortion of consequences'?",
    options:[
      "Exaggerating the harm caused to justify seeking legal action against the perpetrator",
      "Minimising, ignoring, or misconstruing the actual harm caused by one's harmful actions",
      "Projecting the negative consequences of one's behaviour onto unrelated third parties",
      "Distorting statistical data about the prevalence of harmful online behaviour in reports"
    ],correct:1,explanation:"Distortion of consequences involves minimising or denying harm: 'It's just words on a screen, it can't really hurt anyone' or 'They're probably not even bothered'.",reference:"Bandura, A. (1999).",tags:["distortion","consequences"]},

  {id:"md_009",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How does dehumanisation function as a moral disengagement mechanism online?",
    options:[
      "It involves making artificial intelligence systems appear more human-like and relatable",
      "It strips targets of human qualities by reducing them to labels, making harm feel justified",
      "It encourages users to create detailed avatar representations of their online personality",
      "It increases empathic concern by exposing users to a wider diversity of online viewpoints"
    ],correct:1,explanation:"Dehumanisation involves perceiving targets as less than fully human — as objects, abstractions, or labels. Online text-based interaction facilitates this by reducing people to usernames.",reference:"Bandura, A. (1999).",tags:["dehumanisation","mechanism"]},

  {id:"md_010",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'attribution of blame' in moral disengagement?",
    options:[
      "Accurately identifying which individual in a group was responsible for a harmful action",
      "Conducting a formal investigation to determine the root cause of an aggressive incident",
      "Blaming the victim for provoking or deserving the harmful treatment they have received",
      "Attributing the cause of one's aggressive behaviour to a diagnosed mental health condition"
    ],correct:2,explanation:"Attribution of blame shifts culpability onto the victim: 'They shouldn't have posted that if they didn't want criticism.' This absolves the perpetrator of responsibility.",reference:"Bandura, A. (1999).",tags:["attribution-blame","victim-blaming"]},

  {id:"md_011",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Which moral disengagement mechanism is most consistently associated with cyber-aggression in the literature?",
    options:[
      "Displacement of responsibility onto platform designers and their content moderation systems",
      "Dehumanisation of targets through the use of slurs, derogatory labels, and hostile imagery",
      "Moral justification and the normalisation of aggression as acceptable online behaviour",
      "Distortion of consequences through claims that online interactions have no real-world impact"
    ],correct:2,explanation:"Moral justification and normalisation of aggression are most consistently linked to cyber-aggression. In McCaffrey (2026), normalisation was the dominant predictor (β = .37, f² = .22).",reference:"McCaffrey, T. (2026).",tags:["normalisation","prediction"]},

  {id:"md_012",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"Who developed the theory of moral disengagement?",
    options:[
      "Sigmund Freud, as part of his psychoanalytic theory of unconscious moral conflict",
      "Albert Bandura, as part of his broader social cognitive theory of human behaviour",
      "B.F. Skinner, as an extension of his operant conditioning framework of reinforcement",
      "Carl Rogers, as a component of his person-centred approach to humanistic psychology"
    ],correct:1,explanation:"Albert Bandura developed moral disengagement theory as part of his social cognitive theory, explaining how people selectively disengage moral self-regulation.",reference:"Bandura, A. (1986).",tags:["Bandura","theory"]},

  {id:"md_013",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"People who morally disengage always know they are doing so.",
    options:["True","False"],correct:1,explanation:"Moral disengagement often operates automatically and outside conscious awareness. People genuinely believe their justifications rather than consciously choosing to disengage.",reference:"Bandura, A. (1999).",tags:["awareness","automatic"]},

  {id:"md_014",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How does moral disengagement differ from amorality?",
    options:[
      "Moral disengagement is more extreme and permanent than amorality in every context",
      "Amoral individuals have moral standards but ignore them; disengaged individuals do not",
      "Morally disengaged people have moral standards but selectively bypass them; amoral people lack them",
      "Amorality is temporary and situational, whereas moral disengagement is a stable personality trait"
    ],correct:2,explanation:"Morally disengaged people have moral standards but use cognitive mechanisms to selectively bypass them in specific situations. Amoral individuals lack moral standards altogether.",reference:"Bandura, A. (1999).",tags:["amorality","distinction"]},

  {id:"md_015",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How do 'just trolling' and 'just banter' function as moral disengagement?",
    options:[
      "They serve as attribution of blame by implying that the target provoked the behaviour",
      "They serve as euphemistic labelling combined with distortion of consequences by recasting aggression as harmless fun",
      "They serve as displacement of responsibility by suggesting the platform should prevent trolling",
      "They serve as advantageous comparison by implying that other behaviours are far more harmful"
    ],correct:1,explanation:"'Just trolling/banter' combines euphemistic labelling (renaming aggression as humour) with distortion of consequences (implying it's harmless). These are among the most common online disengagement phrases.",reference:"Sest, N., & March, E. (2017).",tags:["trolling","banter","euphemism"]},

  {id:"md_016",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'normalisation of aggression' in the context of moral disengagement?",
    options:[
      "The clinical process of treating aggressive impulses through cognitive behavioural therapy",
      "Statistical procedures used to normalise the distribution of aggression scale scores",
      "The belief that aggressive behaviour is common, expected, and acceptable in online settings",
      "A developmental process where children learn appropriate expression of angry feelings"
    ],correct:2,explanation:"Normalisation means viewing aggression as a routine, expected part of online interaction. When it's seen as 'just how things are', moral self-regulation weakens.",reference:"McCaffrey, T. (2026).",tags:["normalisation","norms"]},

  {id:"md_017",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Moral disengagement can be reduced through targeted educational interventions.",
    options:["True","False"],correct:0,explanation:"Educational programmes targeting specific mechanisms — awareness of rationalisations, empathy training, perspective-taking — can reduce moral disengagement and associated aggression.",reference:"Gini, G., et al. (2014).",tags:["intervention","education"]},

  {id:"md_018",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Moral disengagement has been linked to behaviours beyond aggression, including academic dishonesty and environmental harm.",
    options:["True","False"],correct:0,explanation:"Moral disengagement has been applied to many domains: academic cheating, corporate misconduct, environmental damage, and political violence.",reference:"Bandura, A. (2016).",tags:["applications","broad"]},

  {id:"md_019",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"Which of these is an example of 'distortion of consequences' online?",
    options:[
      "'They probably didn't even read my comment so it couldn't have caused them any harm'",
      "'I only posted that comment because exposing wrongdoing is an important public service'",
      "'The moderator's rules forced everyone to behave that way, so it was not really my fault'",
      "'What I did was nothing compared to the death threats that other users were posting online'"
    ],correct:0,explanation:"'They probably didn't even read it' minimises perceived impact — classic distortion of consequences. The others represent moral justification, displacement, and advantageous comparison.",reference:"Bandura, A. (1999).",tags:["distortion","example"]},

  {id:"md_020",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"Which of these is an example of 'attribution of blame'?",
    options:[
      "'Everybody in the forum behaves this way, so it is just the normal culture around here'",
      "'I was only having a bit of a joke with them and they need to learn to take it lightly'",
      "'They should not have posted that controversial opinion if they cannot handle criticism'",
      "'It is not as though anyone actually suffered any real harm from what I wrote on there'"
    ],correct:2,explanation:"Blaming the victim for 'inviting' the aggression is classic attribution of blame. The others represent diffusion/normalisation, euphemistic labelling, and distortion of consequences.",reference:"Bandura, A. (1999).",tags:["attribution","example"]},

  // ═══════════════════════════════════════════════════════════════
  // ONLINE DISINHIBITION
  // ═══════════════════════════════════════════════════════════════

  {id:"od_001",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",
    question:"How many factors did Suler identify in his model of the online disinhibition effect?",
    options:[
      "Three factors primarily concerning technological features of online communication",
      "Four factors focused on individual personality differences between online users",
      "Six factors spanning anonymity, invisibility, asynchronicity, and three psychological processes",
      "Eight factors mirroring Bandura's moral disengagement mechanisms in digital contexts"
    ],correct:2,explanation:"Suler (2004) identified six factors: dissociative anonymity, invisibility, asynchronicity, solipsistic introjection, dissociative imagination, and minimisation of status/authority.",reference:"Suler, J. (2004).",tags:["Suler","six-factors"]},

  {id:"od_002",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What distinguishes toxic disinhibition from benign disinhibition?",
    options:[
      "Toxic disinhibition occurs only on platforms that allow anonymous posting by their users",
      "Benign disinhibition involves prosocial openness; toxic involves antisocial hostility and aggression",
      "Benign disinhibition is far less common than toxic disinhibition in online environments",
      "Toxic disinhibition always requires deliberate, premeditated intent to cause harm to others"
    ],correct:1,explanation:"Suler distinguished benign disinhibition (sharing feelings, kindness, identity exploration) from toxic disinhibition (aggression, hostility, threats). The same factors drive either.",reference:"Suler, J. (2004).",tags:["toxic","benign"]},

  {id:"od_003",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'dissociative anonymity' in Suler's model?",
    options:[
      "A clinical condition characterised by memory loss specifically related to online experiences",
      "The perception that one's online actions are separate from one's real-world identity",
      "The technical process by which platforms strip identifying information from user accounts",
      "A research methodology for studying anonymous versus identified online communication"
    ],correct:1,explanation:"Dissociative anonymity is the perception that one can separate online actions from real-life identity. Users feel they can act differently because their 'real self' is hidden.",reference:"Suler, J. (2004).",tags:["dissociative-anonymity","identity"]},

  {id:"od_004",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'solipsistic introjection' in Suler's disinhibition model?",
    options:[
      "The tendency to spend excessive amounts of time alone while interacting with online content",
      "Mentally assigning a voice and persona to online contacts based on your own internal world",
      "The belief that one's own online opinions are inherently more valid than those of others",
      "Deliberately adopting a false persona online in order to manipulate other people's perceptions"
    ],correct:1,explanation:"Solipsistic introjection occurs when users mentally assign a voice and character to others, created within their own mind. Interactions feel more like internal dialogues than real conversations.",reference:"Suler, J. (2004).",tags:["solipsistic-introjection","factor"]},

  {id:"od_005",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Asynchronicity in online communication contributes to disinhibition because people don't have to deal with immediate reactions.",
    options:["True","False"],correct:0,explanation:"Asynchronicity — time delay between sending and receiving — means not facing immediate reactions. This 'fire and forget' quality contributes to disinhibited behaviour.",reference:"Suler, J. (2004).",tags:["asynchronicity","factor"]},

  {id:"od_006",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'minimisation of status and authority' in Suler's model?",
    options:[
      "Platform moderators deliberately reducing their visible authority to appear approachable",
      "Online environments flattening traditional hierarchies, so status-based inhibitions are reduced",
      "Users with high social status being less affected by the online disinhibition effect overall",
      "Companies minimising the number of authority figures responsible for content moderation"
    ],correct:1,explanation:"Online, traditional status markers (age, position, appearance, authority) are reduced or invisible. This equalisation emboldens people to say things they'd never say to higher-status individuals.",reference:"Suler, J. (2004).",tags:["status","authority"]},

  {id:"od_007",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"Does perceived anonymity reliably increase aggression online?",
    options:[
      "Yes, perceived anonymity consistently and strongly predicts increased online aggression",
      "No, there is no meaningful statistical relationship between anonymity and online aggression",
      "The evidence is mixed; McCaffrey (2026) found a negative relationship with a beta of −.29",
      "Anonymity only increases aggression in adolescents but has no effect on adult populations"
    ],correct:2,explanation:"Evidence is mixed. McCaffrey (2026) found perceived anonymity negatively predicted cyber-aggression (β = −.29) — the 'anonymity paradox.' The relationship is more complex than predicted.",reference:"McCaffrey, T. (2026).",tags:["anonymity-paradox","mixed-evidence"]},

  {id:"od_008",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"What is the 'anonymity paradox' identified in McCaffrey (2026)?",
    options:[
      "Users who believe they are anonymous online are actually the most easily identifiable",
      "Perceived anonymity negatively predicted cyber-aggression, contradicting theoretical expectations",
      "Anonymous users are more likely to report cyberbullying to the relevant platform moderators",
      "Anonymity simultaneously increases both benign disinhibition and toxic disinhibition equally"
    ],correct:1,explanation:"The anonymity paradox is the finding that perceived anonymity negatively predicted cyber-aggression — opposite to what deindividuation and Suler's model would predict.",reference:"McCaffrey, T. (2026).",tags:["anonymity-paradox","negative-beta"]},

  {id:"od_009",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Online disinhibition only produces negative outcomes.",
    options:["True","False"],correct:1,explanation:"Benign disinhibition can produce positive outcomes: sharing vulnerabilities, seeking help, expressing genuine emotions, showing unexpected kindness. Online support groups rely on benign disinhibition.",reference:"Suler, J. (2004).",tags:["benign","positive"]},

  {id:"od_010",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"How does the online disinhibition effect interact with personality traits?",
    options:[
      "Personality is completely irrelevant because online environments override all individual traits",
      "Pre-existing traits determine whether disinhibition manifests as toxic or benign behaviour",
      "Online disinhibition creates entirely new personality traits that did not exist before",
      "Only highly extraverted individuals are susceptible to the online disinhibition effect"
    ],correct:1,explanation:"The effect doesn't create behaviour from nothing — it amplifies existing tendencies. Those with hostile traits show toxic disinhibition; those with prosocial traits may show benign disinhibition.",reference:"Suler, J. (2004).",tags:["personality","interaction"]},

  {id:"od_011",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What is the 'proteus effect'?",
    options:[
      "The tendency for online platforms to evolve and change their features to match user demand",
      "The tendency for people's behaviour to change to match their digital avatar or online persona",
      "The phenomenon where virus software transforms to avoid detection by security systems",
      "The observation that initial online interactions set the tone for all subsequent exchanges"
    ],correct:1,explanation:"The proteus effect (Yee & Bailenson, 2007) shows that people's behaviour conforms to their avatar's appearance — e.g., a villainous avatar may increase aggressive behaviour.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["proteus-effect","avatar"]},

  {id:"od_012",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"How does 'pseudonymity' differ from full anonymity in terms of disinhibition?",
    options:[
      "Pseudonymity and full anonymity produce exactly the same level of online disinhibition",
      "Pseudonymity involves a consistent username that builds reputation, moderating disinhibition",
      "Full anonymity always results in less aggression because users feel safer and more relaxed",
      "Pseudonymity produces more disinhibition because users become attached to their false identity"
    ],correct:1,explanation:"Pseudonymous users have consistent identities and reputations to maintain, which can moderate disinhibited behaviour compared to fully anonymous throwaway accounts.",reference:"Kilner, P. G., & Hoadley, C. M. (2005).",tags:["pseudonymity","reputation"]},

  {id:"od_013",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"How does video communication (e.g., Zoom) affect online disinhibition compared to text?",
    options:[
      "Video communication significantly increases disinhibition by creating performance anxiety",
      "Video reduces disinhibition by restoring visual cues and the sense of being physically seen",
      "Video has no measurable effect on disinhibition compared to text-based communication",
      "Video only reduces disinhibition when participants already know each other personally"
    ],correct:1,explanation:"Video restores social cues absent in text: facial expressions, tone of voice, visible reactions. This counteracts invisibility and anonymity factors, typically reducing disinhibition.",reference:"Suler, J. (2004).",tags:["video","visual-cues"]},

  {id:"od_014",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"The online disinhibition effect only occurs on social media platforms.",
    options:["True","False"],correct:1,explanation:"Online disinhibition occurs across all digital communication: email, text messages, gaming, forums, comment sections, and even professional platforms.",reference:"Suler, J. (2004).",tags:["platforms","ubiquitous"]},

  {id:"od_015",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'dissociative imagination' in Suler's model?",
    options:[
      "Using creative visualisation techniques to improve performance in online gaming sessions",
      "The experience of online interactions as existing in a separate fantasy world with different rules",
      "Imagining what other users look like based on their usernames and profile descriptions",
      "A clinical condition involving difficulty distinguishing between real and imagined online events"
    ],correct:1,explanation:"Dissociative imagination involves experiencing online interactions as happening in a separate realm — a fictional space. When you 'log off', you leave that world and its consequences behind.",reference:"Suler, J. (2004).",tags:["dissociative-imagination","factor"]},

  // ═══════════════════════════════════════════════════════════════
  // AI PSYCHOLOGY
  // ═══════════════════════════════════════════════════════════════

  {id:"ai_001",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",
    question:"What is 'AI trust' in the context of human-AI interaction research?",
    options:[
      "A technical measure of how accurately an AI system verifies user login credentials",
      "A user's willingness to rely on an AI system based on perceived competence and integrity",
      "The degree to which an AI system's source code has been audited for security flaws",
      "A legal framework governing liability when AI systems make decisions that cause harm"
    ],correct:1,explanation:"AI trust is a user's subjective willingness to rely on and be vulnerable to an AI system, conceptualised through dimensions like perceived competence, benevolence, and integrity.",reference:"Hoff, K. A., & Bashir, M. (2015).",tags:["trust","definition"]},

  {id:"ai_002",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What did McCaffrey (2026) find about the contribution of AI variables to predicting cyber-aggression?",
    options:[
      "AI trust emerged as the single strongest predictor of cyber-aggression in the final model",
      "AI-related variables contributed negligible additional variance of approximately ΔR² = .002",
      "AI disinhibition was a strong negative predictor that actually reduced cyber-aggression",
      "AI variables were excluded from analysis because too few participants had AI experience"
    ],correct:1,explanation:"AI variables contributed negligible additional variance (ΔR² ≈ .002), suggesting traditional psychological factors are far more important than AI-specific attitudes.",reference:"McCaffrey, T. (2026).",tags:["AI-variables","negligible"]},

  {id:"ai_003",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'AI disinhibition' and why might it be theoretically relevant to cyber-aggression?",
    options:[
      "When AI systems fail to filter harmful content, allowing aggressive material to spread unchecked",
      "Reduced self-regulation when interacting with AI, which may normalise aggressive communication",
      "AI systems deliberately removing content moderation filters at the request of their operators",
      "The use of AI-powered tools to bypass security measures and gain unauthorised system access"
    ],correct:1,explanation:"AI disinhibition is reduced self-regulation when interacting with AI — people may be ruder to chatbots. The concern is this could normalise aggressive communication that transfers to human interactions.",reference:"Gambino, A., Fox, J., & Ratan, R. A. (2020).",tags:["AI-disinhibition","spillover"]},

  {id:"ai_004",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",
    question:"The CASA (Computers Are Social Actors) paradigm suggests that people apply social rules to computers and AI systems.",
    options:["True","False"],correct:0,explanation:"The CASA paradigm (Nass & Moon, 2000) demonstrates that people mindlessly apply social rules — politeness, reciprocity, gender stereotypes — to computers, even knowing they are not human.",reference:"Nass, C., & Moon, Y. (2000).",tags:["CASA","social-rules"]},

  {id:"ai_005",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"In McCaffrey's (2026) sample, what percentage of participants reported being AI users?",
    options:[
      "52%, reflecting that about half the student population had adopted AI tools at that time",
      "68%, indicating a moderate level of AI adoption among Irish university students overall",
      "86%, reflecting rapid mainstream uptake of AI tools like ChatGPT among young adults",
      "94%, suggesting near-universal AI adoption among the university student demographic"
    ],correct:2,explanation:"86% reported being AI users, reflecting rapid mainstream AI adoption. Despite high usage, AI variables still contributed negligible variance to predicting cyber-aggression.",reference:"McCaffrey, T. (2026).",tags:["sample","AI-users"]},

  {id:"ai_006",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What does the 'uncanny valley' hypothesis predict about human responses to AI?",
    options:[
      "People consistently trust more human-like AI systems because familiarity breeds comfort",
      "As AI becomes more human-like, user trust and comfort increase in a smooth linear fashion",
      "Near-but-not-quite human likeness provokes a sharp drop into discomfort or eeriness",
      "People are completely unable to distinguish between AI communication and human speech"
    ],correct:2,explanation:"The uncanny valley (Mori, 1970) predicts that as AI approaches but doesn't quite achieve human likeness, it provokes discomfort. Only at full human likeness does affinity recover.",reference:"Mori, M. (1970/2012).",tags:["uncanny-valley","human-likeness"]},

  {id:"ai_007",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'automation bias'?",
    options:[
      "A systematic prejudice against automated manufacturing processes in favour of handcrafted work",
      "The tendency to favour suggestions from automated systems over contradictory human judgement",
      "The bias introduced into AI training data that causes discriminatory algorithmic outputs",
      "A preference for automating simple tasks while reserving complex decisions for human experts"
    ],correct:1,explanation:"Automation bias is the tendency to over-rely on automated or AI suggestions, sometimes ignoring contradictory evidence. It reflects excessive trust in algorithmic systems.",reference:"Parasuraman, R., & Riley, V. (1997).",tags:["automation-bias","over-reliance"]},

  {id:"ai_008",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'algorithm aversion'?",
    options:[
      "A technical term for when algorithms produce errors due to insufficient training data input",
      "Distrusting algorithmic decisions after seeing an error, even if the algorithm outperforms humans",
      "The tendency for users to avoid platforms that employ any form of content recommendation",
      "A design principle that prioritises transparency over performance in algorithm development"
    ],correct:1,explanation:"Algorithm aversion occurs when people lose trust after observing errors, preferring human decision-makers even when algorithms perform better on average.",reference:"Dietvorst, B. J., et al. (2015).",tags:["algorithm-aversion","distrust"]},

  {id:"ai_009",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",
    question:"People tend to be more honest and self-disclosing when interacting with AI chatbots than with human interviewers.",
    options:["True","False"],correct:0,explanation:"Research suggests people may disclose more sensitive information to chatbots due to reduced social judgement concerns — a form of AI-specific benign disinhibition.",reference:"Lucas, G. M., et al. (2014).",tags:["disclosure","chatbots"]},

  {id:"ai_010",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'anthropomorphism' in AI psychology?",
    options:[
      "The study of human body proportions for designing ergonomic computer hardware interfaces",
      "Attributing human characteristics, emotions, and intentions to non-human AI systems",
      "A branch of anthropology that studies the cultural impact of artificial intelligence adoption",
      "The process of training AI models exclusively on human-generated text and image data"
    ],correct:1,explanation:"Anthropomorphism is attributing human traits — emotions, intentions, personality — to non-human entities including AI. It influences how people interact with and trust AI.",reference:"Epley, N., et al. (2007).",tags:["anthropomorphism","attribution"]},

  {id:"ai_011",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",
    question:"People tend to treat AI agents more rudely than they would treat human strangers.",
    options:["True","False"],correct:0,explanation:"Research suggests people are often less polite and more aggressive toward AI agents — saying things they wouldn't say to a human. This parallels broader online disinhibition.",reference:"Gambino, A., Fox, J., & Ratan, R. A. (2020).",tags:["rudeness","AI-interaction"]},

  {id:"ai_012",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"What is the 'Eliza effect'?",
    options:[
      "The tendency for early AI adoption to plateau after initial enthusiasm fades among users",
      "The tendency for people to attribute understanding and empathy to programs that mimic conversation",
      "The observation that AI systems named after humans are trusted more than those with technical names",
      "The phenomenon where AI chatbots become less effective as the conversation becomes longer"
    ],correct:1,explanation:"Named after Weizenbaum's ELIZA chatbot (1966), this describes how people attribute understanding and empathy to conversational programs, even knowing the system is not sentient.",reference:"Weizenbaum, J. (1966).",tags:["Eliza","attribution"]},

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH METHODS
  // ═══════════════════════════════════════════════════════════════

  {id:"rm_001",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What does ΔR² (delta R-squared) measure in hierarchical regression?",
    options:[
      "The total proportion of variance in the dependent variable explained by every predictor",
      "The additional variance explained when a new block of predictors is added to the model",
      "The strength of the correlation between the first predictor and the last predictor entered",
      "The statistical significance level of the overall regression model with all predictors included"
    ],correct:1,explanation:"ΔR² represents the additional variance in the DV explained when a new block is added, showing its unique contribution above previously entered variables.",reference:"Field, A. (2018).",tags:["hierarchical-regression","variance"]},

  {id:"rm_002",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is Cohen's f² and what constitutes a small, medium, and large effect?",
    options:[
      "A reliability coefficient where .10 is poor, .30 is acceptable, and .50 is excellent",
      "An effect size for regression where .02 is small, .15 is medium, and .35 is large",
      "A sample size calculator where .50 is inadequate, .80 is adequate, and .95 is excellent",
      "A model fit index where .90 is acceptable, .95 is good, and .99 is near-perfect fit"
    ],correct:1,explanation:"Cohen's f² is a regression effect size. Benchmarks: .02 (small), .15 (medium), .35 (large). Normalisation of aggression had f² = .22, a medium-to-large effect.",reference:"Cohen, J. (1988).",tags:["effect-size","benchmarks"]},

  {id:"rm_003",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"When should you use multiple imputation rather than listwise deletion for handling missing data?",
    options:[
      "Only when the total proportion of missing data exceeds 50% across all study variables",
      "When missing data may reduce power or bias results, as MI preserves sample size under MAR",
      "Multiple imputation should never be used because it artificially inflates sample sizes",
      "Only when data is Missing Completely At Random and the overall sample is very large"
    ],correct:1,explanation:"MI is preferred when missing data could reduce power or introduce bias. It generates multiple datasets, analyses each, and pools results under Missing At Random (MAR) assumptions.",reference:"Rubin, D. B. (1987).",tags:["missing-data","MAR"]},

  {id:"rm_004",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What is PLS-SEM and when is it preferred over CB-SEM?",
    options:[
      "A parametric test that requires strictly normal data distributions and very large samples",
      "PLS-SEM is preferred for exploratory research, smaller samples, non-normal data, and complex models",
      "A technique used exclusively in computer science and information systems research fields",
      "PLS-SEM always requires larger sample sizes than covariance-based SEM to achieve power"
    ],correct:1,explanation:"PLS-SEM is variance-based, preferred when research is exploratory, samples are smaller, data is non-normal, or the model is complex. CB-SEM is preferred for confirmatory research.",reference:"Hair, J. F., et al. (2017).",tags:["PLS-SEM","CB-SEM"]},

  {id:"rm_005",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What does a standardised beta (β) coefficient represent in regression?",
    options:[
      "The probability that the predictor variable reaches the conventional threshold of significance",
      "The change in the DV in standard deviations for one SD change in the predictor, controlling others",
      "The exact percentage of unique variance in the outcome explained by that single predictor",
      "The internal consistency reliability coefficient of the measurement instrument for the predictor"
    ],correct:1,explanation:"A standardised β indicates how many SDs the outcome changes for each SD change in the predictor, controlling for other variables. It allows comparison across predictors.",reference:"Field, A. (2018).",tags:["beta","interpretation"]},

  {id:"rm_006",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"In multiple imputation, it is standard practice to generate only a single imputed dataset.",
    options:["True","False"],correct:1,explanation:"MI generates several datasets (commonly 5–20+). McCaffrey (2026) used 10 imputations via mice. Single imputation underestimates uncertainty.",reference:"van Buuren, S. (2018).",tags:["multiple-imputation","mice"]},

  {id:"rm_007",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What does Cohen's d measure?",
    options:[
      "The correlation coefficient between two continuous variables in a bivariate analysis",
      "The standardised mean difference between two groups expressed in standard deviation units",
      "The proportion of total variance in the outcome variable explained by all predictors combined",
      "The internal consistency reliability of a multi-item scale used in psychological measurement"
    ],correct:1,explanation:"Cohen's d expresses group mean differences in SD units. Benchmarks: 0.2 (small), 0.5 (medium), 0.8 (large). d = 1.20 for emotional detachment was very large.",reference:"Cohen, J. (1988).",tags:["Cohen-d","effect-size"]},

  {id:"rm_008",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Why use hierarchical regression over entering all predictors in a single step?",
    options:[
      "Hierarchical regression invariably produces higher R² values than standard simultaneous entry",
      "Hierarchical regression is computationally faster and more efficient than simultaneous entry",
      "It allows testing whether theoretically grouped predictor blocks contribute beyond previous blocks",
      "Hierarchical regression requires fewer statistical assumptions than standard regression methods"
    ],correct:2,explanation:"Hierarchical regression enters predictors in theoretically meaningful blocks, allowing ΔR² tests for whether new constructs add explanatory power beyond established predictors.",reference:"Field, A. (2018).",tags:["hierarchical","incremental"]},

  {id:"rm_009",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What does a p-value represent?",
    options:[
      "The probability that the research hypothesis is definitively true given the observed data",
      "The probability of observing results this extreme if the null hypothesis were actually true",
      "The standardised effect size indicating the practical importance of the observed finding",
      "The minimum sample size needed to achieve adequate statistical power for the analysis"
    ],correct:1,explanation:"A p-value is the probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true. It does NOT tell you the probability your hypothesis is correct.",reference:"Field, A. (2018).",tags:["p-value","significance"]},

  {id:"rm_010",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A statistically significant result always means the effect is practically important.",
    options:["True","False"],correct:1,explanation:"Statistical significance and practical significance are different. With large samples, trivially small effects can reach significance. Effect sizes indicate practical importance.",reference:"Cohen, J. (1988).",tags:["significance","practical"]},

  {id:"rm_011",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"Correlation implies causation.",
    options:["True","False"],correct:1,explanation:"Correlation does not imply causation. Variables can correlate due to direct causation, reverse causation, confounding, or coincidence. Only experiments with random assignment establish causation.",reference:"Field, A. (2018).",tags:["causation","correlation"]},

  {id:"rm_012",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is multicollinearity and why is it a problem in regression?",
    options:[
      "When the dependent variable is measured using multiple different scales simultaneously",
      "When predictor variables are highly correlated, making it difficult to isolate unique contributions",
      "When the regression line passes through multiple data points creating a perfect model fit",
      "When multiple regression analyses are conducted on the same dataset inflating Type I error"
    ],correct:1,explanation:"Multicollinearity occurs when predictors are highly intercorrelated, inflating standard errors and making individual coefficients unreliable.",reference:"Field, A. (2018).",tags:["multicollinearity","assumption"]},

  {id:"rm_013",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does Cronbach's alpha measure?",
    options:[
      "The statistical significance threshold conventionally used in hypothesis testing procedures",
      "The internal consistency reliability of a scale — how well its items measure the same construct",
      "The proportion of variance in the dependent variable explained by the independent variables",
      "The probability of making a Type I error when conducting multiple comparisons simultaneously"
    ],correct:1,explanation:"Cronbach's α measures internal consistency — how consistently items in a scale measure the same construct. Values above .70 are generally acceptable; above .80 is good.",reference:"Field, A. (2018).",tags:["Cronbachs-alpha","reliability"]},

  {id:"rm_014",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the difference between reliability and validity?",
    options:[
      "They are essentially the same concept described using different terminology in different fields",
      "Reliability is consistency of measurement; validity is whether you measure what you intend to",
      "Reliability is always more important than validity because it is easier to assess empirically",
      "Validity only applies to experimental designs whereas reliability applies to all study types"
    ],correct:1,explanation:"Reliability concerns consistency (same results on repeat). Validity concerns accuracy (measuring what you intend). A measure can be reliable without being valid, but not valid without reliable.",reference:"Field, A. (2018).",tags:["reliability","validity"]},

  {id:"rm_015",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is a 'confounding variable'?",
    options:[
      "A variable that is deliberately manipulated by the researcher to test its causal effects",
      "A variable that influences both the predictor and outcome, creating a spurious association",
      "A variable that remains completely constant throughout the entire duration of the study",
      "A variable that is measured but ultimately excluded from the final statistical analysis"
    ],correct:1,explanation:"A confound influences both IV and DV, creating an apparent relationship that may not reflect a true direct effect. Controlling for confounds is essential in observational research.",reference:"Field, A. (2018).",tags:["confounding","spurious"]},

  // ═══════════════════════════════════════════════════════════════
  // PERSONALITY
  // ═══════════════════════════════════════════════════════════════

  {id:"pe_001",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"What are the Big Five personality traits?",
    options:[
      "Honesty, Courage, Compassion, Wisdom, and Temperance from virtue ethics frameworks",
      "Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (OCEAN model)",
      "Dominance, Influence, Steadiness, Compliance, and Adaptability from the DISC assessment",
      "Sensing, Intuition, Thinking, Feeling, and Judging from the Myers-Briggs typology system"
    ],correct:1,explanation:"The Big Five (OCEAN) are the most widely validated personality framework in contemporary psychology.",reference:"McCrae, R. R., & Costa, P. T. (1999).",tags:["Big-Five","OCEAN"]},

  {id:"pe_002",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which Big Five trait is most consistently negatively associated with aggression?",
    options:[
      "Openness to experience, reflecting intellectual curiosity and aesthetic appreciation",
      "Extraversion, reflecting sociability, assertiveness, and positive emotional expression",
      "Agreeableness, reflecting trust, altruism, compliance, and tender-minded concern for others",
      "Conscientiousness, reflecting self-discipline, orderliness, and goal-directed persistence"
    ],correct:2,explanation:"Agreeableness is the Big Five trait most consistently and negatively associated with both offline and online aggression. Low agreeableness (antagonism) robustly predicts aggression.",reference:"Volk, A. A., et al. (2014).",tags:["agreeableness","aggression"]},

  {id:"pe_003",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'emotional detachment' in the context of cyber-aggression research?",
    options:[
      "A clinically diagnosed form of antisocial personality disorder requiring formal treatment",
      "A tendency to disconnect from emotions, reducing empathic concern and facilitating harmful behaviour",
      "A healthy psychological coping mechanism for managing the stress of online social interactions",
      "The technical inability to convey emotional nuance through text-based digital communication"
    ],correct:1,explanation:"Emotional detachment refers to disconnecting from emotional responses, reducing empathic concern. McCaffrey (2026) found the largest gender difference here (d = 1.20, men higher).",reference:"McCaffrey, T. (2026).",tags:["emotional-detachment","empathy"]},

  {id:"pe_004",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does impulsivity relate to cyber-aggression?",
    options:[
      "Impulsivity has no meaningful or consistent relationship with any form of cyber-aggression",
      "Impulsivity only predicts cyberbullying specifically but not other broader forms of cyber-aggression",
      "Higher impulsivity is associated with greater cyber-aggression due to acting without considering consequences",
      "Impulsivity actually protects against cyber-aggression by allowing cathartic emotional release online"
    ],correct:2,explanation:"Impulsive individuals act on aggressive urges without considering consequences, making them more likely to send aggressive messages and respond hostilely to provocations.",reference:"Kowalski, R. M., et al. (2014).",tags:["impulsivity","prediction"]},

  {id:"pe_005",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Why are the Dark Triad traits (Machiavellianism, narcissism, psychopathy) relevant to cyber-aggression?",
    options:[
      "They are the most commonly occurring personality traits across the general adult population",
      "They combine manipulativeness, grandiosity, and callousness, facilitating strategic online aggression",
      "They have been shown to predict only offline aggression and have no relevance to online behaviour",
      "They are only relevant to clinical populations and have no applicability to general populations"
    ],correct:1,explanation:"Machiavellianism (manipulation), narcissism (grandiosity), and psychopathy (callousness) facilitate online aggression. Online environments may amplify these by reducing accountability.",reference:"Paulhus, D. L., & Williams, K. M. (2002).",tags:["Dark-Triad","Machiavellianism"]},

  {id:"pe_006",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'cognitive empathy' vs 'affective empathy'?",
    options:[
      "Cognitive and affective empathy are simply two different names for exactly the same construct",
      "Cognitive empathy is understanding others' perspectives; affective empathy is feeling what others feel",
      "Cognitive empathy is more important than affective empathy for reducing aggressive behaviour",
      "Affective empathy is extremely rare in the general population while cognitive empathy is universal"
    ],correct:1,explanation:"Cognitive empathy (perspective-taking) involves understanding others' mental states. Affective empathy involves sharing their emotional experience. Low affective empathy is particularly linked to aggression.",reference:"Davis, M. H. (1983).",tags:["cognitive-empathy","affective-empathy"]},

  {id:"pe_007",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Personality is completely fixed after childhood and never changes.",
    options:["True","False"],correct:1,explanation:"While personality shows stability, it is not completely fixed. People generally become more agreeable and conscientious with age (personality maturation).",reference:"Roberts, B. W., et al. (2006).",tags:["stability","change"]},

  {id:"pe_008",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Extraversion is consistently positively associated with cyber-aggression.",
    options:["True","False"],correct:1,explanation:"The relationship is inconsistent. Extraverts may have more online interactions (creating opportunities) but are not necessarily more aggressive. Evidence is mixed.",reference:"Kowalski, R. M., et al. (2014).",tags:["extraversion","inconsistent"]},

  {id:"pe_009",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does 'trait anger' differ from 'state anger'?",
    options:[
      "Trait anger and state anger are simply two different terms for the same emotional experience",
      "Trait anger is a stable disposition to experience anger frequently; state anger is temporary and situational",
      "Trait anger is always more intense than state anger in every individual and every situation",
      "State anger is a permanent condition while trait anger is a temporary emotional fluctuation"
    ],correct:1,explanation:"Trait anger is a stable tendency to experience anger across situations; state anger is temporary anger in response to a specific provocation.",reference:"Spielberger, C. D. (1999).",tags:["trait-anger","state-anger"]},

  {id:"pe_010",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'Machiavellianism' in personality psychology?",
    options:[
      "A personality trait characterised by strategic manipulation, cynicism, and willingness to exploit others",
      "A political philosophy advocating for democratic governance and equal representation in society",
      "A negotiation style emphasising collaboration, mutual benefit, and transparent communication",
      "A personality trait characterised by extreme shyness, social anxiety, and avoidance of conflict"
    ],correct:0,explanation:"Machiavellianism involves strategic interpersonal manipulation, cynical worldview, and prioritising personal interests over ethics. Online, it may manifest as calculated aggression.",reference:"Christie, R., & Geis, F. L. (1970).",tags:["Machiavellianism","Dark-Triad"]},

  // ═══════════════════════════════════════════════════════════════
  // CYBER-AGGRESSION (expanded ca_051–ca_090)
  // ═══════════════════════════════════════════════════════════════

  {id:"ca_051",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Hostile attribution bias is most accurately described as which of the following cognitive tendencies?",
    options:[
      "The tendency to interpret ambiguous social cues as deliberately aggressive or intentionally threatening",
      "The tendency to attribute one's own hostile behaviour to external situational pressures and stressors",
      "The tendency to assume that aggressive individuals always have antisocial personality disorder traits",
      "The tendency to forget hostile encounters more quickly than neutral or positive social interactions"
    ],correct:0,explanation:"Hostile attribution bias refers to the tendency to interpret ambiguous social stimuli as intentionally hostile, increasing aggression likelihood.",reference:"Crick, N. R., & Dodge, K. A. (1994).",tags:["hostile-attribution","cognition"]},

  {id:"ca_052",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"According to Bandura's social learning theory, which mechanism best explains how online aggression is acquired?",
    options:[
      "Individuals learn aggressive behaviours by directly experiencing punishment for rule violations online",
      "Individuals acquire aggressive behaviours through observing and imitating modelled behaviour online",
      "Individuals develop aggressive tendencies solely through inherited genetic predispositions to hostility",
      "Individuals become aggressive exclusively when they experience personal frustration in digital spaces"
    ],correct:1,explanation:"Social learning theory posits that aggression is learned through observation, imitation, and reinforcement of modelled behaviour.",reference:"Bandura, A. (1977).",tags:["social-learning","Bandura"]},

  {id:"ca_053",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The frustration-aggression hypothesis states that frustration always leads to aggression and aggression is always preceded by frustration.",
    options:["True","False"],correct:1,explanation:"The original hypothesis (Dollard et al., 1939) was later revised by Berkowitz (1989) to acknowledge that frustration increases the readiness for aggression but does not always produce it.",reference:"Berkowitz, L. (1989).",tags:["frustration-aggression","theory"]},

  {id:"ca_054",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"In Anderson and Bushman's General Aggression Model (GAM), what role do 'routes' play in the appraisal process?",
    options:[
      "Routes describe the external social norms that constrain aggressive impulses in group settings",
      "Routes refer to the cognitive, affective, and arousal pathways through which inputs influence outcomes",
      "Routes are the developmental stages through which individuals gradually learn aggressive behaviour",
      "Routes represent the demographic factors that predict who is most likely to engage in aggression"
    ],correct:1,explanation:"The GAM identifies cognitive, affective, and arousal routes through which person and situation inputs influence the internal state and subsequent appraisal and decision processes.",reference:"Anderson, C. A., & Bushman, B. J. (2002).",tags:["GAM","theory"]},

  {id:"ca_055",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The ecological model of cyber-aggression considers risk factors at which interconnected levels?",
    options:[
      "Individual, relationship, community, and societal levels of influence operating simultaneously",
      "Cognitive, behavioural, emotional, and physiological levels of psychological functioning only",
      "Primary school, secondary school, university, and workplace developmental stages sequentially",
      "Hardware, software, network, and user interface levels of technological infrastructure design"
    ],correct:0,explanation:"Bronfenbrenner's ecological model, applied to cyber-aggression, considers nested systems: individual (ontogenic), microsystem, exosystem, and macrosystem levels.",reference:"Bronfenbrenner, U. (1979); Cross, D., et al. (2015).",tags:["ecological-model","theory"]},

  {id:"ca_056",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Workplace cyber-aggression is distinct from general cyberbullying primarily because it involves which characteristic?",
    options:[
      "Aggressive acts occurring through work-related digital channels within professional power structures",
      "Aggressive acts that are always prosecutable under existing criminal harassment legislation",
      "Aggressive acts that only occur between co-workers of equal organisational rank and tenure",
      "Aggressive acts committed exclusively through corporate email systems and internal messaging tools"
    ],correct:0,explanation:"Workplace cyber-aggression occurs within professional contexts, often involving organisational power dynamics and work-related communication technologies.",reference:"Farley, S., et al. (2015).",tags:["workplace","cyber-aggression"]},

  {id:"ca_057",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Cyber dating abuse refers exclusively to monitoring a romantic partner's social media activity without their knowledge.",
    options:["True","False"],correct:1,explanation:"Cyber dating abuse encompasses a wide range of behaviours including monitoring, controlling, threatening, and humiliating a partner through digital technologies, not just surveillance.",reference:"Zweig, J. M., et al. (2013).",tags:["cyber-dating-abuse","definition"]},

  {id:"ca_058",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Image-based sexual abuse (sometimes called 'revenge pornography') is best understood as which type of behaviour?",
    options:[
      "A form of sexual harassment limited to the non-consensual creation of intimate images only",
      "A technology-facilitated abuse involving non-consensual creation, distribution, or threat of intimate images",
      "A behaviour that exclusively occurs between former romantic partners following relationship breakdown",
      "A criminal act that only applies when images are distributed publicly on social media platforms"
    ],correct:1,explanation:"Image-based sexual abuse encompasses the non-consensual creation, distribution, or threat to distribute intimate images, regardless of the relationship between perpetrator and victim.",reference:"McGlynn, C., et al. (2017).",tags:["image-based-abuse","IBSA"]},

  {id:"ca_059",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Ireland's Coco's Law (Harassment, Harmful Communications and Related Offences Act 2020) primarily addresses which behaviour?",
    options:[
      "The regulation of artificial intelligence systems used in automated content moderation processes",
      "The non-consensual distribution of intimate images and other forms of harmful online communication",
      "The mandatory requirement for social media companies to verify all users' real-world identities",
      "The prohibition of anonymous online speech across all digital platforms operating within Ireland"
    ],correct:1,explanation:"Coco's Law criminalises the non-consensual distribution of intimate images and other harmful communications, named after Nicole 'Coco' Fox.",reference:"Harassment, Harmful Communications and Related Offences Act (2020).",tags:["Cocos-Law","legislation"]},

  {id:"ca_060",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The EU Digital Services Act (DSA) requires very large online platforms to conduct which type of assessment?",
    options:[
      "Annual financial audits specifically measuring the economic cost of cyberbullying on platform revenue",
      "Mandatory psychological screening assessments for all new users before granting platform access",
      "Systematic risk assessments evaluating systemic risks including the dissemination of illegal content",
      "Weekly algorithmic transparency reports detailing every individual content moderation decision made"
    ],correct:2,explanation:"The DSA requires very large online platforms to conduct systemic risk assessments addressing risks such as illegal content dissemination, fundamental rights impacts, and public security threats.",reference:"European Union Digital Services Act (2022).",tags:["DSA","legislation","platform-regulation"]},

  {id:"ca_061",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which approach to platform content moderation relies on users reporting harmful material for review?",
    options:[
      "Proactive automated detection using machine learning classifiers trained on labelled harmful content",
      "Reactive user-flagging systems where community members report content they believe violates guidelines",
      "Editorial pre-screening where trained moderators review all content before it becomes publicly visible",
      "Distributed consensus moderation where randomly selected users vote on contested content decisions"
    ],correct:1,explanation:"Reactive moderation relies on user reports/flags to identify potentially harmful content for review, contrasting with proactive AI-driven detection systems.",reference:"Gillespie, T. (2018).",tags:["moderation","platform-design"]},

  {id:"ca_062",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Deepfake technology poses unique challenges for cyber-aggression because of which primary characteristic?",
    options:[
      "Deepfakes require extremely expensive computing hardware that limits access to state-level actors only",
      "Deepfakes produce highly realistic synthetic media that can be weaponised for harassment and defamation",
      "Deepfakes can only be created using publicly available photographs posted on social media platforms",
      "Deepfakes are easily detectable by the average user through visual inspection of the generated content"
    ],correct:1,explanation:"Deepfakes use AI to create realistic synthetic media (video, audio, images) that can be weaponised for harassment, defamation, and image-based abuse, posing detection challenges.",reference:"Chesney, R., & Citron, D. K. (2019).",tags:["deepfakes","technology"]},

  {id:"ca_063",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Coordinated online harassment campaigns typically involve loosely organised groups targeting individuals through multiple platforms simultaneously.",
    options:["True","False"],correct:0,explanation:"Coordinated harassment often involves groups using multiple platforms, tactics, and accounts to overwhelm targets, making it difficult to address through single-platform moderation.",reference:"Marwick, A. E., & Caplan, R. (2018).",tags:["coordinated-harassment","tactics"]},

  {id:"ca_064",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The bystander effect in online aggression contexts suggests that individuals are less likely to intervene when which condition is present?",
    options:[
      "When the aggressive content is posted anonymously without any identifying information about the sender",
      "When there are many other observers present who could potentially intervene in the harmful situation",
      "When the victim has a larger social media following than the person perpetrating the aggressive acts",
      "When the aggressive behaviour occurs on platforms with strict community guidelines and clear policies"
    ],correct:1,explanation:"The bystander effect (diffusion of responsibility) suggests that the presence of multiple observers reduces individual likelihood of intervention, applicable to online contexts.",reference:"Darley, J. M., & Latané, B. (1968); Machackova, H., et al. (2015).",tags:["bystander-effect","intervention"]},

  {id:"ca_065",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which coping strategy involves directly confronting the perpetrator of cyber-aggression?",
    options:[
      "Avoidant coping, which focuses on withdrawing from digital spaces and reducing online activity levels",
      "Emotion-focused coping, which prioritises managing the emotional response rather than the situation itself",
      "Active or confrontational coping, which involves directly addressing the aggressor about their behaviour",
      "Support-seeking coping, which involves reaching out to friends or family members for emotional comfort"
    ],correct:2,explanation:"Active/confrontational coping involves directly addressing the perpetrator, contrasting with avoidant strategies (blocking, withdrawing) and emotion-focused approaches.",reference:"Machackova, H., et al. (2013).",tags:["coping","resilience"]},

  {id:"ca_066",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Digital resilience in the context of cyber-aggression is best defined as which capacity?",
    options:[
      "The technical ability to implement cybersecurity measures that prevent all forms of online harassment",
      "The capacity to recover from, adapt to, and grow stronger following negative online experiences",
      "The permanent immunity to psychological harm that develops after repeated exposure to online threats",
      "The legal right to seek compensation from platform companies for failing to prevent harmful content"
    ],correct:1,explanation:"Digital resilience refers to the adaptive capacity to recover from and manage negative online experiences, involving cognitive, emotional, and behavioural competencies.",reference:"Przybylski, A. K., & Weinstein, N. (2017).",tags:["digital-resilience","coping"]},

  {id:"ca_067",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The General Aggression Model (GAM) considers both person factors and situation factors as inputs that influence aggressive behaviour.",
    options:["True","False"],correct:0,explanation:"The GAM incorporates both person factors (traits, attitudes, beliefs) and situation factors (provocation, frustration, media exposure) as inputs into the model.",reference:"Anderson, C. A., & Bushman, B. J. (2002).",tags:["GAM","theory"]},

  {id:"ca_068",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Research on the overlap between cyber-aggression perpetration and victimisation consistently finds which pattern?",
    options:[
      "Perpetrators and victims are entirely distinct populations with no meaningful overlap between groups",
      "Victimisation experiences reliably predict subsequent desistance from all aggressive online behaviours",
      "Significant overlap exists, with many individuals simultaneously occupying both perpetrator and victim roles",
      "Perpetration always temporally precedes victimisation in a strict unidirectional causal pathway model"
    ],correct:2,explanation:"Research consistently shows substantial overlap between perpetration and victimisation (bully-victims), challenging the notion of distinct perpetrator and victim categories.",reference:"Kowalski, R. M., et al. (2014).",tags:["bully-victim","overlap"]},

  {id:"ca_069",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which theoretical framework specifically links media violence exposure to long-term aggressive scripts?",
    options:[
      "Uses and gratifications theory, which examines why individuals actively choose specific media content",
      "The script theory and social-cognitive model of media violence effects on aggressive knowledge structures",
      "Cultivation theory, which focuses on how media shapes perceptions of social reality over extended time",
      "Technological determinism, which argues that technology itself drives behavioural changes in all users"
    ],correct:1,explanation:"Script theory, integrated within the GAM, proposes that repeated media violence exposure creates aggressive cognitive scripts that guide behaviour in ambiguous social situations.",reference:"Huesmann, L. R. (1986).",tags:["script-theory","media-violence"]},

  {id:"ca_070",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyberstalking involves repeated unwanted contact or monitoring through digital means that causes the target to feel fear or distress.",
    options:["True","False"],correct:0,explanation:"Cyberstalking is characterised by repeated, unwanted pursuit behaviours using digital technologies that cause the target to experience fear, distress, or safety concerns.",reference:"Spitzberg, B. H., & Hoobler, G. (2002).",tags:["cyberstalking","definition"]},

  {id:"ca_071",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'techno-subsystem' in Bronfenbrenner's updated ecological model refers to which environmental layer?",
    options:[
      "The genetic and biological predispositions that influence an individual's susceptibility to aggression",
      "The interaction between the individual and technology, including digital devices and online environments",
      "The cultural norms and values of the broader society that shape attitudes toward online behaviour",
      "The formal legal and regulatory frameworks governing acceptable conduct in digital communication spaces"
    ],correct:1,explanation:"Johnson and Puplampu (2008) proposed the techno-subsystem as an additional dimension of Bronfenbrenner's model, capturing child-technology interactions as a distinct ecological layer.",reference:"Johnson, G. M., & Puplampu, K. P. (2008).",tags:["ecological-model","techno-subsystem"]},

  {id:"ca_072",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which factor most consistently predicts the severity of psychological harm experienced by cyber-aggression victims?",
    options:[
      "The technical sophistication and complexity of the platform on which the aggression initially occurred",
      "The perceived intentionality of the aggressive act and the publicity or audience size of the encounter",
      "The geographic distance between the perpetrator and the victim at the time of the aggressive incident",
      "The number of years the victim has been actively using social media platforms prior to the incident"
    ],correct:1,explanation:"Research indicates that perceived intentionality and publicity (audience size) are key predictors of harm severity, as public aggression amplifies humiliation and distress.",reference:"Slonje, R., & Smith, P. K. (2008).",tags:["harm-severity","predictors"]},

  {id:"ca_073",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"Platform design features such as anonymity options and like/share buttons have no significant influence on rates of cyber-aggression.",
    options:["True","False"],correct:1,explanation:"Platform affordances including anonymity, virality mechanisms, and engagement metrics significantly shape the prevalence and nature of aggressive behaviour online.",reference:"Fox, J., & Moreland, J. J. (2015).",tags:["platform-design","affordances"]},

  {id:"ca_074",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'networked harassment' differs from individual cyberbullying primarily in which respect?",
    options:[
      "Networked harassment is limited to workplace contexts and professional networking platforms exclusively",
      "Networked harassment involves distributed attacks across multiple actors and platforms simultaneously",
      "Networked harassment only targets public figures such as politicians, journalists, and celebrities",
      "Networked harassment requires the use of automated bot accounts rather than real human participants"
    ],correct:1,explanation:"Networked harassment involves distributed, multi-platform attacks by multiple actors, often loosely coordinated, making it qualitatively different from dyadic bullying.",reference:"Marwick, A. E. (2021).",tags:["networked-harassment","coordinated"]},

  {id:"ca_075",category:"cyber-aggression",difficulty:1,mode:"public",type:"mcq",
    question:"Which term describes the practice of sending large volumes of offensive messages to overwhelm a target's communication channels?",
    options:[
      "Griefing, which involves deliberately disrupting other users' experiences in online gaming environments",
      "Flooding or message-bombing, which involves sending excessive messages to overwhelm the target's inbox",
      "Catfishing, which involves creating a fake identity to deceive and manipulate others in online spaces",
      "Subtweeting, which involves posting indirect negative references to a person without naming them directly"
    ],correct:1,explanation:"Flooding or message-bombing involves sending a high volume of messages to overwhelm a target's inbox or communication channels, a distinct form of cyber-aggression.",reference:"Kowalski, R. M., et al. (2014).",tags:["flooding","tactics"]},

  {id:"ca_076",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Gender differences in cyber-aggression perpetration most consistently show which pattern in research findings?",
    options:[
      "Males engage in significantly more direct forms of aggression while females use more relational tactics",
      "Females perpetrate substantially more cyber-aggression than males across all digital platform contexts",
      "No gender differences exist in any form of cyber-aggression perpetration across research studies done",
      "Males exclusively engage in cyber-aggression while females are only ever found in the victim category"
    ],correct:0,explanation:"Research generally shows males engage in more direct/overt cyber-aggression while females are more likely to use relational/indirect forms, though findings vary across studies.",reference:"Barlett, C., & Coyne, S. M. (2014).",tags:["gender","perpetration"]},

  {id:"ca_077",category:"cyber-aggression",difficulty:2,mode:"public",type:"truefalse",
    question:"The permanence and searchability of digital content can amplify the harm of cyber-aggression compared to traditional face-to-face aggression.",
    options:["True","False"],correct:0,explanation:"Digital permanence means aggressive content can be revisited, searched, and rediscovered, potentially prolonging and amplifying victim harm beyond the initial incident.",reference:"Tokunaga, R. S. (2010).",tags:["permanence","digital-characteristics"]},

  {id:"ca_078",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'barker hypothesis' in online aggression research suggests which relationship between online and offline aggression?",
    options:[
      "Online aggression is a completely separate phenomenon from offline aggression with distinct risk factors",
      "Online aggression serves primarily as a substitute outlet, reducing the frequency of offline aggression",
      "Online aggression typically represents an extension of existing offline aggressive behaviour patterns",
      "Online aggression only occurs among individuals who have never engaged in offline aggressive behaviour"
    ],correct:2,explanation:"Research supports the view that online aggression often extends offline aggressive patterns rather than representing an entirely novel phenomenon, though online-specific factors also contribute.",reference:"Olweus, D. (2012).",tags:["online-offline","continuity"]},

  {id:"ca_079",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'trolling' most accurately defined as in cyber-aggression research?",
    options:[
      "The deliberate posting of inflammatory or disruptive content to provoke emotional reactions from others",
      "The systematic collection and publication of private personal information to intimidate a target person",
      "The creation of duplicate social media accounts to artificially inflate follower counts and engagement",
      "The automated generation of misleading news articles using artificial intelligence writing algorithms"
    ],correct:0,explanation:"Trolling involves deliberately posting inflammatory, offensive, or disruptive content with the intent of provoking emotional reactions and disrupting online discourse.",reference:"Buckels, E. E., et al. (2014).",tags:["trolling","definition"]},

  {id:"ca_080",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Research consistently shows that cyberbullying has no measurable impact on victims' academic performance or school engagement.",
    options:["True","False"],correct:1,explanation:"Research demonstrates that cyberbullying victimisation is associated with decreased academic performance, school avoidance, lower engagement, and increased absenteeism.",reference:"Kowalski, R. M., & Limber, S. P. (2013).",tags:["academic-impact","victimisation"]},

  {id:"ca_081",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which intervention approach targets cyber-aggression by training potential witnesses to intervene in online harmful situations?",
    options:[
      "Punitive deterrence programmes that impose strict penalties on all identified perpetrators of aggression",
      "Bystander intervention programmes that empower observers with skills and motivation to take action",
      "Technology restriction programmes that limit young people's overall access to digital devices and media",
      "Individual psychotherapy programmes that exclusively treat diagnosed perpetrators of repeated aggression"
    ],correct:1,explanation:"Bystander intervention programmes aim to increase the willingness and capability of witnesses to intervene in cyber-aggression incidents, addressing diffusion of responsibility.",reference:"DeSmet, A., et al. (2018).",tags:["bystander-intervention","prevention"]},

  {id:"ca_082",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"In the context of cyber-aggression, the concept of 'context collapse' refers to which phenomenon?",
    options:[
      "The technical failure of social media platforms during periods of extremely high user traffic volume",
      "The merging of distinct social audiences into a single context, making targeted aggression more visible",
      "The gradual decline in aggressive online behaviour as users become more experienced with platforms",
      "The inability of law enforcement agencies to investigate cyber-aggression across national jurisdictions"
    ],correct:1,explanation:"Context collapse occurs when multiple distinct audiences merge in a single online space, meaning aggressive content can reach unintended audiences, amplifying harm.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["context-collapse","audience"]},

  {id:"ca_083",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which psychological outcome is most frequently reported by victims of prolonged cyber-aggression in adolescent populations?",
    options:[
      "Increased self-esteem and social confidence resulting from successfully managing online conflict situations",
      "Elevated symptoms of depression, anxiety, and reduced self-esteem following sustained victimisation",
      "Enhanced digital literacy skills and improved ability to navigate complex online social environments",
      "Greater motivation to pursue careers in cybersecurity and digital platform content moderation roles"
    ],correct:1,explanation:"Prolonged cyber-aggression victimisation is consistently associated with depression, anxiety, low self-esteem, and in severe cases, suicidal ideation among adolescents.",reference:"Kowalski, R. M., et al. (2014).",tags:["mental-health","victimisation"]},

  {id:"ca_084",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The 24/7 nature of digital communication means cyber-aggression can reach victims even in spaces traditionally considered safe, such as the home.",
    options:["True","False"],correct:0,explanation:"Unlike traditional bullying, cyber-aggression transcends physical boundaries, potentially reaching victims at home, creating an inescapable sense of vulnerability.",reference:"Smith, P. K., et al. (2008).",tags:["24-7","digital-characteristics"]},

  {id:"ca_085",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'displacement hypothesis' regarding online aggression proposes which relationship between digital and physical contexts?",
    options:[
      "Time spent online displaces face-to-face interactions, indirectly increasing vulnerability to aggression",
      "Online aggression directly replaces all forms of physical aggression with a perfect one-to-one exchange",
      "Physical aggression causes individuals to seek online spaces specifically to escape from violent contexts",
      "Aggressive individuals deliberately shift between online and offline contexts to avoid detection easily"
    ],correct:0,explanation:"The displacement hypothesis suggests that time spent online displaces other activities including face-to-face socialisation, potentially affecting relationship quality and vulnerability.",reference:"Kraut, R., et al. (1998).",tags:["displacement","theory"]},

  {id:"ca_086",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which characteristic distinguishes 'outing' as a specific form of cyber-aggression from other types?",
    options:[
      "Outing involves sharing private information or secrets that were shared in confidence without consent",
      "Outing exclusively describes the act of creating fake social media profiles to deceive other platform users",
      "Outing refers specifically to repeatedly sending threatening messages directly to the targeted individual",
      "Outing describes deliberately excluding someone from an online social group or collaborative digital space"
    ],correct:0,explanation:"Outing involves publicly sharing someone's private information, secrets, or embarrassing details that were shared in confidence, violating trust and privacy.",reference:"Willard, N. (2007).",tags:["outing","forms"]},

  {id:"ca_087",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The role of empathy deficits in cyber-aggression perpetration is best characterised by which research finding?",
    options:[
      "Empathy levels have no measurable relationship with any form of online aggressive behaviour patterns",
      "Only cognitive empathy deficits predict cyber-aggression while affective empathy remains irrelevant",
      "Lower levels of affective empathy are consistently associated with greater cyber-aggression perpetration",
      "Higher empathy levels paradoxically predict increased cyber-aggression due to emotional overwhelm effects"
    ],correct:2,explanation:"Research consistently links lower affective empathy (difficulty sharing others' emotions) with greater cyber-aggression perpetration, though the reduced social cues online may also diminish empathic responding.",reference:"Ang, R. P., & Goh, D. H. (2010).",tags:["empathy","perpetration"]},

  {id:"ca_088",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Parental mediation strategies, including active discussion of online risks, have been shown to reduce adolescent cyber-aggression involvement.",
    options:["True","False"],correct:0,explanation:"Active parental mediation (discussing online experiences and risks) is associated with reduced cyber-aggression perpetration and victimisation among adolescents.",reference:"Mesch, G. S. (2009).",tags:["parental-mediation","prevention"]},

  {id:"ca_089",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'pile-on' harassment in digital contexts is characterised by which specific dynamic?",
    options:[
      "A single perpetrator using multiple anonymous accounts to simulate group harassment of one victim",
      "Multiple users rapidly joining an attack on a target, often triggered by a viral post or call-out",
      "A gradual escalation of aggression between two individuals over an extended period of months online",
      "The automated detection and removal of harmful content by platform moderation algorithms in real time"
    ],correct:1,explanation:"Pile-on harassment occurs when multiple users rapidly join in attacking a target, often triggered by a viral post, creating overwhelming and intense victimisation experiences.",reference:"Citron, D. K. (2014).",tags:["pile-on","coordinated-harassment"]},

  {id:"ca_090",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which theoretical perspective argues that the characteristics of digital environments fundamentally alter the nature and dynamics of aggressive interactions?",
    options:[
      "Classical conditioning theory, which focuses on stimulus-response associations in learning processes",
      "Social identity theory, which examines how group memberships shape individual behaviour and attitudes",
      "The technology affordances perspective, which argues platform features shape aggressive behaviour online",
      "Psychoanalytic theory, which attributes aggressive behaviour to unconscious drives and early experiences"
    ],correct:2,explanation:"The technology affordances perspective argues that specific features of digital platforms (anonymity, asynchronicity, permanence) fundamentally shape how aggression manifests online.",reference:"Fox, J., & Moreland, J. J. (2015).",tags:["affordances","theory"]},

  // ═══════════════════════════════════════════════════════════════
  // CYBER-AGGRESSION (expanded ca_091–ca_270)
  // ═══════════════════════════════════════════════════════════════

  {id:"ca_091",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which term describes a pattern of digitally mediated behaviours used to monitor, control, and intimidate an intimate partner?",
    options:[
      "Technology-facilitated coercive control, involving surveillance, restriction, and intimidation via devices",
      "Digital minimalism, involving the deliberate reduction of screen time and online social interactions",
      "Cyber-hygiene practices, involving routine security measures to protect personal data from breaches",
      "Platform moderation policy, involving the enforcement of community standards by appointed volunteers"
    ],correct:0,explanation:"Technology-facilitated coercive control (TFCC) describes a pattern of digitally mediated behaviours — including surveillance, location tracking, and account control — used to dominate an intimate partner.",reference:"Dragiewicz, M., et al. (2018).",tags:["coercive-control","intimate-partner"]},

  {id:"ca_092",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Workplace cyberbullying can occur through emails, instant messages, and social media posts directed at a colleague.",
    options:["True","False"],correct:0,explanation:"Workplace cyberbullying encompasses any technology-mediated hostile behaviour targeting a colleague, including emails, instant messages, social media posts, and video calls.",reference:"Privitera, C., & Campbell, M. A. (2009).",tags:["workplace","cyberbullying"]},

  {id:"ca_093",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What is 'cyber dating abuse' most accurately defined as in the research literature?",
    options:[
      "The use of digital technology to harass, threaten, monitor, or control a romantic partner",
      "The process of meeting potential romantic partners through dating apps and online platforms",
      "The experience of social anxiety and rejection sensitivity when using online dating services",
      "The development of parasocial romantic attachments to content creators on streaming platforms"
    ],correct:0,explanation:"Cyber dating abuse refers to the use of technology to harass, threaten, monitor, or control a current or former romantic partner, encompassing surveillance, threats, and humiliation via digital means.",reference:"Zweig, J. M., et al. (2013).",tags:["dating-abuse","intimate-partner"]},

  {id:"ca_094",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Image-based sexual abuse (IBSA) is distinguished from other forms of cyber-aggression primarily by which characteristic?",
    options:[
      "It exclusively targets public figures and celebrities whose images are already widely available",
      "It involves the non-consensual creation, distribution, or threat of distribution of intimate images",
      "It can only be prosecuted under copyright law rather than under criminal harassment statutes",
      "It requires the perpetrator and victim to have had a prior face-to-face romantic relationship"
    ],correct:1,explanation:"IBSA specifically involves the non-consensual creation, distribution, or threatened distribution of intimate or sexual images, including 'revenge pornography' and digitally altered imagery.",reference:"McGlynn, C., et al. (2017).",tags:["IBSA","image-abuse"]},

  {id:"ca_095",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which model of online hate speech distinguishes between 'directed' hate targeting individuals and 'generalised' hate targeting social groups?",
    options:[
      "The dual-process model, which separates intuitive emotional reactions from deliberate rational cognition",
      "The hierarchy of needs model, which ranks different human motivations from basic survival to fulfilment",
      "The directed-versus-generalised typology, which separates individual-targeted from group-targeted expressions",
      "The uses-and-gratifications model, which examines why audiences actively seek particular media experiences"
    ],correct:2,explanation:"Hate speech typologies distinguish directed hate (targeting specific individuals based on identity) from generalised hate (expressing hostility toward entire social groups), each requiring different intervention strategies.",reference:"Hawdon, J., et al. (2017).",tags:["hate-speech","typology"]},

  {id:"ca_096",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"According to research on online radicalisation, which process most accurately describes how individuals move from passive consumption to active participation in extremist communities?",
    options:[
      "A sudden ideological conversion triggered by a single persuasive message encountered on social media",
      "A gradual escalation through echo chambers, identity fusion, and progressive normative boundary-shifting",
      "An involuntary neurological response to repeated exposure to violent imagery on unmoderated platforms",
      "A formal recruitment process involving structured interview stages conducted by extremist organisations"
    ],correct:1,explanation:"Online radicalisation typically involves gradual escalation through echo chambers where extremist views are normalised, identity fusion with the group strengthens, and normative boundaries progressively shift.",reference:"Moghaddam, F. M. (2005).",tags:["radicalisation","extremism"]},

  {id:"ca_097",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which platform governance model relies primarily on users to identify and report harmful content for subsequent review?",
    options:[
      "Proactive algorithmic scanning, where automated systems detect violations before any user reports them",
      "Government-mandated pre-publication screening, where regulators approve all content before it goes live",
      "User-flagging and reactive moderation, where community members report content for platform review teams",
      "Decentralised autonomous governance, where blockchain-based smart contracts automatically enforce all rules"
    ],correct:2,explanation:"The user-flagging model relies on community members to report content they consider harmful, which is then reviewed by human moderators or automated systems — the most common approach on major platforms.",reference:"Gillespie, T. (2018).",tags:["platform-governance","moderation"]},

  {id:"ca_098",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Artificial intelligence systems used for content moderation are equally effective across all languages and cultural contexts.",
    options:["True","False"],correct:1,explanation:"AI content moderation systems perform significantly better in English than in most other languages, and often fail to account for cultural context, sarcasm, and code-switching in diverse linguistic communities.",reference:"Vidgen, B., & Derczynski, L. (2020).",tags:["AI-moderation","content-moderation"]},

  {id:"ca_099",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Digital citizenship curricula in schools typically address cyber-aggression through which primary pedagogical approach?",
    options:[
      "Exclusively teaching technical skills such as password management and software installation procedures",
      "Developing critical thinking, empathy, ethical reasoning, and responsible digital behaviour simultaneously",
      "Focusing only on the legal penalties for cyberbullying without addressing social or emotional dimensions",
      "Training students to build their own social media platforms using programming languages and frameworks"
    ],correct:1,explanation:"Effective digital citizenship curricula take a holistic approach, developing critical thinking, empathy, ethical reasoning, and responsible behaviour rather than focusing narrowly on technical or legal aspects.",reference:"Ribble, M. (2015).",tags:["digital-citizenship","education"]},

  {id:"ca_100",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Restorative justice approaches to online harm differ from punitive approaches primarily in that they:",
    options:[
      "Focus exclusively on maximising financial penalties for perpetrators to deter future harmful behaviour",
      "Prioritise repairing relationships and addressing harm through dialogue between victims and perpetrators",
      "Remove all consequences for perpetrators and place full responsibility on victims for their recovery",
      "Rely entirely on automated algorithmic detection systems without any human involvement in resolution"
    ],correct:1,explanation:"Restorative justice online prioritises repairing harm through facilitated dialogue, accountability, and community involvement rather than purely punitive measures such as bans or legal penalties.",reference:"Daly, K. (2016).",tags:["restorative-justice","intervention"]},

  {id:"ca_101",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Trauma-informed approaches to supporting cyber-aggression victims emphasise which foundational principle?",
    options:[
      "Requiring victims to repeatedly recount their experiences in detail to multiple professionals for assessment",
      "Recognising the pervasive impact of trauma and integrating that understanding into all support practices",
      "Assuming that all victims respond to cyber-aggression in identical ways regardless of personal context",
      "Prioritising perpetrator rehabilitation over victim wellbeing in all intervention and support programmes"
    ],correct:1,explanation:"Trauma-informed approaches recognise the widespread impact of trauma, integrate this knowledge into practice, actively avoid re-traumatisation, and emphasise safety, trustworthiness, and empowerment.",reference:"SAMHSA (2014).",tags:["trauma-informed","victim-support"]},

  {id:"ca_102",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Intersectionality theory applied to cyber-aggression victimisation highlights which critical insight?",
    options:[
      "All victims experience identical levels of harm regardless of their social identities and backgrounds",
      "Only a single identity characteristic determines vulnerability to online harassment in any given context",
      "Overlapping marginalised identities create unique and compounded vulnerabilities to online victimisation",
      "Intersectionality only applies to offline discrimination and has no relevance in digital environments"
    ],correct:2,explanation:"Intersectionality (Crenshaw, 1989) reveals that individuals with overlapping marginalised identities (e.g., race, gender, disability) face compounded and qualitatively distinct forms of online victimisation.",reference:"Crenshaw, K. (1989); Noble, S. U. (2018).",tags:["intersectionality","victimisation"]},

  {id:"ca_103",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on disability and cyber-aggression consistently finds that individuals with disabilities are:",
    options:[
      "Significantly less likely to use digital technology and therefore rarely encounter online aggression",
      "At elevated risk of cyber-aggression and face unique forms of ableist harassment and digital exclusion",
      "Completely protected from cyber-aggression by platform accessibility features and moderation policies",
      "Equally likely to experience cyber-aggression as non-disabled individuals without any notable differences"
    ],correct:1,explanation:"Research shows that individuals with disabilities face elevated rates of cyber-aggression, including ableist harassment, mockery of impairments, and exclusion from online communities and platforms.",reference:"Kowalski, R. M., & Toth, A. (2018).",tags:["disability","vulnerability"]},

  {id:"ca_104",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"LGBTQ+ individuals experience cyber-aggression that is distinct from general online harassment in which primary way?",
    options:[
      "They are targeted based on sexual orientation or gender identity through identity-specific abuse patterns",
      "They experience lower rates of online harassment compared to heterosexual and cisgender populations",
      "Their experiences of cyber-aggression are limited exclusively to private messaging platforms and forums",
      "They have universally positive experiences on social media due to strong community support structures"
    ],correct:0,explanation:"LGBTQ+ individuals face identity-specific cyber-aggression including outing, deadnaming, targeted hate speech, and conversion therapy promotion, which compounds general online harassment.",reference:"GLSEN (2019); Hinduja, S., & Patchin, J. W. (2020).",tags:["LGBTQ","targeting"]},

  {id:"ca_105",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Political cyber-aggression includes the strategic use of trolling, bot networks, and harassment to silence political opponents online.",
    options:["True","False"],correct:0,explanation:"Political cyber-aggression encompasses coordinated trolling campaigns, bot-driven harassment, doxing of activists, and organised pile-ons designed to suppress political speech and intimidate opponents.",reference:"Bradshaw, S., & Howard, P. N. (2019).",tags:["political","aggression"]},

  {id:"ca_106",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'misinformation as aggression' argues that deliberate disinformation campaigns constitute cyber-aggression because they:",
    options:[
      "Are always accidental errors in reporting that carry no intentional malice toward their subjects",
      "Intentionally cause psychological, social, or physical harm to targeted individuals or communities",
      "Only affect public figures who are already accustomed to criticism and can easily counter false claims",
      "Are regulated effectively by existing content moderation systems that prevent any harmful spread"
    ],correct:1,explanation:"Deliberate disinformation targeting individuals or communities constitutes cyber-aggression when it is designed to cause psychological distress, social exclusion, reputational damage, or incite violence.",reference:"Wardle, C., & Derakhshan, H. (2017).",tags:["misinformation","aggression"]},

  {id:"ca_107",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Deepfake technology raises unique cyber-aggression concerns primarily because it enables perpetrators to:",
    options:[
      "Create highly realistic fabricated audio and video content that is difficult for victims to disprove",
      "Send anonymous text messages that cannot be traced back to any identifiable internet protocol address",
      "Access encrypted private communications between individuals without requiring any technical expertise",
      "Permanently delete digital content from all servers and backups to eliminate evidence of wrongdoing"
    ],correct:0,explanation:"Deepfake technology enables the creation of hyper-realistic fabricated video and audio, posing severe risks for non-consensual pornography, political manipulation, and identity-based harassment.",reference:"Chesney, R., & Citron, D. K. (2019).",tags:["deepfake","technology"]},

  {id:"ca_108",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which specific mechanism of gaming toxicity involves experienced players deliberately losing or disrupting matches to ruin the experience for teammates?",
    options:[
      "Griefing, where players intentionally sabotage their own team through disruptive in-game behaviour",
      "Speed-running, where players attempt to complete games as quickly as possible using optimal strategies",
      "Modding, where players create and install community-developed modifications to enhance game content",
      "Streaming, where players broadcast their gameplay live to audiences on video-sharing platforms"
    ],correct:0,explanation:"Griefing refers to the deliberate disruption of other players' gaming experience through intentional sabotage, team-killing, blocking, or other obstructive behaviours within games.",reference:"Chesney, T., et al. (2009).",tags:["gaming","griefing"]},

  {id:"ca_109",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Streaming harassment on platforms like Twitch most commonly manifests through which behaviour pattern?",
    options:[
      "Coordinated raids of abusive messages in live chat designed to overwhelm and distress the streamer",
      "Constructive criticism of gameplay technique offered politely during live broadcasts for improvement",
      "Technical difficulties with audio and video quality that accidentally disrupt streaming broadcasts",
      "The algorithmic recommendation of content that the streamer has not explicitly chosen to promote"
    ],correct:0,explanation:"Streaming harassment commonly involves coordinated 'hate raids' — organised floods of abusive messages, slurs, and threats in live chat — particularly targeting marginalised streamers.",reference:"Cai, J., & Wohn, D. Y. (2019).",tags:["streaming","harassment"]},

  {id:"ca_110",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Parasocial aggression occurs when audiences direct hostility toward public figures based on which psychological dynamic?",
    options:[
      "Formal contractual disagreements between content creators and their management representatives",
      "One-sided parasocial relationships where audiences feel entitled to influence the figure's behaviour",
      "Mutual interpersonal conflicts that develop through extended private conversations between parties",
      "Professional peer-review processes in academic contexts that occasionally produce critical feedback"
    ],correct:1,explanation:"Parasocial aggression arises from one-sided relationships where audiences develop perceived intimacy with public figures and react with hostility when expectations of that relationship are violated.",reference:"Bocarnea, M. C., & Brown, W. J. (2007).",tags:["parasocial","aggression"]},

  {id:"ca_111",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"What characterises an 'influencer pile-on' as a distinct form of cyber-aggression?",
    options:[
      "A single negative review of a product that is posted by one dissatisfied consumer on a shopping site",
      "A coordinated mass attack where a public figure's followers are directed toward a specific target",
      "A gradual accumulation of positive endorsements that builds an influencer's commercial reputation",
      "An automated marketing campaign that sends identical promotional messages to thousands of accounts"
    ],correct:1,explanation:"Influencer pile-ons occur when a public figure — intentionally or not — directs their large following toward a target, resulting in mass harassment that overwhelms the individual's capacity to cope.",reference:"Marwick, A. E. (2021).",tags:["pile-on","influencer"]},

  {id:"ca_112",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Cross-cultural research on cyberbullying prevalence reveals which consistent finding?",
    options:[
      "Rates are virtually identical across all countries, cultures, and socioeconomic contexts worldwide",
      "Only Western industrialised nations report any measurable prevalence of cyberbullying behaviours",
      "Prevalence varies significantly across cultures, influenced by technology access and cultural norms",
      "Non-Western countries consistently report higher cyberbullying rates than all Western counterparts"
    ],correct:2,explanation:"Cross-cultural studies show significant variation in cyberbullying prevalence, influenced by technology access rates, cultural norms around conflict, collectivism-individualism, and legal frameworks.",reference:"Barlett, C. P., et al. (2014).",tags:["cross-cultural","prevalence"]},

  {id:"ca_113",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"All countries have specific legislation that directly criminalises cyberbullying as a distinct legal offence.",
    options:["True","False"],correct:1,explanation:"Legal frameworks for cyberbullying vary enormously worldwide. Many countries lack specific cyberbullying legislation and rely on broader harassment, stalking, or communications laws.",reference:"Slonje, R., et al. (2013).",tags:["legal","international"]},

  {id:"ca_114",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Victim support services for cyber-aggression typically adopt which evidence-based approach as a first step?",
    options:[
      "Immediately encouraging victims to confront their perpetrators directly through the same digital platform",
      "Providing safety planning, emotional support, and practical guidance on evidence preservation and reporting",
      "Advising victims to permanently delete all of their social media accounts without preserving any evidence",
      "Referring all cases directly to law enforcement without any initial assessment of the victim's needs"
    ],correct:1,explanation:"Evidence-based victim support begins with safety planning, emotional validation, practical guidance on preserving digital evidence, and assistance with reporting — prioritising victim agency and wellbeing.",reference:"Tokunaga, R. S. (2010).",tags:["victim-support","intervention"]},

  {id:"ca_115",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Perpetrator intervention programmes for cyber-aggression are most effective when they address which underlying factor?",
    options:[
      "Only the technical skills needed to carry out online harassment without addressing psychological drivers",
      "Cognitive distortions, empathy deficits, and the social-cognitive processes that maintain aggressive behaviour",
      "Exclusively the legal consequences of online harassment without exploring motivation or risk factors",
      "Physical fitness and diet, which research shows are the primary predictors of online aggressive conduct"
    ],correct:1,explanation:"Effective perpetrator programmes address cognitive distortions (e.g., moral disengagement), empathy deficits, emotional regulation, and the social-cognitive processes maintaining aggressive behaviour online.",reference:"Williford, A., et al. (2013).",tags:["perpetrator","intervention"]},

  {id:"ca_116",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Neurobiological research on cyber-aggression perpetration suggests which brain region is most consistently implicated in reduced empathic processing?",
    options:[
      "The occipital cortex, which is primarily responsible for visual processing and pattern recognition tasks",
      "The prefrontal cortex, which regulates impulse control, empathy, and moral decision-making processes",
      "The cerebellum, which coordinates fine motor movements, balance, and procedural learning mechanisms",
      "The hippocampus, which is primarily involved in memory consolidation and spatial navigation functions"
    ],correct:1,explanation:"The prefrontal cortex, particularly the ventromedial and dorsolateral regions, is consistently implicated in empathy, moral reasoning, and impulse control — deficits linked to aggressive behaviour.",reference:"Raine, A. (2013).",tags:["neurobiology","prefrontal-cortex"]},

  {id:"ca_117",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Executive function deficits are linked to cyber-aggression primarily because they impair which cognitive capacity?",
    options:[
      "The ability to memorise and recall large amounts of factual information during academic examinations",
      "The ability to inhibit impulsive responses and consider the consequences of actions before acting",
      "The ability to perform complex mathematical calculations and logical reasoning tasks efficiently",
      "The ability to recognise familiar faces and recall biographical details about acquaintances accurately"
    ],correct:1,explanation:"Executive function deficits — particularly in inhibitory control — reduce the ability to suppress impulsive aggressive responses and consider consequences, increasing vulnerability to perpetrating cyber-aggression.",reference:"Beaver, K. M., et al. (2015).",tags:["executive-function","neurocognitive"]},

  {id:"ca_118",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Insecure attachment styles are linked to cyber-aggression perpetration through which mediating pathway?",
    options:[
      "Insecure attachment has no empirical relationship with any form of aggressive behaviour whatsoever",
      "Insecure attachment increases emotional dysregulation and hostile attribution biases in social interactions",
      "Insecure attachment exclusively predicts prosocial online behaviour and never predicts aggressive conduct",
      "Insecure attachment only affects face-to-face relationships and has no impact on digital interactions"
    ],correct:1,explanation:"Insecure attachment — particularly anxious attachment — is linked to emotional dysregulation, hostile attribution biases, and jealousy-driven monitoring, all pathways to cyber-aggression perpetration.",reference:"Casas, J. A., et al. (2015).",tags:["attachment","perpetration"]},

  {id:"ca_119",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Social Identity Theory (SIT) explains online intergroup aggression primarily through which mechanism?",
    options:[
      "The innate biological drive toward territorial aggression that is hardwired into human neural pathways",
      "In-group favouritism and out-group derogation that intensify when group identity becomes salient online",
      "The random allocation of aggressive tendencies across populations without any group-based patterning",
      "Individual personality traits that remain constant regardless of group membership or social categorisation"
    ],correct:1,explanation:"SIT (Tajfel & Turner, 1979) explains online intergroup aggression through in-group/out-group dynamics — when social identity is salient, people derogate out-groups to enhance collective self-esteem.",reference:"Tajfel, H., & Turner, J. C. (1979).",tags:["social-identity","intergroup"]},

  {id:"ca_120",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The concept of 'moral panic' about technology suggests that public concern about online harms is always proportionate to the actual empirical evidence of risk.",
    options:["True","False"],correct:1,explanation:"Moral panic theory (Cohen, 1972) suggests that societal concerns about technology risks can become disproportionate to actual evidence, driven by media amplification, political interests, and anxiety about social change.",reference:"Cohen, S. (1972); Marwick, A. E. (2008).",tags:["moral-panic","media"]},

  {id:"ca_121",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Media literacy interventions targeting cyber-aggression are most effective when they teach participants to:",
    options:[
      "Avoid all digital technology entirely and return to exclusively face-to-face communication methods",
      "Critically evaluate online content, recognise manipulation tactics, and develop prosocial digital habits",
      "Accept all online content at face value without questioning its source, accuracy, or intended audience",
      "Focus exclusively on creating viral content to build personal influence across social media platforms"
    ],correct:1,explanation:"Effective media literacy interventions develop critical evaluation skills, help participants recognise manipulation and aggression tactics, and foster prosocial digital habits and ethical online behaviour.",reference:"Hinduja, S., & Patchin, J. W. (2015).",tags:["media-literacy","intervention"]},

  {id:"ca_122",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on reporting system design suggests that users are more likely to report cyber-aggression when platforms provide:",
    options:[
      "Lengthy multi-page forms requiring detailed technical information and extensive written explanations",
      "Clear, accessible reporting flows with feedback on outcomes and transparent enforcement decisions",
      "Anonymous reporting systems that provide no confirmation or follow-up after a report is submitted",
      "Reporting options available only during specific hours when human moderators are actively on duty"
    ],correct:1,explanation:"Users are more likely to report when systems are clear, accessible, provide meaningful feedback on report outcomes, and demonstrate transparent enforcement — building trust in the process.",reference:"Crawford, K., & Gillespie, T. (2016).",tags:["reporting","platform-design"]},

  {id:"ca_123",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The age-verification debate in the context of online safety involves which central tension?",
    options:[
      "Balancing child protection through age-gating against privacy rights and data security concerns",
      "Determining the optimal font size for platform terms-of-service documents across different devices",
      "Choosing between different programming languages for developing new social media platform features",
      "Deciding which advertising revenue models are most profitable for social media platform shareholders"
    ],correct:0,explanation:"Age verification debates centre on balancing child protection (restricting minors' access to harmful content) against privacy concerns (surveillance, data collection) and technical feasibility challenges.",reference:"Livingstone, S., & Helsper, E. J. (2008).",tags:["age-verification","child-safety"]},

  {id:"ca_124",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The tension between encryption and online safety arises because end-to-end encryption:",
    options:[
      "Makes all internet connections slower and less reliable for every user on the affected network",
      "Protects user privacy but also prevents platforms and law enforcement from detecting harmful content",
      "Is only available to corporate users and cannot be implemented in consumer messaging applications",
      "Has been universally banned by international treaties due to its potential to facilitate criminal activity"
    ],correct:1,explanation:"End-to-end encryption protects user privacy and security but creates a tension with safety because it prevents platforms and authorities from scanning for harmful content such as CSAM or threats.",reference:"Abelson, H., et al. (2015).",tags:["encryption","safety"]},

  {id:"ca_125",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Workplace cyberbullying has been shown to increase employee absenteeism, reduce job satisfaction, and negatively affect organisational productivity.",
    options:["True","False"],correct:0,explanation:"Research consistently links workplace cyberbullying to increased absenteeism, reduced job satisfaction, lower productivity, higher turnover intentions, and negative mental health outcomes for targets.",reference:"Farley, S., et al. (2015).",tags:["workplace","outcomes"]},

  {id:"ca_126",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which factor most distinguishes workplace cyberbullying from schoolyard cyberbullying in research?",
    options:[
      "The presence of formal organisational power hierarchies and employment-related consequences for targets",
      "The exclusive use of telephone-based communication rather than internet-based messaging technologies",
      "The complete absence of any psychological harm to adult victims compared to adolescent populations",
      "The fact that workplace cyberbullying only occurs during official business hours and never afterwards"
    ],correct:0,explanation:"Workplace cyberbullying is distinctly shaped by organisational power hierarchies, employment dependency, professional reputation risks, and the potential for formal employment consequences.",reference:"D'Cruz, P., & Noronha, E. (2013).",tags:["workplace","power-dynamics"]},

  {id:"ca_127",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on cyber dating abuse victimisation most consistently identifies which risk factor?",
    options:[
      "Higher educational attainment, which increases exposure to online academic debate and disagreement",
      "Prior experience of offline intimate partner violence, which strongly predicts digital victimisation",
      "Exclusive use of desktop computers rather than mobile devices for accessing online dating platforms",
      "Living in rural areas with limited internet connectivity and fewer available social media platforms"
    ],correct:1,explanation:"Prior offline intimate partner violence is one of the strongest predictors of cyber dating abuse, suggesting digital aggression often extends existing patterns of coercive control and violence.",reference:"Zweig, J. M., et al. (2014).",tags:["dating-abuse","risk-factors"]},

  {id:"ca_128",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Technology-facilitated coercive control can include monitoring a partner's location through GPS tracking apps installed without their knowledge.",
    options:["True","False"],correct:0,explanation:"GPS tracking, spyware installation, and covert location monitoring are well-documented forms of technology-facilitated coercive control in intimate partner violence contexts.",reference:"Woodlock, D. (2017).",tags:["coercive-control","surveillance"]},

  {id:"ca_129",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The legal concept of 'coercive control' as applied to technology-facilitated abuse was pioneered in which country's domestic violence legislation?",
    options:[
      "England and Wales, through the Serious Crime Act 2015 which criminalised coercive controlling behaviour",
      "Japan, through the Anti-Cyberbullying Act 2010 which exclusively addressed school-based digital harassment",
      "Brazil, through the Marco Civil da Internet 2014 which focused on net neutrality and data protection",
      "Canada, through the Personal Information Protection Act 2000 which regulated corporate data practices"
    ],correct:0,explanation:"England and Wales pioneered the criminalisation of coercive control through the Serious Crime Act 2015, providing a legal framework later applied to technology-facilitated coercive control.",reference:"Stark, E. (2007); Serious Crime Act 2015.",tags:["coercive-control","legal"]},

  {id:"ca_130",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which form of image-based sexual abuse involves creating sexualised images of a person using their face superimposed onto another body?",
    options:[
      "Catfishing, which involves creating a fake identity using stock photographs to deceive romantic targets",
      "Deepfake pornography, which uses artificial intelligence to superimpose faces onto explicit content",
      "Screenshot sharing, which involves capturing and redistributing publicly posted social media content",
      "Meme creation, which involves adding humorous text captions to widely circulated image templates"
    ],correct:1,explanation:"Deepfake pornography uses AI to superimpose a victim's face onto explicit content without consent, constituting a particularly harmful form of image-based sexual abuse that is difficult to detect.",reference:"Citron, D. K. (2019).",tags:["deepfake","IBSA"]},

  {id:"ca_131",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Hate speech research identifies which factor as most strongly predicting engagement with online hate content?",
    options:[
      "Higher levels of formal education, which increase critical analysis skills and debate participation",
      "Pre-existing prejudicial attitudes combined with perceived social support for expressing those views",
      "Regular physical exercise, which increases testosterone levels and therefore aggressive online behaviour",
      "Professional training in content moderation, which paradoxically increases exposure to extremist views"
    ],correct:1,explanation:"Pre-existing prejudice combined with perceived normative support (believing others share and approve of those views) is the strongest predictor of engaging with and producing online hate speech.",reference:"Hawdon, J., et al. (2017).",tags:["hate-speech","predictors"]},

  {id:"ca_132",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Online radicalisation always follows a single, predictable pathway from initial contact to violent extremism.",
    options:["True","False"],correct:1,explanation:"Research consistently shows that radicalisation pathways are diverse and non-linear — there is no single profile or predictable sequence, and most individuals exposed to extremist content do not radicalise.",reference:"Borum, R. (2011).",tags:["radicalisation","pathways"]},

  {id:"ca_133",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Platform governance through 'deplatforming' — removing users or content from major platforms — has been shown to:",
    options:[
      "Completely eliminate harmful content from the entire internet with no displacement effects observed",
      "Reduce the overall reach and engagement of deplatformed content while sometimes displacing it elsewhere",
      "Have absolutely no measurable effect on the spread or impact of extremist content or hate speech",
      "Increase engagement with harmful content by generating widespread sympathy and media attention"
    ],correct:1,explanation:"Research shows deplatforming reduces overall reach and engagement of harmful content on mainstream platforms, though some displacement to alternative platforms occurs — the net effect is still a reduction.",reference:"Jhaver, S., et al. (2021).",tags:["deplatforming","governance"]},

  {id:"ca_134",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Content moderation AI systems are most prone to bias when trained on datasets that:",
    options:[
      "Include excessive diversity of language, cultural context, and communicative styles from global users",
      "Over-represent dominant cultural norms and under-represent minority linguistic and cultural expressions",
      "Are too small to contain any meaningful patterns and thus produce entirely random classification outputs",
      "Consist exclusively of content that has already been correctly classified by multiple human moderators"
    ],correct:1,explanation:"AI moderation systems trained on datasets over-representing dominant cultures disproportionately flag minority linguistic expressions, AAVE, and non-Western communicative norms as harmful.",reference:"Sap, M., et al. (2019).",tags:["AI-bias","content-moderation"]},

  {id:"ca_135",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which element of digital citizenship education is most directly relevant to preventing cyber-aggression?",
    options:[
      "Learning to type quickly and accurately using standardised keyboard layouts and software applications",
      "Developing empathy, ethical reasoning, and an understanding of the real-world impact of online actions",
      "Memorising the terms of service agreements for all major social media platforms and search engines",
      "Building technical expertise in hardware repair, network configuration, and software troubleshooting"
    ],correct:1,explanation:"The empathy and ethical reasoning components of digital citizenship education are most directly relevant to cyber-aggression prevention, helping students understand the real impact of online behaviour.",reference:"Ribble, M. (2015).",tags:["digital-citizenship","prevention"]},

  {id:"ca_136",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Restorative justice approaches to cyber-aggression have been successfully adapted for use in school settings to address cyberbullying incidents.",
    options:["True","False"],correct:0,explanation:"School-based restorative justice programmes have been successfully adapted to address cyberbullying, using facilitated conferences, peer mediation, and community circles to repair harm and rebuild relationships.",reference:"Morrison, B. (2007).",tags:["restorative-justice","schools"]},

  {id:"ca_137",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Trauma-informed care for cyber-aggression victims specifically avoids which harmful practice?",
    options:[
      "Providing emotional support and validation of the victim's experiences and emotional responses",
      "Forcing victims to repeatedly re-tell their story to multiple professionals without clear purpose",
      "Offering practical assistance with safety planning, evidence collection, and referral to specialists",
      "Giving victims choices about how and when they engage with support services and legal processes"
    ],correct:1,explanation:"Trauma-informed care explicitly avoids re-traumatisation through forced repeated re-telling, instead prioritising safety, choice, collaboration, and empowerment in the support process.",reference:"SAMHSA (2014).",tags:["trauma-informed","practice"]},

  {id:"ca_138",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Research on intersectionality and online harassment reveals that women of colour experience:",
    options:[
      "Identical rates and forms of harassment as white women, with no differences in severity or content",
      "Lower rates of harassment because intersectional identities provide additional community protection",
      "Uniquely gendered and racialised abuse that is qualitatively different from single-axis harassment",
      "Harassment exclusively related to gender, with racial identity playing no role in targeting patterns"
    ],correct:2,explanation:"Women of colour experience qualitatively distinct harassment that combines misogyny and racism in ways not captured by single-axis analyses — they face gendered racism and racialised sexism simultaneously.",reference:"Bailey, M. (2021); Noble, S. U. (2018).",tags:["intersectionality","gendered-racism"]},

  {id:"ca_139",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which specific barrier to reporting cyber-aggression is most commonly cited by individuals with disabilities?",
    options:[
      "Inaccessible reporting interfaces that do not accommodate screen readers or alternative input methods",
      "An excess of accessible reporting options that creates confusion about which pathway to select",
      "The complete absence of any cyber-aggression targeting individuals with disabilities in online spaces",
      "Excessive support from platform moderators that makes formal reporting feel unnecessarily redundant"
    ],correct:0,explanation:"Inaccessible reporting interfaces — including CAPTCHA barriers, complex forms, and lack of screen reader compatibility — are the most commonly cited barriers to reporting for users with disabilities.",reference:"Alhaboby, Z. A., et al. (2017).",tags:["disability","reporting-barriers"]},

  {id:"ca_140",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"'Deadnaming' — using a transgender person's former name without consent — is recognised as a form of identity-based cyber-aggression.",
    options:["True","False"],correct:0,explanation:"Deadnaming is a recognised form of identity-based cyber-aggression that invalidates transgender individuals' identities, causes distress, and can expose them to further discrimination and harassment.",reference:"Scheuerman, M. K., et al. (2018).",tags:["LGBTQ","deadnaming"]},

  {id:"ca_141",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Political cyber-aggression research identifies 'astroturfing' as which specific practice?",
    options:[
      "Creating the false impression of grassroots support through coordinated fake accounts and bot networks",
      "Genuinely organising community-level political campaigns through local social media groups and forums",
      "Conducting legitimate public opinion research through structured surveys distributed on digital platforms",
      "Publishing academic peer-reviewed analyses of political discourse patterns on social media platforms"
    ],correct:0,explanation:"Astroturfing creates the false appearance of grassroots support or opposition through coordinated fake accounts, bots, and paid operatives — a deceptive form of political cyber-aggression.",reference:"Keller, F. B., et al. (2020).",tags:["political","astroturfing"]},

  {id:"ca_142",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'weaponisation of information' framework argues that misinformation constitutes cyber-aggression when it:",
    options:[
      "Results from innocent misunderstandings between individuals with different cultural backgrounds online",
      "Is strategically deployed to cause harm, undermine trust, and manipulate public discourse deliberately",
      "Appears in peer-reviewed academic journals that later issue corrections to factual inaccuracies",
      "Is shared accidentally by well-intentioned individuals who lack the skills to verify source credibility"
    ],correct:1,explanation:"The weaponisation framework distinguishes deliberate strategic deployment of misinformation — designed to harm, manipulate, and undermine trust — from accidental sharing or honest mistakes.",reference:"Woolley, S. C., & Howard, P. N. (2018).",tags:["misinformation","weaponisation"]},

  {id:"ca_143",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The primary psychological harm of deepfake abuse to victims, according to research, is:",
    options:[
      "Mild inconvenience that is quickly resolved once the fabricated content is identified and removed",
      "Severe loss of control over one's own image, identity, and reputation with lasting psychological impact",
      "Temporary embarrassment that has no measurable long-term effects on wellbeing or social functioning",
      "Exclusively financial harm through loss of employment without any emotional or psychological effects"
    ],correct:1,explanation:"Deepfake abuse causes severe psychological harm through loss of control over one's image and identity, persistent anxiety about content resurfacing, and long-term damage to reputation and relationships.",reference:"Citron, D. K. (2019).",tags:["deepfake","psychological-harm"]},

  {id:"ca_144",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"In gaming contexts, 'swatting' — making false emergency reports to trigger armed police responses at a target's location — is classified as:",
    options:[
      "A harmless practical joke that is widely accepted within competitive gaming communities worldwide",
      "A potentially lethal form of cyber-aggression that bridges online harassment with real-world danger",
      "A legitimate competitive strategy used to distract opponents during professional esports tournaments",
      "An automated anti-cheat mechanism built into gaming platforms to detect and ban dishonest players"
    ],correct:1,explanation:"Swatting is a severe and potentially lethal form of cyber-aggression that weaponises emergency services, creating real-world danger through false reports — several incidents have resulted in deaths.",reference:"Krebs, B. (2018).",tags:["gaming","swatting"]},

  {id:"ca_145",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Streaming platforms have implemented tools such as chat filters and moderator bots specifically to combat harassment in live chat environments.",
    options:["True","False"],correct:0,explanation:"Major streaming platforms have developed chat filters, automated moderator bots, follower-only modes, and other tools specifically designed to combat live chat harassment and hate raids.",reference:"Seering, J., et al. (2019).",tags:["streaming","platform-tools"]},

  {id:"ca_146",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Research on parasocial relationships and aggression finds that the transition from parasocial admiration to parasocial aggression is most often triggered by:",
    options:[
      "Perceived betrayal or norm violation by the public figure that threatens the fan's sense of identity",
      "The public figure directly engaging with and personally thanking each individual follower by name",
      "A gradual decrease in content quality that naturally leads followers to find alternative creators",
      "Platform algorithm changes that reduce the visibility of the public figure's content in user feeds"
    ],correct:0,explanation:"Parasocial aggression is most commonly triggered by perceived betrayal — when a public figure violates the implicit 'contract' of the parasocial relationship, threatening the fan's identity investment.",reference:"Stever, G. S. (2011).",tags:["parasocial","betrayal"]},

  {id:"ca_147",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Cross-cultural research suggests that collectivist cultures may experience cyberbullying differently because:",
    options:[
      "Collectivist cultures have no access to digital technology and therefore never experience cyberbullying",
      "Social exclusion and loss of face carry greater weight, making relational cyber-aggression more harmful",
      "Individualist cultures exclusively experience cyberbullying while collectivist cultures are entirely immune",
      "Collectivist cultures have eliminated all forms of interpersonal conflict through cultural socialisation"
    ],correct:1,explanation:"In collectivist cultures, social exclusion and loss of face (public reputation damage) carry greater psychological weight, making relational forms of cyber-aggression particularly harmful.",reference:"Li, Q. (2008).",tags:["cross-cultural","collectivism"]},

  {id:"ca_148",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The EU's Digital Services Act (DSA) addresses cyber-aggression primarily by requiring platforms to:",
    options:[
      "Pre-screen all user content before publication and block anything containing negative sentiment",
      "Implement transparent content moderation, provide effective reporting mechanisms, and assess systemic risks",
      "Encrypt all user communications to prevent any third party from accessing or moderating the content",
      "Ban all anonymous accounts and require government-issued identification for every social media user"
    ],correct:1,explanation:"The EU DSA requires large platforms to implement transparent moderation, effective reporting, systemic risk assessments, and provide researchers with data access — a regulatory approach to platform governance.",reference:"European Commission, Digital Services Act (2022).",tags:["legal","EU-DSA"]},

  {id:"ca_149",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Victim support helplines specifically dedicated to online harassment now exist in many countries worldwide.",
    options:["True","False"],correct:0,explanation:"Specialist helplines and support services for online harassment — such as the UK's Revenge Porn Helpline and various cyberbullying hotlines — have been established in numerous countries.",reference:"UK Revenge Porn Helpline; StopBullying.gov.",tags:["victim-support","helplines"]},

  {id:"ca_150",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Perpetrator intervention programmes based on cognitive-behavioural therapy (CBT) for cyber-aggression target which primary mechanism?",
    options:[
      "Unconscious psychodynamic conflicts rooted in early childhood attachment disruption and trauma",
      "Distorted cognitions about victims, normalisation of aggression, and deficits in emotional regulation",
      "Genetic predispositions to aggression that cannot be modified through any psychological intervention",
      "Environmental factors such as room temperature and lighting that influence mood and behaviour online"
    ],correct:1,explanation:"CBT-based perpetrator programmes target cognitive distortions (victim-blaming, minimisation), normalisation of aggressive behaviour, and emotional regulation deficits through structured therapeutic exercises.",reference:"Langos, C. (2012).",tags:["perpetrator","CBT"]},

  {id:"ca_151",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Neurobiological research reveals that the absence of facial feedback in online communication may increase aggression because:",
    options:[
      "Users are unable to type quickly enough to express their emotions before frustration builds up",
      "Mirror neuron activation and empathic processing are reduced without visible victim distress cues",
      "Users always interpret text-based messages positively and therefore never experience negative emotions",
      "Facial recognition software on devices automatically filters out all emotionally expressive content"
    ],correct:1,explanation:"Without facial feedback, mirror neuron systems that normally activate empathic responses when observing distress are not engaged, reducing the neurobiological brake on aggressive impulses online.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["neurobiology","empathy"]},

  {id:"ca_152",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Executive function and cyber-aggression research suggests that 'hot' executive functions are more relevant than 'cool' executive functions because:",
    options:[
      "Cool executive functions govern all emotional decision-making in high-stakes social conflict situations",
      "Hot executive functions govern emotion-laden decisions, which better capture the affective nature of aggression",
      "Hot executive functions only relate to physical aggression and have no relevance to digital interactions",
      "Cool executive functions are completely absent in adolescents and therefore cannot be meaningfully measured"
    ],correct:1,explanation:"'Hot' executive functions — governing decision-making under emotional arousal — are more relevant to cyber-aggression than 'cool' cognitive functions because aggression typically occurs in emotional contexts.",reference:"Zelazo, P. D., & Carlson, S. M. (2012).",tags:["executive-function","hot-cool"]},

  {id:"ca_153",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Anxious attachment is more strongly linked to cyber dating abuse perpetration than avoidant attachment because anxiously attached individuals:",
    options:[
      "Have no interest in maintaining romantic relationships and avoid all digital contact with partners",
      "Experience heightened jealousy, surveillance urges, and emotional volatility in intimate relationships",
      "Demonstrate superior emotional regulation skills that prevent them from engaging in any aggression",
      "Prefer face-to-face communication exclusively and never use digital technology in relationships"
    ],correct:1,explanation:"Anxiously attached individuals experience intense fears of abandonment, heightened jealousy, and emotional volatility that drive surveillance behaviours and aggressive responses to perceived threats in relationships.",reference:"Morelli, M., et al. (2018).",tags:["attachment","dating-abuse"]},

  {id:"ca_154",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Social Identity Theory suggests that people are more likely to engage in online aggression against members of perceived out-groups.",
    options:["True","False"],correct:0,explanation:"SIT predicts that intergroup contexts increase out-group derogation — people are more aggressive toward perceived out-group members, especially when group identity is salient and intergroup boundaries are clear.",reference:"Tajfel, H., & Turner, J. C. (1979).",tags:["social-identity","out-group"]},

  {id:"ca_155",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Cohen's moral panic framework suggests that media coverage of cyberbullying may contribute to moral panic through which process?",
    options:[
      "Systematic underreporting and minimisation of online harms that reduces public awareness entirely",
      "Disproportionate amplification, creation of 'folk devils,' and calls for authoritarian social controls",
      "Balanced, evidence-based reporting that accurately reflects the nuanced findings of academic research",
      "Complete media silence about cyberbullying that prevents any public discourse on the topic whatsoever"
    ],correct:1,explanation:"Cohen's framework identifies moral panic through disproportionate media amplification, the creation of 'folk devils' (e.g., 'screen-addicted youth'), and demands for authoritarian control measures.",reference:"Cohen, S. (1972).",tags:["moral-panic","media-amplification"]},

  {id:"ca_156",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Media literacy programmes that specifically address cyber-aggression are most effective when delivered through:",
    options:[
      "One-off assemblies that provide general information about internet safety without interactive elements",
      "Sustained, interactive curricula embedded within existing educational programmes across multiple sessions",
      "Distributing printed leaflets at school gates without any accompanying discussion or follow-up activities",
      "Restricting all internet access for participants until they can demonstrate perfect digital citizenship"
    ],correct:1,explanation:"Research consistently shows that sustained, interactive, curriculum-embedded media literacy programmes are more effective than one-off sessions for reducing cyber-aggression and building lasting skills.",reference:"Del Rey, R., et al. (2016).",tags:["media-literacy","programme-design"]},

  {id:"ca_157",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Research on 'friction' in reporting system design suggests that reducing cognitive friction in reporting leads to:",
    options:[
      "Fewer reports because users no longer feel the urgency that complexity and difficulty create",
      "Higher reporting rates and faster response times, but also increased rates of frivolous reports",
      "No change in reporting behaviour because users always report regardless of interface complexity",
      "Complete elimination of all cyber-aggression because every harmful post is instantly identified"
    ],correct:1,explanation:"Reducing friction (simplifying reporting flows) increases reporting rates and speed but also increases frivolous reports — platforms must balance accessibility with filtering mechanisms.",reference:"Schoenebeck, S., et al. (2021).",tags:["reporting","friction"]},

  {id:"ca_158",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Age verification systems can be implemented without any trade-offs to user privacy or data security.",
    options:["True","False"],correct:1,explanation:"All current age verification methods involve privacy and security trade-offs — identity documents risk data breaches, biometric estimation raises surveillance concerns, and self-declaration is easily circumvented.",reference:"5Rights Foundation (2021).",tags:["age-verification","privacy"]},

  {id:"ca_159",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'going dark' problem in the encryption debate refers to law enforcement's concern that:",
    options:[
      "Social media platforms are becoming visually darker in their interface design and colour palette choices",
      "Strong encryption prevents lawful interception of communications, even when legally authorised by courts",
      "Internet service providers are reducing bandwidth speeds during nighttime hours to conserve energy",
      "Users are increasingly preferring dark mode display settings that reduce blue light exposure from screens"
    ],correct:1,explanation:"The 'going dark' problem refers to law enforcement's concern that strong end-to-end encryption prevents them from accessing communications content even with valid legal authorisation (warrants).",reference:"Comey, J. (2014); Abelson, H., et al. (2015).",tags:["encryption","law-enforcement"]},

  {id:"ca_160",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Workplace cyberbullying research identifies which organisational factor as the strongest predictor of perpetration?",
    options:[
      "Organisational climates that tolerate or normalise aggressive communication styles among employees",
      "The physical colour scheme and interior design of the office workspace and meeting rooms",
      "The availability of ergonomic furniture and standing desks in the workplace environment",
      "The geographical distance between the organisation's headquarters and its satellite office locations"
    ],correct:0,explanation:"Organisational climate — particularly cultures that tolerate aggressive communication, lack clear anti-bullying policies, and have weak management oversight — is the strongest predictor of workplace cyberbullying.",reference:"Coyne, I., et al. (2017).",tags:["workplace","organisational-climate"]},

  {id:"ca_161",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Research on cyber dating abuse identifies 'digital dating abuse' as distinct from 'digital monitoring' because:",
    options:[
      "Digital monitoring is always consensual and welcomed by both partners in the romantic relationship",
      "Digital dating abuse involves direct aggression and control, while monitoring involves surveillance behaviour",
      "Digital monitoring only occurs in long-distance relationships and never in co-located partnerships",
      "Digital dating abuse exclusively involves financial exploitation without any communicative component"
    ],correct:1,explanation:"Researchers distinguish direct digital dating abuse (threats, humiliation, control) from digital monitoring (checking messages, tracking location, demanding passwords) as related but distinct constructs.",reference:"Reed, L. A., et al. (2017).",tags:["dating-abuse","monitoring"]},

  {id:"ca_162",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Coercive control through technology can include a perpetrator demanding access to their partner's email passwords and social media accounts.",
    options:["True","False"],correct:0,explanation:"Demanding account passwords is a well-documented form of technology-facilitated coercive control, enabling surveillance, impersonation, and isolation from support networks.",reference:"Harris, B. A., & Woodlock, D. (2019).",tags:["coercive-control","passwords"]},

  {id:"ca_163",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'victim-blaming' in image-based sexual abuse cases commonly manifests through which public response?",
    options:[
      "Expressing empathy and concern for the psychological wellbeing of the person whose images were shared",
      "Arguing that victims should not have created intimate images and are therefore responsible for the abuse",
      "Calling for stronger legal penalties and platform accountability for the non-consensual distribution",
      "Providing information about support services and evidence preservation to assist affected individuals"
    ],correct:1,explanation:"Victim-blaming in IBSA cases commonly takes the form of arguing victims 'should not have taken the images,' deflecting responsibility from perpetrators who distributed them without consent.",reference:"Bates, S. (2017).",tags:["IBSA","victim-blaming"]},

  {id:"ca_164",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which analytical framework categorises hate speech by its function — such as dehumanisation, delegitimisation, and incitement?",
    options:[
      "The functional hate speech framework, which classifies expressions by their rhetorical purpose and impact",
      "The Shannon-Weaver communication model, which analyses signal transmission efficiency in channels",
      "The Maslow hierarchy of needs model, which ranks human motivational drives from basic to aspirational",
      "The technology acceptance model, which predicts user adoption of new digital tools and applications"
    ],correct:0,explanation:"Functional frameworks categorise hate speech by rhetorical function — dehumanisation, delegitimisation, incitement, demonisation — rather than by content alone, enabling more targeted interventions.",reference:"Benesch, S. (2012).",tags:["hate-speech","functional-framework"]},

  {id:"ca_165",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'stochastic terrorism' concept describes how online extremist rhetoric can lead to violence through which mechanism?",
    options:[
      "Formally organised terrorist cells that use encrypted platforms to coordinate specific planned attacks",
      "Random individuals being inspired to act violently after exposure to dehumanising rhetoric and stochastic processes",
      "Government agencies deliberately creating fake extremist content to entrap potential domestic terrorists",
      "Academic researchers inadvertently producing harmful content through their studies of extremist language"
    ],correct:1,explanation:"Stochastic terrorism describes how public demonisation of groups creates conditions where statistically predictable — but individually unpredictable — lone actors commit violence inspired by the rhetoric.",reference:"Hamm, M. S., & Spaaij, R. (2017).",tags:["radicalisation","stochastic-terrorism"]},

  {id:"ca_166",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'Santa Clara Principles' on content moderation transparency call for platforms to provide:",
    options:[
      "Complete anonymity for all moderators so they cannot be identified or held accountable for decisions",
      "Aggregate data on content removals, clear explanations for specific removals, and meaningful appeal processes",
      "Absolute freedom of expression with no content removal or moderation of any kind on their platforms",
      "Mandatory government approval before any content moderation decision can be implemented by platforms"
    ],correct:1,explanation:"The Santa Clara Principles establish transparency standards: platforms should publish aggregate removal data, provide clear removal notices to affected users, and offer meaningful appeal mechanisms.",reference:"Santa Clara Principles (2018).",tags:["platform-governance","transparency"]},

  {id:"ca_167",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Content moderation AI can effectively detect sarcasm and irony in all cultural and linguistic contexts.",
    options:["True","False"],correct:1,explanation:"Sarcasm and irony detection remains a major challenge for AI moderation systems, particularly across diverse cultural and linguistic contexts where the same words may carry very different meanings.",reference:"Nobata, C., et al. (2016).",tags:["AI-moderation","sarcasm"]},

  {id:"ca_168",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Digital citizenship education is most effective at reducing cyber-aggression when it is integrated with:",
    options:[
      "Standardised testing programmes that penalise students for incorrect answers about internet safety",
      "Social-emotional learning curricula that develop empathy, self-regulation, and relationship skills",
      "Physical education classes that have no connection to technology use or online behaviour patterns",
      "Advanced computer science courses focused on programming languages and algorithm design methods"
    ],correct:1,explanation:"Digital citizenship education is most effective when integrated with social-emotional learning (SEL) — developing empathy, self-regulation, and relationship skills that transfer to online contexts.",reference:"Jones, L. M., & Mitchell, K. J. (2016).",tags:["digital-citizenship","SEL"]},

  {id:"ca_169",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Restorative justice conferences adapted for cyber-aggression cases face which unique challenge compared to offline cases?",
    options:[
      "The impossibility of bringing perpetrators and victims together because digital communication prevents this",
      "The potential permanence and viral spread of digital content makes 'repairing harm' more complex",
      "Restorative justice principles are fundamentally incompatible with any technology-mediated harm scenario",
      "Courts have universally prohibited the use of restorative justice for any case involving digital evidence"
    ],correct:1,explanation:"Digital permanence and viral spread mean that even after accountability is achieved, harmful content may persist online — making the 'repair' aspect more complex than in offline restorative justice.",reference:"Gavrielides, T. (2015).",tags:["restorative-justice","digital-permanence"]},

  {id:"ca_170",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which secondary traumatisation risk is specifically associated with content moderation work?",
    options:[
      "Excessive boredom from reviewing exclusively positive and wholesome user-generated content all day",
      "Vicarious trauma, compassion fatigue, and PTSD symptoms from repeated exposure to harmful content",
      "Physical injuries sustained from typing too quickly during high-volume content review work shifts",
      "Increased empathy and psychological resilience that strengthens moderators' overall mental wellbeing"
    ],correct:1,explanation:"Content moderators face significant risks of vicarious trauma, compassion fatigue, and PTSD from repeated exposure to graphic violence, child sexual abuse material, and other harmful content.",reference:"Steiger, M., et al. (2021).",tags:["content-moderation","moderator-wellbeing"]},

  {id:"ca_171",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Intersectional approaches to studying cyber-aggression examine how multiple social identities interact to shape individuals' experiences of victimisation.",
    options:["True","False"],correct:0,explanation:"Intersectional approaches examine how identities (race, gender, sexuality, disability, class) interact to create distinct experiences of victimisation that cannot be understood through any single identity category alone.",reference:"Crenshaw, K. (1989).",tags:["intersectionality","methodology"]},

  {id:"ca_172",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on disability-based cyber-aggression finds that ableist harassment most commonly takes which form?",
    options:[
      "Unsolicited medical advice and miracle cure recommendations shared with genuine helpful intentions",
      "Mockery of impairments, questioning the legitimacy of conditions, and exclusion from online communities",
      "Excessive accommodation and support that overwhelms disabled users with unwanted positive attention",
      "Targeted recruitment of individuals with disabilities into specialised cybersecurity career programmes"
    ],correct:1,explanation:"Ableist cyber-aggression commonly includes mockery of impairments, questioning whether conditions are 'real,' inspiration pornography, and active exclusion from online communities and gaming groups.",reference:"Shew, A. (2020).",tags:["disability","ableism"]},

  {id:"ca_173",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'minority stress model' explains elevated cyber-aggression experiences among LGBTQ+ individuals through which mechanism?",
    options:[
      "The innate psychological resilience of LGBTQ+ individuals that protects them from all online harms",
      "Chronic exposure to prejudice, discrimination, and stigma that creates additional psychological burden",
      "The complete absence of supportive online communities for LGBTQ+ individuals across all platforms",
      "Genetic factors that predispose LGBTQ+ individuals to higher rates of internet use and screen time"
    ],correct:1,explanation:"The minority stress model (Meyer, 2003) explains that LGBTQ+ individuals experience additional psychological burden from chronic exposure to prejudice, discrimination, and stigma — amplified online.",reference:"Meyer, I. H. (2003).",tags:["LGBTQ","minority-stress"]},

  {id:"ca_174",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Coordinated inauthentic behaviour (CIB) in political cyber-aggression refers to which specific activity?",
    options:[
      "Genuine political campaigning by verified candidates using their official authenticated social media accounts",
      "Networks of fake or compromised accounts working together to artificially manipulate public discourse",
      "Individual citizens expressing sincere political opinions through personal blog posts and social updates",
      "Professional journalists conducting investigative reporting on political corruption and policy failures"
    ],correct:1,explanation:"CIB — a term used by Meta — describes networks of fake or compromised accounts operating in coordination to manipulate public discourse, suppress opposition, or amplify propaganda.",reference:"Gleicher, N. (2018).",tags:["political","CIB"]},

  {id:"ca_175",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Health-related misinformation campaigns targeting specific communities can cause direct physical harm and therefore constitute a form of cyber-aggression.",
    options:["True","False"],correct:0,explanation:"Health misinformation deliberately targeting communities (e.g., anti-vaccine campaigns aimed at minority groups) can cause direct physical harm through reduced health-protective behaviours, constituting aggressive harm.",reference:"Wardle, C. (2019).",tags:["misinformation","health"]},

  {id:"ca_176",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The term 'liar's dividend' in the context of deepfake technology refers to which concerning consequence?",
    options:[
      "Financial profits earned by developers who create and sell deepfake generation software to consumers",
      "The ability for public figures to dismiss authentic damaging evidence as potentially deepfake-generated",
      "Tax incentives offered by governments to companies that develop deepfake detection technologies",
      "Insurance payouts received by victims of deepfake abuse to compensate for reputational damage suffered"
    ],correct:1,explanation:"The 'liar's dividend' describes how deepfake technology enables anyone to dismiss genuine damaging evidence (video, audio) as potentially fabricated — undermining trust in authentic evidence.",reference:"Chesney, R., & Citron, D. K. (2019).",tags:["deepfake","liars-dividend"]},

  {id:"ca_177",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"In competitive gaming, 'toxic chat' most commonly functions to achieve which interpersonal goal?",
    options:[
      "Building collaborative team spirit and encouraging positive communication between all team members",
      "Intimidating opponents, asserting dominance, and undermining rivals' concentration and performance",
      "Providing constructive technical feedback to help less experienced players improve their game skills",
      "Establishing formal dispute resolution mechanisms between players who disagree about game strategy"
    ],correct:1,explanation:"Toxic chat in competitive gaming primarily functions to intimidate opponents, assert dominance hierarchies, and disrupt concentration — serving as a strategic tool alongside genuine hostility.",reference:"Kwak, H., et al. (2015).",tags:["gaming","toxic-chat"]},

  {id:"ca_178",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Female streamers on platforms like Twitch experience gendered harassment including sexualised comments, appearance-based abuse, and threats of sexual violence at higher rates than male streamers.",
    options:["True","False"],correct:0,explanation:"Research consistently shows that female streamers experience disproportionately high rates of gendered harassment including sexualised comments, appearance-based abuse, unsolicited sexual content, and threats.",reference:"Uttarapong, J., et al. (2021).",tags:["streaming","gendered-harassment"]},

  {id:"ca_179",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'cancel culture' debate relates to cyber-aggression research through which conceptual tension?",
    options:[
      "The distinction between legitimate accountability movements and disproportionate mass harassment campaigns",
      "The development of new programming languages specifically designed for social media platform development",
      "The history of print newspaper editorial practices and their evolution in the age of digital publishing",
      "The regulation of financial markets and cryptocurrency exchanges by government oversight bodies"
    ],correct:0,explanation:"The 'cancel culture' debate intersects with cyber-aggression research through the tension between legitimate accountability (calling out harmful behaviour) and disproportionate pile-on harassment.",reference:"Clark, M. D. (2020).",tags:["pile-on","cancel-culture"]},

  {id:"ca_180",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Cross-cultural research identifies which cultural dimension as most relevant to variations in cyberbullying coping strategies?",
    options:[
      "The individualism-collectivism dimension, which shapes whether victims seek personal or communal support",
      "The altitude above sea level of a country's capital city, which influences atmospheric oxygen availability",
      "The average daily temperature of a region, which affects mood and therefore coping strategy preferences",
      "The dominant architectural style of a country, which reflects underlying values about personal boundaries"
    ],correct:0,explanation:"The individualism-collectivism dimension shapes coping — individualist cultures emphasise personal coping and self-advocacy, while collectivist cultures prioritise group-based support and saving face.",reference:"Barlett, C. P., et al. (2014).",tags:["cross-cultural","coping"]},

  {id:"ca_181",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Australia's eSafety Commissioner model is distinctive in global legal frameworks because it:",
    options:[
      "Relies exclusively on criminal prosecution without any civil remedies or platform compliance mechanisms",
      "Combines complaints-based content removal powers with proactive industry regulation and education roles",
      "Only addresses cyberbullying affecting children under ten and excludes all other forms of online harm",
      "Operates entirely through automated AI systems without any human oversight or decision-making input"
    ],correct:1,explanation:"Australia's eSafety Commissioner uniquely combines a complaints-based takedown scheme for harmful content with proactive industry regulation, safety-by-design frameworks, and public education programmes.",reference:"eSafety Commissioner, Australian Government.",tags:["legal","Australia"]},

  {id:"ca_182",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Online peer support groups for cyber-aggression victims have been shown to reduce feelings of isolation and improve psychological wellbeing.",
    options:["True","False"],correct:0,explanation:"Research supports the effectiveness of online peer support groups in reducing isolation, validating experiences, sharing coping strategies, and improving psychological wellbeing for cyber-aggression victims.",reference:"Machackova, H., et al. (2015).",tags:["victim-support","peer-support"]},

  {id:"ca_183",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Perpetrator intervention programmes are most limited by which challenge in the cyber-aggression context?",
    options:[
      "The abundance of willing participants who actively seek out treatment for their aggressive online behaviour",
      "Difficulty identifying and engaging perpetrators who may be anonymous, pseudonymous, or geographically distant",
      "The excessive effectiveness of existing programmes that leaves no room for improvement or refinement",
      "The complete lack of any theoretical framework for understanding the motivations of online aggressors"
    ],correct:1,explanation:"The primary challenge for perpetrator programmes is identification and engagement — anonymity, pseudonymity, and geographic distribution make it difficult to reach and engage perpetrators in intervention.",reference:"Cross, D., et al. (2015).",tags:["perpetrator","challenges"]},

  {id:"ca_184",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'polyvagal theory' has been applied to cyber-aggression research to explain which phenomenon?",
    options:[
      "How fibre optic internet cables transmit data more quickly than traditional copper telephone wires",
      "How the autonomic nervous system's threat detection influences emotional responding to online aggression",
      "How search engine algorithms rank web pages based on link popularity and keyword relevance factors",
      "How advertising revenue models determine which content platforms choose to promote to their audiences"
    ],correct:1,explanation:"Polyvagal theory (Porges, 2011) explains how the autonomic nervous system's neuroception of threat influences physiological and emotional responses to perceived online aggression — even without physical presence.",reference:"Porges, S. W. (2011).",tags:["neurobiology","polyvagal"]},

  {id:"ca_185",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research links executive function deficits to both cyber-aggression perpetration and victimisation because individuals with these deficits:",
    options:[
      "Exclusively seek out online environments specifically designed for aggressive interpersonal interaction",
      "Struggle with impulse control, social problem-solving, and recognising risky online situations effectively",
      "Have superior technological skills that make them more effective at both attacking and defending online",
      "Are unable to access digital devices due to cognitive limitations that prevent basic computer operation"
    ],correct:1,explanation:"Executive function deficits impair impulse control (increasing perpetration risk) and social problem-solving and risk recognition (increasing victimisation risk) — creating dual vulnerability.",reference:"Runions, K. C. (2013).",tags:["executive-function","dual-risk"]},

  {id:"ca_186",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Avoidant attachment styles are more strongly associated with cyber dating abuse perpetration than anxious attachment styles.",
    options:["True","False"],correct:1,explanation:"Anxious attachment (not avoidant) is more strongly associated with cyber dating abuse perpetration due to heightened jealousy, abandonment fears, and surveillance-driven behaviours in relationships.",reference:"Morelli, M., et al. (2018).",tags:["attachment","avoidant"]},

  {id:"ca_187",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Self-categorisation theory extends Social Identity Theory to explain online aggression by emphasising which process?",
    options:[
      "The static and unchangeable nature of personal identity across all social contexts and environments",
      "The fluid shift between personal and social identity that occurs depending on contextual salience cues",
      "The irrelevance of group membership to any form of individual decision-making or behavioural choice",
      "The exclusive role of biological instincts in determining all aggressive behaviour in human populations"
    ],correct:1,explanation:"Self-categorisation theory (Turner, 1987) emphasises how people shift between personal and social identity based on context — online environments can make group identity salient, driving intergroup aggression.",reference:"Turner, J. C. (1987).",tags:["social-identity","self-categorisation"]},

  {id:"ca_188",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'third-person effect' contributes to moral panic about technology-related harms because people tend to believe that:",
    options:[
      "They themselves are just as vulnerable to media effects as everyone else in the general population",
      "Media and technology negatively affect others much more than themselves, justifying restrictive measures",
      "No one is affected by media content because all audiences are equally media literate and resilient",
      "They are more vulnerable than others and therefore need personal protection from harmful content"
    ],correct:1,explanation:"The third-person effect (Davison, 1983) describes the tendency to believe others are more affected by media than oneself — fuelling support for restrictive measures and moral panic about technology.",reference:"Davison, W. P. (1983).",tags:["moral-panic","third-person-effect"]},

  {id:"ca_189",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which component of media literacy is most critical for helping young people resist online hate speech recruitment?",
    options:[
      "The ability to design professional-quality websites using HTML, CSS, and JavaScript programming tools",
      "Critical analysis of source credibility, persuasive techniques, and ideological framing in online content",
      "Speed-reading techniques that allow users to process large volumes of text content more efficiently",
      "Advanced data analytics skills for processing large datasets of social media engagement metrics"
    ],correct:1,explanation:"Critical analysis of source credibility, persuasive techniques (e.g., emotional manipulation, cherry-picking), and ideological framing is the most protective media literacy skill against radicalisation.",reference:"Hobbs, R. (2010).",tags:["media-literacy","radicalisation-prevention"]},

  {id:"ca_190",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Automated reporting systems on social media platforms can sometimes be weaponised by aggressors to mass-report and silence their targets.",
    options:["True","False"],correct:0,explanation:"Report abuse (mass-reporting) is a documented form of cyber-aggression where coordinated groups file false reports against targets, triggering automated account suspensions and content removal.",reference:"Marwick, A. E. (2021).",tags:["reporting","weaponisation"]},

  {id:"ca_191",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The UK Online Safety Act (2023) introduced which novel regulatory mechanism for addressing cyber-aggression?",
    options:[
      "A 'duty of care' framework requiring platforms to conduct risk assessments and protect users from harm",
      "A complete ban on all social media platforms operating within the United Kingdom's jurisdiction",
      "Mandatory government pre-approval for every individual social media post before publication is allowed",
      "A financial reward system that pays users for each piece of harmful content they successfully identify"
    ],correct:0,explanation:"The UK Online Safety Act introduced a 'duty of care' framework, requiring platforms to assess risks, implement safety measures, and protect users — particularly children — from harmful content.",reference:"UK Online Safety Act (2023).",tags:["legal","UK"]},

  {id:"ca_192",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on victim support for image-based sexual abuse identifies which service as most critical in the immediate aftermath?",
    options:[
      "Career counselling and professional development planning for long-term employment advancement goals",
      "Rapid content removal assistance combined with emotional support and legal information provision",
      "Physical fitness programmes designed to improve self-esteem through exercise and nutrition changes",
      "Academic tutoring services to help victims maintain educational performance during their recovery"
    ],correct:1,explanation:"Immediate priorities for IBSA victim support include rapid takedown assistance (removing images), emotional support, legal information about reporting options, and evidence preservation guidance.",reference:"McGlynn, C., et al. (2019).",tags:["IBSA","victim-support"]},

  {id:"ca_193",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'networked harassment' describes a phenomenon where cyber-aggression is amplified through:",
    options:[
      "A single individual sending one offensive message to one recipient through a private channel only",
      "Distributed networks of loosely connected actors who collectively overwhelm targets through mass action",
      "Face-to-face bullying that occurs exclusively within physical school environments without any technology",
      "Automated software updates that occasionally cause minor technical disruptions to user social media feeds"
    ],correct:1,explanation:"Networked harassment (Marwick, 2021) describes how loosely connected actors across platforms collectively target individuals through mass coordinated action — each act may seem minor but the aggregate is overwhelming.",reference:"Marwick, A. E. (2021).",tags:["networked-harassment","pile-on"]},

  {id:"ca_194",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"In competitive online gaming, voice chat toxicity disproportionately targets female players with gendered harassment.",
    options:["True","False"],correct:0,explanation:"Research consistently shows that female gamers experience disproportionate voice chat harassment including sexualised comments, gatekeeping, and challenges to their competence based on gender.",reference:"Fox, J., & Tang, W. Y. (2014).",tags:["gaming","gender"]},

  {id:"ca_195",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'Christchurch Call to Action' following the 2019 mosque attacks primarily addressed which aspect of online harm?",
    options:[
      "The regulation of online gambling and loot box mechanics in mobile gaming applications for minors",
      "The live-streaming of terrorist attacks and the rapid spread of violent extremist content on platforms",
      "The standardisation of emoji designs across different operating systems and device manufacturers",
      "The establishment of international broadband speed standards for rural internet service providers"
    ],correct:1,explanation:"The Christchurch Call addressed the live-streaming and viral spread of the 2019 mosque attack footage, bringing governments and tech companies together to prevent exploitation of platforms by terrorists.",reference:"Christchurch Call to Action (2019).",tags:["radicalisation","platform-response"]},

  {id:"ca_196",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Commercial content moderation operations face the ethical challenge known as the 'moderation paradox,' which states that:",
    options:[
      "Effective moderation requires moderators to be exposed to the very harms they are employed to prevent",
      "Content moderation is unnecessary because all users naturally self-regulate their online behaviour",
      "Automated moderation systems are always superior to human moderators in every measurable performance metric",
      "Content moderation can only be performed by volunteers because paid moderators lack sufficient motivation"
    ],correct:0,explanation:"The moderation paradox describes how effective content moderation requires human moderators to be repeatedly exposed to graphic, harmful content — the very material they are tasked with protecting others from.",reference:"Roberts, S. T. (2019).",tags:["content-moderation","ethics"]},

  {id:"ca_197",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on digital citizenship curricula identifies which implementation barrier as most significant in schools?",
    options:[
      "Student resistance to learning about any topic related to technology use and online communication",
      "Insufficient teacher training, rapidly evolving technology, and lack of age-appropriate curriculum materials",
      "Excessive government funding that overwhelms schools with too many resources and support staff members",
      "The complete absence of any published research on effective approaches to digital citizenship education"
    ],correct:1,explanation:"Key barriers include insufficient teacher training and confidence, technology that evolves faster than curricula, lack of age-appropriate materials, and competing demands on limited curriculum time.",reference:"Ribble, M., & Park, M. (2019).",tags:["digital-citizenship","implementation"]},

  {id:"ca_198",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Restorative justice approaches to cyber-aggression only focus on punishing the perpetrator and do not involve the victim in the resolution process.",
    options:["True","False"],correct:1,explanation:"Restorative justice explicitly centres victim needs, involves all affected parties, focuses on repairing harm rather than punishment, and gives victims an active voice in the resolution process.",reference:"Zehr, H. (2002).",tags:["restorative-justice","principles"]},

  {id:"ca_199",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on the neurobiological effects of cyberbullying victimisation has identified elevated levels of which stress-related biomarker?",
    options:[
      "Melatonin, the hormone primarily responsible for regulating circadian sleep-wake cycles in the brain",
      "Cortisol, the primary stress hormone associated with chronic stress and threat-related physiological arousal",
      "Haemoglobin, the protein in red blood cells responsible for transporting oxygen throughout the body",
      "Insulin, the hormone produced by the pancreas to regulate blood sugar levels following food consumption"
    ],correct:1,explanation:"Cyberbullying victimisation is associated with elevated cortisol levels, reflecting chronic stress activation of the hypothalamic-pituitary-adrenal (HPA) axis and sustained physiological threat responses.",reference:"Vaillancourt, T., et al. (2017).",tags:["neurobiology","cortisol"]},

  {id:"ca_200",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'dual systems model' of adolescent brain development explains increased vulnerability to cyber-aggression involvement because:",
    options:[
      "Both brain systems develop at identical rates, providing balanced decision-making capacity throughout adolescence",
      "The socio-emotional system matures faster than the cognitive control system, creating a developmental mismatch",
      "The cognitive control system is fully mature by age ten while the socio-emotional system never fully develops",
      "Adolescents have identical brain architecture to adults and therefore process online risks in the same way"
    ],correct:1,explanation:"The dual systems model (Steinberg, 2008) explains that the socio-emotional system (reward sensitivity, peer influence) matures before the cognitive control system (impulse regulation), creating a vulnerability window.",reference:"Steinberg, L. (2008).",tags:["neurobiology","adolescent-brain"]},

  {id:"ca_201",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which specific form of gaming toxicity involves revealing story spoilers or game outcomes deliberately to ruin other players' experiences?",
    options:[
      "Spoiler griefing, where players deliberately reveal plot details or outcomes to diminish others' enjoyment",
      "Lag-switching, where players manipulate their internet connection to gain unfair competitive advantages",
      "Modding, where players modify game files to add custom content, skins, or gameplay mechanic alterations",
      "Speedrunning, where players attempt to complete game objectives in the shortest possible elapsed time"
    ],correct:0,explanation:"Spoiler griefing is a recognised form of gaming toxicity where players deliberately reveal plot developments, endings, or surprise elements to diminish the enjoyment of other players.",reference:"Consalvo, M. (2007).",tags:["gaming","spoiler-griefing"]},

  {id:"ca_202",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Hate speech targeting religious groups online has been linked to increased offline hate crimes against those same communities.",
    options:["True","False"],correct:0,explanation:"Research demonstrates correlations between spikes in online hate speech targeting religious and ethnic groups and subsequent increases in offline hate crimes against those same communities.",reference:"Muller, K., & Schwarz, C. (2020).",tags:["hate-speech","offline-harms"]},

  {id:"ca_203",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'platform affordances' is important to cyber-aggression research because it explains how:",
    options:[
      "Users always behave identically regardless of which digital platform or communication tool they are using",
      "Specific design features of platforms enable, constrain, and shape the forms that aggression takes online",
      "All platforms have identical features and therefore produce identical patterns of user aggressive behaviour",
      "Platform design has no influence on user behaviour because all online behaviour is purely personality-driven"
    ],correct:1,explanation:"Platform affordances — specific design features like anonymity options, ephemeral content, audience size, and interaction mechanisms — actively shape how aggression manifests on different platforms.",reference:"Evans, S. K., et al. (2017).",tags:["affordances","platform-design"]},

  {id:"ca_204",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"Germany's NetzDG (Network Enforcement Act) requires social media platforms with over two million users to:",
    options:[
      "Remove manifestly unlawful content within 24 hours of receiving a complaint or face significant fines",
      "Provide free German language lessons to all non-German-speaking users who register for platform accounts",
      "Publish the real names and home addresses of all users who post any content on their platform pages",
      "Donate a percentage of advertising revenue to fund public libraries and community learning centres"
    ],correct:0,explanation:"NetzDG (2017) requires platforms to remove 'manifestly unlawful' hate speech and other illegal content within 24 hours of complaints, with fines up to 50 million euros for systematic non-compliance.",reference:"NetzDG (2017).",tags:["legal","Germany"]},

  {id:"ca_205",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on perpetrator typologies in cyber-aggression identifies 'reactive aggressors' as distinct from 'proactive aggressors' because reactive aggressors:",
    options:[
      "Carefully plan and calculate their aggressive actions in advance to maximise the harm inflicted on targets",
      "Act impulsively in response to perceived provocation, frustration, or threat without premeditated planning",
      "Never engage in any form of aggressive behaviour and exclusively demonstrate prosocial online conduct",
      "Only aggress when they are certain there will be no consequences, calculating cost-benefit ratios first"
    ],correct:1,explanation:"Reactive aggressors respond impulsively to perceived provocation or threat (hostile attribution bias), while proactive aggressors plan instrumental aggression to achieve specific goals.",reference:"Dodge, K. A., & Coie, J. D. (1987).",tags:["perpetrator","typology"]},

  {id:"ca_206",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The neurobiological 'fight-or-flight' response can be activated by threatening text messages and hostile online interactions, not only by physical threats.",
    options:["True","False"],correct:0,explanation:"The sympathetic nervous system's fight-or-flight response can be activated by perceived threats in digital environments — hostile messages, cyberstalking, and online threats trigger genuine physiological stress responses.",reference:"Kowalski, R. M., et al. (2014).",tags:["neurobiology","stress-response"]},

  {id:"ca_207",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Hostile attribution bias in the context of cyber-aggression refers to the tendency to:",
    options:[
      "Always assume the best intentions of others and interpret ambiguous messages as friendly and supportive",
      "Interpret ambiguous online communications as deliberately hostile, increasing the likelihood of retaliation",
      "Carefully analyse the full context of a message before forming any judgement about the sender's intentions",
      "Avoid all online communication due to a generalised fear that every interaction will be negative"
    ],correct:1,explanation:"Hostile attribution bias — interpreting ambiguous social cues as intentionally hostile — is amplified online where communication lacks non-verbal cues, increasing perceived provocation and retaliatory aggression.",reference:"Crick, N. R., & Dodge, K. A. (1994).",tags:["hostile-attribution","cognition"]},

  {id:"ca_208",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'amplification effect' of social media on cyber-aggression refers to the way platforms:",
    options:[
      "Reduce the reach and impact of aggressive content by limiting its visibility through algorithmic filtering",
      "Increase the speed, reach, and impact of aggressive acts through sharing, virality, and network effects",
      "Have no measurable effect on the spread of aggressive content compared to traditional media channels",
      "Only amplify positive prosocial content while automatically suppressing all forms of aggressive material"
    ],correct:1,explanation:"Social media platforms amplify cyber-aggression through rapid sharing, algorithmic recommendation, network effects, and the potential for content to go viral — magnifying harm beyond the original act.",reference:"Veletsianos, G., et al. (2018).",tags:["amplification","social-media"]},

  {id:"ca_209",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The South Korean 'Sulli Act' (2021) was introduced in response to celebrity cyber-aggression and requires:",
    options:[
      "Mandatory real-name verification for online commenting to reduce anonymous aggressive behaviour online",
      "A complete ban on all social media platforms within South Korean territorial internet jurisdiction",
      "Government censorship of all entertainment media content before broadcast or online publication occurs",
      "The installation of happiness-promoting software on all mobile devices sold within the country"
    ],correct:0,explanation:"The Sulli Act, named after K-pop star Sulli who died by suicide after severe cyberbullying, requires real-name verification for online commenting on Korean portals to combat anonymous aggression.",reference:"Korea Communications Commission (2021).",tags:["legal","South-Korea"]},

  {id:"ca_210",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Bystander intervention training programmes have shown promise in encouraging witnesses to cyber-aggression to take supportive action.",
    options:["True","False"],correct:0,explanation:"Research shows bystander intervention programmes can increase the likelihood that witnesses to cyber-aggression will support victims, report incidents, and challenge perpetrators constructively.",reference:"Bastiaensens, S., et al. (2014).",tags:["bystander","intervention"]},

  {id:"ca_211",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which factor most strongly differentiates 'cyber-aggression' from 'online incivility' in the research literature?",
    options:[
      "Online incivility refers to rude or disrespectful behaviour, while cyber-aggression involves intended harm",
      "Cyber-aggression only occurs in gaming contexts while online incivility is exclusive to political forums",
      "Online incivility is always illegal while cyber-aggression falls entirely within the bounds of lawful conduct",
      "There is no meaningful distinction between the two terms as they are used completely interchangeably"
    ],correct:0,explanation:"The key distinction is intent and severity: online incivility involves norm violations (rudeness, discourtesy) while cyber-aggression involves intentional harm-doing directed at a target.",reference:"Coe, K., et al. (2014).",tags:["definition","incivility"]},

  {id:"ca_212",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'context collapse' contributes to cyber-aggression victimisation because it means that:",
    options:[
      "Users can precisely control exactly who sees each piece of content they share on social media platforms",
      "Diverse audiences merge into a single context, making information shared for one audience visible to many",
      "Social media platforms always separate content into clearly defined audience segments with no overlap",
      "Users' online and offline identities are always perfectly separated with no possibility of intersection"
    ],correct:1,explanation:"Context collapse (Marwick & boyd, 2011) occurs when diverse social audiences merge into one on social media — content intended for friends may be seen by employers, family, or hostile strangers.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["context-collapse","vulnerability"]},

  {id:"ca_213",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyberstalking laws exist in fewer than ten countries worldwide.",
    options:["True","False"],correct:1,explanation:"Cyberstalking is addressed in legislation across numerous countries worldwide, including the US, UK, Australia, Canada, and many EU member states, though the specific provisions and definitions vary significantly.",reference:"Bocij, P. (2004).",tags:["legal","cyberstalking"]},

  {id:"ca_214",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'sealioning' as a form of cyber-aggression describes which specific behaviour pattern?",
    options:[
      "Persistently demanding evidence and explanations in bad faith to exhaust and frustrate a target person",
      "Sharing photographs of marine wildlife to raise awareness about ocean conservation and climate change",
      "Providing genuinely helpful technical support to inexperienced users on technology discussion forums",
      "Creating elaborate artistic digital illustrations that celebrate aquatic animals and ocean ecosystems"
    ],correct:0,explanation:"Sealioning involves persistently and politely requesting evidence, explanations, or debate in bad faith — designed to exhaust the target while maintaining a veneer of civility and reasonable discourse.",reference:"Poland, B. (2016).",tags:["sealioning","harassment-tactics"]},

  {id:"ca_215",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'manosphere' is studied in cyber-aggression research as a network of online communities characterised by:",
    options:[
      "Supportive men's mental health discussions focused on emotional wellbeing and mutual peer assistance",
      "Misogynistic ideologies, anti-feminist rhetoric, and sometimes incitement to gendered violence and abuse",
      "Professional networking groups for men in STEM careers seeking collaborative project opportunities",
      "Academic research forums dedicated to the interdisciplinary study of masculinity across global cultures"
    ],correct:1,explanation:"The 'manosphere' encompasses online communities (incels, men's rights activists, pickup artists, MGTOW) characterised by misogynistic ideology, anti-feminism, and sometimes incitement to gendered violence.",reference:"Ging, D. (2019).",tags:["manosphere","gendered-aggression"]},

  {id:"ca_216",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"'Brigading' as a form of collective cyber-aggression involves which coordinated behaviour?",
    options:[
      "Individual users independently deciding to unfollow an account that no longer posts interesting content",
      "Organised groups deliberately flooding a target's content with negative votes, reports, or hostile comments",
      "Community volunteers coordinating to moderate forums and maintain civil discourse standards effectively",
      "Marketing teams scheduling social media posts across multiple platforms for consistent brand messaging"
    ],correct:1,explanation:"Brigading involves coordinated group action to mass-downvote, mass-report, or flood a target with hostile comments — overwhelming individual users or small communities through collective force.",reference:"Flores-Saviaga, C., et al. (2018).",tags:["brigading","collective-aggression"]},

  {id:"ca_217",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The 'right to be forgotten' in European law allows individuals to request that search engines remove links to outdated or irrelevant personal information.",
    options:["True","False"],correct:0,explanation:"The right to be forgotten (CJEU, Google Spain, 2014; GDPR Article 17) allows EU individuals to request removal of links to personal information that is inadequate, irrelevant, or no longer relevant from search results.",reference:"CJEU, Google Spain v AEPD (2014); GDPR Art. 17.",tags:["legal","right-to-be-forgotten"]},

  {id:"ca_218",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The phenomenon of 'doxxing retaliation cycles' in online conflicts describes which escalatory pattern?",
    options:[
      "One party doxxes another, who retaliates by doxxing back, creating an escalating cycle of exposure",
      "Both parties agree to share their personal information voluntarily as a gesture of trust and openness",
      "Platform moderators systematically doxx users who violate community guidelines as a standard penalty",
      "Researchers publish participant data from studies on doxxing without proper anonymisation procedures"
    ],correct:0,explanation:"Doxxing retaliation cycles occur when the initial act of doxxing provokes retaliatory doxxing, creating escalating cycles of personal information exposure that expand to involve broader networks.",reference:"Douglas, D. M. (2016).",tags:["doxing","escalation"]},

  {id:"ca_219",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'splinternet' concept is relevant to cyber-aggression governance because it describes:",
    options:[
      "A single unified global internet governed by one set of universally agreed international regulations",
      "The fragmentation of the internet into nationally controlled segments with different regulatory standards",
      "A brand name for a new high-speed internet service provider operating exclusively in rural communities",
      "An open-source software tool designed to automatically detect and remove all harmful content globally"
    ],correct:1,explanation:"The 'splinternet' describes internet fragmentation into nationally controlled segments (e.g., China's Great Firewall) — creating inconsistent cyber-aggression governance and cross-jurisdictional enforcement challenges.",reference:"Drake, W. J., et al. (2016).",tags:["governance","splinternet"]},

  {id:"ca_220",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'techno-stress' in workplace cyberbullying contexts identifies which unique stressor?",
    options:[
      "The relaxing effect of using digital technology that reduces workplace stress and improves job satisfaction",
      "The blurring of work-life boundaries through constant connectivity that extends harassment beyond work hours",
      "The complete separation of professional and personal digital identities that protects all employees online",
      "The universal availability of comprehensive employer-provided mental health support for all digital workers"
    ],correct:1,explanation:"Techno-stress in workplace cyberbullying is compounded by the blurring of work-life boundaries — constant connectivity through work email and messaging extends harassment into personal time and space.",reference:"Ayyagari, R., et al. (2011).",tags:["workplace","techno-stress"]},

  {id:"ca_221",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Image-based sexual abuse affects only women and has never been documented as targeting men or non-binary individuals.",
    options:["True","False"],correct:1,explanation:"While women are disproportionately affected, IBSA also targets men and non-binary individuals — research documents male victimisation and unique vulnerabilities faced by gender-diverse individuals.",reference:"Henry, N., et al. (2020).",tags:["IBSA","gender-diversity"]},

  {id:"ca_222",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'online harms' regulatory framework differs from a 'free speech' approach because it prioritises:",
    options:[
      "Absolute protection of all speech regardless of content, context, or consequences for targeted individuals",
      "Balancing expressive freedoms against the documented harms that certain types of content cause to users",
      "Complete government censorship of all user-generated content before it appears on any digital platform",
      "Eliminating all anonymity online so that every statement can be traced to a verified legal identity"
    ],correct:1,explanation:"Online harms frameworks (e.g., UK model) prioritise balancing free expression against empirically documented harms, imposing duties of care on platforms — contrasting with absolutist free speech approaches.",reference:"UK Online Harms White Paper (2019).",tags:["governance","online-harms"]},

  {id:"ca_223",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'cyber-aggression by proxy' describes which specific pattern of harmful behaviour?",
    options:[
      "Using third parties, automated tools, or social engineering to carry out aggression indirectly against targets",
      "Experiencing aggression vicariously by witnessing someone else being harassed in an online public forum",
      "Developing empathic distress from reading academic articles that describe cases of severe cyberbullying",
      "Accidentally sending a private message to the wrong recipient due to an autocomplete software error"
    ],correct:0,explanation:"Cyber-aggression by proxy involves manipulating others, using automated tools (bots), or social engineering to carry out harassment indirectly — making attribution and accountability more difficult.",reference:"Pyżalski, J. (2012).",tags:["proxy-aggression","tactics"]},

  {id:"ca_224",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'algorithmic amplification of hate' argues that recommendation systems contribute to cyber-aggression by:",
    options:[
      "Deliberately suppressing all controversial content to create a sanitised and conflict-free user experience",
      "Promoting engagement-maximising content that often includes outrage, conflict, and divisive hate material",
      "Randomly distributing content to users without any consideration of relevance, preference, or engagement",
      "Exclusively recommending educational and prosocial content that promotes tolerance and mutual understanding"
    ],correct:1,explanation:"Recommendation algorithms optimised for engagement disproportionately promote outrage-inducing, divisive, and hateful content because it generates more clicks, comments, and shares — amplifying hate.",reference:"Ribeiro, M. H., et al. (2020).",tags:["algorithm","amplification"]},

  {id:"ca_225",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Content moderation workers are typically offered comprehensive mental health support by their employers in all cases.",
    options:["True","False"],correct:1,explanation:"Many content moderation workers, particularly those employed through outsourcing firms in developing countries, report inadequate mental health support despite regular exposure to traumatic content.",reference:"Roberts, S. T. (2019).",tags:["content-moderation","worker-welfare"]},

  {id:"ca_226",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'empathy gap' in online communication refers to the difficulty of:",
    options:[
      "Experiencing and conveying genuine emotional understanding when physical and vocal cues are absent online",
      "Feeling excessive empathy during online interactions that overwhelms users and prevents them from typing",
      "Understanding the technical specifications of different web browsers and internet service providers",
      "Maintaining consistent internet connectivity speed during peak usage hours in densely populated areas"
    ],correct:0,explanation:"The empathy gap in online communication describes the difficulty of both experiencing and conveying empathy without physical and vocal cues — reducing natural empathic brakes on aggressive impulses.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["empathy-gap","communication"]},

  {id:"ca_227",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"India's Information Technology (Intermediary Guidelines) Rules 2021 controversially require platforms to:",
    options:[
      "Enable traceability of message originators on encrypted platforms, raising privacy and safety concerns",
      "Provide free unlimited internet access to all citizens regardless of their geographical location",
      "Translate all content into all 22 scheduled languages of India before publication is permitted",
      "Employ only Indian nationals as content moderators and ban all overseas moderation operations"
    ],correct:0,explanation:"India's 2021 IT Rules controversially require platforms to enable traceability of message originators, raising concerns about undermining end-to-end encryption and chilling effects on free expression.",reference:"India IT (Intermediary Guidelines) Rules (2021).",tags:["legal","India"]},

  {id:"ca_228",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on the 'bystander effect' in online contexts finds that compared to offline settings:",
    options:[
      "The bystander effect is completely absent online because digital tools make intervention effortless",
      "The bystander effect is often amplified online due to diffusion of responsibility across large audiences",
      "All online bystanders always intervene immediately because digital communication removes all barriers",
      "The bystander effect only applies to offline settings and has no relevance to digital interactions"
    ],correct:1,explanation:"The bystander effect can be amplified online — large visible audiences increase diffusion of responsibility, and the reduced social presence of victims weakens empathic motivation to intervene.",reference:"Machackova, H., et al. (2015).",tags:["bystander","diffusion-of-responsibility"]},

  {id:"ca_229",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cyberbullying prevention programmes are most effective when they address both individual risk factors and the wider school or organisational climate.",
    options:["True","False"],correct:0,explanation:"Research consistently shows that the most effective prevention programmes use a 'whole-school' or 'whole-organisation' approach, addressing individual skills alongside climate, policies, and norms.",reference:"Ttofi, M. M., & Farrington, D. P. (2011).",tags:["prevention","whole-school"]},

  {id:"ca_230",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'digital self-harm' — where individuals post harmful content about themselves online — challenges traditional cyber-aggression frameworks because:",
    options:[
      "It fits neatly within existing definitions because the perpetrator and victim are always different people",
      "The perpetrator and victim are the same person, complicating traditional aggressor-target distinctions",
      "It has never been documented in empirical research and exists only as a theoretical speculation",
      "It only occurs among adults over the age of sixty-five and never among younger populations"
    ],correct:1,explanation:"Digital self-harm — where individuals anonymously post harmful content about themselves — challenges frameworks that assume distinct perpetrator and victim roles, requiring reconceptualisation.",reference:"Patchin, J. W., & Hinduja, S. (2017).",tags:["digital-self-harm","definition"]},

  {id:"ca_231",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'safety by design' approach to platform governance emphasises:",
    options:[
      "Retrofitting safety features after harmful content has already caused widespread damage to users",
      "Embedding user safety considerations into platform design and development from the earliest stages",
      "Removing all interactive features from platforms so that users cannot communicate with each other",
      "Relying entirely on user education and individual responsibility without any platform-level protections"
    ],correct:1,explanation:"Safety by design integrates user safety into platform architecture from the outset — considering how features might be misused and building protective mechanisms into core design rather than adding them later.",reference:"eSafety Commissioner (2019).",tags:["safety-by-design","governance"]},

  {id:"ca_232",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'technoference' in relationship research describes how technology interferes with intimate relationships and may contribute to cyber dating abuse through:",
    options:[
      "Partners' complete avoidance of all technology, which eliminates any possibility of digital conflict",
      "Device-mediated interruptions that create conflict, jealousy triggers, and opportunities for surveillance",
      "The universal improvement of relationship satisfaction through better long-distance communication tools",
      "Automatic relationship counselling services that are provided by all major social media platform companies"
    ],correct:1,explanation:"Technoference — technology interference in relationships — creates conflict (phubbing), jealousy triggers (social media monitoring), and surveillance opportunities that can escalate to cyber dating abuse.",reference:"McDaniel, B. T., & Coyne, S. M. (2016).",tags:["technoference","dating-abuse"]},

  {id:"ca_233",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Hate speech on social media platforms can be effectively eliminated through automated keyword filtering alone.",
    options:["True","False"],correct:1,explanation:"Keyword filtering alone is insufficient because hate speech evolves rapidly through coded language, memes, context-dependent meaning, and deliberate misspellings designed to evade automated detection.",reference:"Vidgen, B., & Derczynski, L. (2020).",tags:["hate-speech","detection"]},

  {id:"ca_234",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'algorithmic hate speech detection' identifies which fundamental challenge as most persistent?",
    options:[
      "The complete inability of any computational system to process text-based data in any language",
      "Distinguishing between hate speech, counter-speech, reclaimed language, and academic discussion of hate",
      "The excessive accuracy of current systems that produces zero false positives in all testing scenarios",
      "The unwillingness of any researcher to study computational approaches to detecting harmful language"
    ],correct:1,explanation:"The most persistent challenge is distinguishing hate speech from counter-speech (opposing hate), reclaimed language (in-group use), and academic or journalistic discussion of hate — all using similar vocabulary.",reference:"Davidson, T., et al. (2017).",tags:["AI-moderation","challenges"]},

  {id:"ca_235",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research identifies 'upward workplace cyberbullying' — where subordinates cyberbully managers — as distinct because it:",
    options:[
      "Never occurs in practice and exists only as a theoretical concept with no empirical documentation",
      "Challenges traditional power-imbalance definitions that assume bullying only flows from powerful to powerless",
      "Is always more harmful than downward bullying because managers are psychologically weaker than employees",
      "Exclusively involves physical intimidation in office settings rather than any digital communication"
    ],correct:1,explanation:"Upward cyberbullying challenges traditional definitions requiring a power imbalance favouring the perpetrator — digital tools can enable subordinates to harass managers through anonymous channels.",reference:"Branch, S., et al. (2013).",tags:["workplace","upward-bullying"]},

  {id:"ca_236",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'chilling effect' of cyber-aggression on public discourse refers to which documented phenomenon?",
    options:[
      "The literal cooling of device temperatures caused by excessive user engagement with content platforms",
      "The self-censorship and withdrawal from public participation by individuals fearing online harassment",
      "The increase in public participation that occurs when individuals witness others being harassed online",
      "The reduction of internet bandwidth during peak periods due to high volumes of user-generated content"
    ],correct:1,explanation:"The chilling effect describes how the threat or experience of cyber-aggression leads to self-censorship and withdrawal from public discourse — disproportionately affecting women, minorities, and journalists.",reference:"Pen America (2017).",tags:["chilling-effect","free-expression"]},

  {id:"ca_237",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Deepfake detection tools are currently able to identify all synthetic media with perfect accuracy.",
    options:["True","False"],correct:1,explanation:"Deepfake detection is an ongoing arms race — detection tools improve but so does generation technology, and current detectors have significant error rates, particularly with newer generation methods.",reference:"Tolosana, R., et al. (2020).",tags:["deepfake","detection"]},

  {id:"ca_238",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"In gaming contexts, 'smurfing' can constitute a form of cyber-aggression because it involves:",
    options:[
      "Experienced players creating low-ranked accounts to dominate less skilled players, causing frustration",
      "Players choosing blue-coloured character skins as their exclusive visual customisation preference",
      "New players receiving structured mentorship from experienced community members in training matches",
      "Game developers releasing software patches that fix bugs and improve server stability for all players"
    ],correct:0,explanation:"Smurfing — experienced players creating new accounts to play against lower-skilled opponents — can constitute aggression through deliberate domination, humiliation, and disruption of fair matchmaking.",reference:"Kwak, H., et al. (2015).",tags:["gaming","smurfing"]},

  {id:"ca_239",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The role of 'echo chambers' in facilitating cyber-aggression is best explained by which process?",
    options:[
      "Exposing users to a wide diversity of perspectives that promotes tolerance, empathy, and understanding",
      "Reinforcing existing beliefs and normalising aggressive attitudes through selective exposure and confirmation",
      "Providing users with perfectly balanced information from all political and ideological perspectives equally",
      "Automatically detecting and removing all biased content before it reaches any users on the platform"
    ],correct:1,explanation:"Echo chambers facilitate cyber-aggression by reinforcing existing beliefs through selective exposure, normalising hostile attitudes toward out-groups, and creating environments where aggression appears justified.",reference:"Sunstein, C. R. (2017).",tags:["echo-chambers","polarisation"]},

  {id:"ca_240",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'Trusted Flagger' programme used by platforms like YouTube exemplifies which hybrid moderation model?",
    options:[
      "Purely automated moderation where no human judgement is involved in any content decisions whatsoever",
      "A collaboration between trained civil society organisations and platform moderation teams for prioritised review",
      "Complete reliance on untrained individual users with no oversight or quality assurance mechanisms",
      "Government agencies directly controlling all content decisions without platform involvement or input"
    ],correct:1,explanation:"Trusted Flagger programmes partner platforms with trained civil society organisations whose reports receive prioritised review — combining external expertise with platform enforcement capabilities.",reference:"YouTube Trusted Flagger programme; Gillespie, T. (2018).",tags:["moderation","trusted-flaggers"]},

  {id:"ca_241",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Research shows that witnessing cyber-aggression as a bystander can have negative psychological effects even when the witness is not directly targeted.",
    options:["True","False"],correct:0,explanation:"Bystander exposure to cyber-aggression is associated with increased anxiety, depression, fear, and reduced sense of online safety — even when the bystander is not directly targeted.",reference:"Rivers, I., et al. (2009).",tags:["bystander","psychological-effects"]},

  {id:"ca_242",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'digital coercive control' extends Stark's coercive control framework by emphasising how:",
    options:[
      "Technology eliminates all power imbalances in intimate relationships through equal information access",
      "Digital tools create new mechanisms for surveillance, isolation, and control that are difficult to escape",
      "Coercive control only exists in pre-digital relationships and has been eliminated by modern technology",
      "All digital communication between partners is inherently coercive regardless of content or context"
    ],correct:1,explanation:"Digital coercive control extends Stark's framework by showing how technology creates new surveillance mechanisms (spyware, GPS), isolation tools (account control), and control vectors that are hard to escape.",reference:"Stark, E. (2007); Harris, B. A., & Woodlock, D. (2019).",tags:["coercive-control","digital"]},

  {id:"ca_243",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which psychological theory best explains why some individuals derive pleasure from trolling and online harassment?",
    options:[
      "Self-determination theory, which argues all human behaviour is driven by autonomy, competence, and relatedness",
      "The subclinical sadism component of the 'Dark Tetrad,' where individuals enjoy inflicting suffering on others",
      "Maslow's hierarchy of needs, which predicts all behaviour is motivated by sequential physiological requirements",
      "Piaget's theory of cognitive development, which explains intellectual growth through sequential stage progression"
    ],correct:1,explanation:"Research links trolling to the 'Dark Tetrad' — narcissism, Machiavellianism, psychopathy, and especially subclinical sadism — individuals who derive genuine pleasure from causing others' distress.",reference:"Buckels, E. E., et al. (2014).",tags:["Dark-Tetrad","trolling"]},

  {id:"ca_244",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The Philippines' Anti-Cybercrime Law (RA 10175) has been controversial because critics argue it:",
    options:[
      "Is too narrow in scope and fails to address any meaningful forms of online harmful behaviour",
      "Applies offline libel penalties to online speech, creating a disproportionate chilling effect on expression",
      "Provides comprehensive protection for all victims of cyber-aggression without any negative side effects",
      "Only applies to government officials and exempts all private citizens from any form of legal liability"
    ],correct:1,explanation:"RA 10175 controversially applied the Philippines' criminal libel provisions to online speech with enhanced penalties, drawing criticism for chilling legitimate expression and press freedom.",reference:"Republic Act No. 10175 (2012).",tags:["legal","Philippines"]},

  {id:"ca_245",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Perpetrator intervention programmes for cyber-aggression should only use punitive approaches and never include educational or therapeutic components.",
    options:["True","False"],correct:1,explanation:"Evidence-based perpetrator programmes combine educational, therapeutic, and accountability components — purely punitive approaches are less effective at reducing recidivism than those addressing underlying cognitions and skills.",reference:"Williford, A., et al. (2013).",tags:["perpetrator","evidence-based"]},

  {id:"ca_246",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The neurobiological concept of 'allostatic load' is relevant to chronic cyber-aggression victimisation because it describes:",
    options:[
      "The immediate adrenaline rush experienced during a single unexpected threatening online interaction",
      "Cumulative physiological wear from chronic stress that degrades physical and mental health over time",
      "The complete absence of any physiological response to repeated exposure to online threatening content",
      "Temporary improvements in immune function that occur during periods of sustained psychological stress"
    ],correct:1,explanation:"Allostatic load — the cumulative biological burden of chronic stress — helps explain how sustained cyber-aggression victimisation leads to physiological degradation, inflammation, and long-term health consequences.",reference:"McEwen, B. S. (1998).",tags:["neurobiology","allostatic-load"]},

  {id:"ca_247",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'networked misogyny' in cyber-aggression research refers to:",
    options:[
      "Individual men holding privately held sexist beliefs that they never express in any public online forum",
      "Distributed, platform-spanning, and collectively enacted gendered hostility targeting women and girls online",
      "Women's support networks that provide solidarity, resources, and mutual aid to counter online harassment",
      "Gender-neutral online harassment that affects all genders with equal frequency, severity, and impact"
    ],correct:1,explanation:"Networked misogyny describes how gendered hostility toward women operates across platforms through distributed, collectively enacted harassment that is coordinated, amplified, and normalised by digital networks.",reference:"Banet-Weiser, S., & Miltner, K. M. (2016).",tags:["networked-misogyny","gendered-aggression"]},

  {id:"ca_248",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'Oversight Board' model of platform governance, as implemented by Meta, is designed to provide:",
    options:[
      "Independent quasi-judicial review of content moderation decisions with binding authority on individual cases",
      "Direct government control over all content moderation decisions made by social media platform companies",
      "Fully automated decision-making without any human involvement or appeals process for affected users",
      "A marketing advisory board focused on increasing advertising revenue and shareholder returns for Meta"
    ],correct:0,explanation:"Meta's Oversight Board functions as an independent quasi-judicial body reviewing content moderation decisions, with binding authority on individual cases and advisory authority on broader policy questions.",reference:"Oversight Board (2020).",tags:["platform-governance","oversight"]},

  {id:"ca_249",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Research suggests that simply telling young people to 'just ignore' cyberbullying is an effective evidence-based intervention strategy.",
    options:["True","False"],correct:1,explanation:"'Just ignore it' is not an effective strategy — research shows cyberbullying victims need active support, validation, reporting options, and coping strategies rather than dismissal of their experiences.",reference:"Kowalski, R. M., et al. (2014).",tags:["intervention","myth"]},

  {id:"ca_250",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The phenomenon of 'virtue signalling accusations' in online discourse functions as a form of cyber-aggression because it:",
    options:[
      "Genuinely encourages more people to engage in prosocial behaviour and authentic moral expression",
      "Delegitimises expressions of moral concern by framing them as performative and insincere to silence speakers",
      "Accurately identifies every instance where someone expresses moral views solely for social approval",
      "Has no measurable impact on online discourse and is merely a neutral descriptive term without consequences"
    ],correct:1,explanation:"Accusations of 'virtue signalling' can function as aggression by delegitimising genuine moral expression, silencing dissent, and discouraging people from speaking out against injustice or harm.",reference:"Tosi, J., & Warmke, B. (2016).",tags:["virtue-signalling","silencing"]},

  {id:"ca_251",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'hate speech ecosystems' examines how extremist content moves between platforms through which process?",
    options:[
      "Content remaining permanently isolated on a single platform with no cross-platform migration whatsoever",
      "Strategic migration and cross-posting between mainstream and fringe platforms to maximise reach and impact",
      "All platforms sharing a single unified database that automatically synchronises all user content globally",
      "Individual users consuming content from only one platform and never visiting any alternative websites"
    ],correct:1,explanation:"Hate speech ecosystems describe how extremist content strategically migrates between mainstream and fringe platforms — produced on fringe sites, laundered through semi-mainstream spaces, and amplified on major platforms.",reference:"Donovan, J., et al. (2019).",tags:["hate-speech","ecosystems"]},

  {id:"ca_252",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'attention economy' contributes to cyber-aggression because platforms that monetise user attention:",
    options:[
      "Actively discourage all controversial content to create a calm and harmonious user experience for all",
      "Have financial incentives to promote engagement-maximising content, including conflict and outrage material",
      "Generate revenue exclusively from subscription fees and have no interest in user engagement metrics",
      "Automatically detect and remove all harmful content in real time before any user can view or share it"
    ],correct:1,explanation:"The attention economy creates structural incentives for platforms to promote content that maximises engagement — including outrage, conflict, and aggressive content that drives clicks and time-on-platform.",reference:"Wu, T. (2016).",tags:["attention-economy","structural"]},

  {id:"ca_253",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Research indicates that digital literacy programmes that include ethical reasoning components can reduce cyber-aggression perpetration among young people.",
    options:["True","False"],correct:0,explanation:"Digital literacy programmes incorporating ethical reasoning — not just technical skills — show promise in reducing cyber-aggression by helping young people consider the impact of their online behaviour on others.",reference:"Jones, L. M., & Mitchell, K. J. (2016).",tags:["digital-literacy","ethics"]},

  {id:"ca_254",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which harm-reduction approach to cyber-aggression focuses on reducing the impact of harmful content rather than preventing its creation?",
    options:[
      "Pre-publication censorship that blocks all user content before it can be viewed by any other platform user",
      "Friction-based interventions such as warning labels, reduced amplification, and interstitial screens on content",
      "Complete platform shutdown that prevents all users from accessing any content or communication features",
      "Mandatory psychological screening of all potential social media users before they are allowed to register"
    ],correct:1,explanation:"Harm reduction approaches include friction-based interventions — warning labels, reduced algorithmic amplification, interstitial screens — that reduce harmful content's impact without necessarily removing it.",reference:"Bak-Coleman, J. B., et al. (2022).",tags:["harm-reduction","friction"]},

  {id:"ca_255",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'platform capture' in governance research describes the risk that:",
    options:[
      "Government regulators become overly influenced by the platforms they are supposed to regulate and oversee",
      "Users become permanently locked into one platform with no ability to migrate to competing alternatives",
      "Social media platforms are purchased by governments and converted into state-controlled propaganda tools",
      "Open-source software communities lose contributors when commercial platforms offer paid employment"
    ],correct:0,explanation:"Platform capture — analogous to regulatory capture — describes the risk that regulators become unduly influenced by the platforms they oversee, compromising effective governance of online harms.",reference:"Flew, T. (2021).",tags:["governance","regulatory-capture"]},

  {id:"ca_256",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Which specific streaming platform feature was developed primarily in response to coordinated 'hate raid' attacks?",
    options:[
      "Higher video resolution options that improve visual quality during live gaming broadcast streams",
      "Phone-verified chat requirements and enhanced channel ban and moderation automation tools",
      "Longer video-on-demand storage that allows streamers to archive past broadcasts for later viewing",
      "Improved audio codec support that enhances sound quality during music performance live streams"
    ],correct:1,explanation:"Phone verification for chat, enhanced ban evasion detection, and automated moderation tools were developed specifically to combat coordinated hate raids targeting marginalised streamers on platforms like Twitch.",reference:"Twitch Safety Advisory Council (2021).",tags:["streaming","safety-features"]},

  {id:"ca_257",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Cross-cultural research has established that cyberbullying prevalence rates are determined solely by a country's level of internet penetration.",
    options:["True","False"],correct:1,explanation:"While internet penetration affects cyberbullying prevalence, cultural norms, educational systems, legal frameworks, parenting practices, and societal values also significantly influence rates — it is not solely technology access.",reference:"Cross, D., et al. (2015).",tags:["cross-cultural","determinants"]},

  {id:"ca_258",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'spiral of silence' theory applied to cyber-aggression suggests that fear of harassment leads individuals to:",
    options:[
      "Express their opinions more loudly and aggressively to compensate for perceived online threats and risks",
      "Suppress minority viewpoints and withdraw from public discourse when they perceive hostile majority opinion",
      "Create multiple anonymous accounts to express diverse viewpoints across a wider range of platform spaces",
      "Increase their participation in online forums to demonstrate resilience against all perceived threats"
    ],correct:1,explanation:"The spiral of silence (Noelle-Neumann, 1974) predicts that individuals suppress viewpoints they perceive as unpopular — fear of cyber-aggression amplifies this, causing self-censorship and withdrawal.",reference:"Noelle-Neumann, E. (1974); Hampton, K. N., et al. (2014).",tags:["spiral-of-silence","self-censorship"]},

  {id:"ca_259",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The Brussels Effect in platform governance describes how the EU's regulations on online harms tend to:",
    options:[
      "Apply exclusively within EU borders with absolutely no influence on global platform policy or practice",
      "Set de facto global standards because multinational platforms adopt EU-compliant policies worldwide",
      "Reduce all online safety standards globally by creating a race to the bottom in regulatory compliance",
      "Encourage platforms to leave the EU market entirely rather than comply with any regulatory requirements"
    ],correct:1,explanation:"The Brussels Effect (Bradford, 2020) describes how EU regulations like the DSA become de facto global standards — multinational platforms often apply EU-compliant policies universally rather than maintaining separate systems.",reference:"Bradford, A. (2020).",tags:["governance","Brussels-effect"]},

  {id:"ca_260",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'phishing as interpersonal aggression' extends cyber-aggression frameworks by recognising that targeted phishing can be used to:",
    options:[
      "Help individuals improve their password security through educational simulation exercises at work",
      "Gain access to personal accounts for the purposes of surveillance, harassment, and coercive control",
      "Distribute charitable donations to vulnerable communities through secure electronic transfer mechanisms",
      "Test the reliability and performance of email server infrastructure during routine maintenance periods"
    ],correct:1,explanation:"Targeted phishing (spear phishing) can constitute interpersonal cyber-aggression when used to access a victim's accounts for surveillance, harassment, impersonation, or coercive control purposes.",reference:"Button, M., & Cross, C. (2017).",tags:["phishing","coercive-control"]},

  {id:"ca_261",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Research has found that perpetrators of cyber-aggression are often also victims of cyber-aggression, a phenomenon known as the 'bully-victim' overlap.",
    options:["True","False"],correct:0,explanation:"The bully-victim overlap is well-documented — many individuals who perpetrate cyber-aggression also experience victimisation, and this dual role is associated with the poorest psychological outcomes.",reference:"Kowalski, R. M., & Limber, S. P. (2013).",tags:["bully-victim","overlap"]},

  {id:"ca_262",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'normalisation of online aggression' hypothesis proposes that repeated exposure to aggressive online content leads to:",
    options:[
      "Increased sensitivity to online aggression that makes every subsequent exposure more distressing",
      "Desensitisation, where aggressive behaviour becomes perceived as ordinary and acceptable over time",
      "Complete immunity to all forms of psychological distress from any online interaction whatsoever",
      "Enhanced critical thinking skills that help users identify and effectively counter aggressive content"
    ],correct:1,explanation:"The normalisation hypothesis proposes that repeated exposure to online aggression leads to desensitisation — perceiving aggression as normal, acceptable, and less harmful, lowering thresholds for perpetration.",reference:"Huesmann, L. R. (2007).",tags:["normalisation","desensitisation"]},

  {id:"ca_263",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The 'techlash' phenomenon is relevant to cyber-aggression research because it reflects:",
    options:[
      "Universal public satisfaction with how technology companies handle online safety and content moderation",
      "Growing public backlash against technology companies' perceived failures to prevent online harms effectively",
      "The development of new physical technologies designed to replace social media with in-person communication",
      "Academic researchers' reluctance to study technology-related topics due to lack of available research funding"
    ],correct:1,explanation:"The techlash reflects growing public, political, and regulatory backlash against major technology companies' perceived failures to address online harms, misinformation, and platform exploitation.",reference:"Flew, T. (2021).",tags:["techlash","public-discourse"]},

  {id:"ca_264",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"Research on 'cyber-aggression in the gig economy' highlights which unique vulnerability for platform workers?",
    options:[
      "Gig workers have guaranteed employment contracts that fully protect them from all forms of online abuse",
      "Platform rating systems weaponise customer feedback, enabling harassment that threatens workers' livelihoods",
      "Gig economy workers have no access to digital technology and therefore cannot experience any online harm",
      "All gig economy platforms provide comprehensive anti-harassment training and mental health support"
    ],correct:1,explanation:"Gig economy workers face unique vulnerability through weaponised rating systems — customers can use unfair ratings and hostile feedback as tools of harassment that directly threaten workers' livelihoods and employment.",reference:"Rosenblat, A. (2018).",tags:["gig-economy","workplace"]},

  {id:"ca_265",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"The 'General Aggression Model' (GAM) has been successfully adapted to explain aggressive behaviour in online environments, not just offline settings.",
    options:["True","False"],correct:0,explanation:"The GAM (Anderson & Bushman, 2002) has been adapted for online contexts, incorporating digital situational factors (anonymity, asynchronicity) alongside personal factors in explaining online aggression.",reference:"Anderson, C. A., & Bushman, B. J. (2002).",tags:["GAM","theory"]},

  {id:"ca_266",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'participatory surveillance' in social media contexts normalises monitoring behaviours that can escalate to cyber-aggression through:",
    options:[
      "Platform designs that reward and normalise checking, tracking, and monitoring others' online activities",
      "The complete elimination of all personal information from social media profiles and user accounts",
      "Strict privacy regulations that prevent any user from viewing any other user's content on any platform",
      "Government-mandated surveillance cameras installed in every private home to monitor internet usage"
    ],correct:0,explanation:"Participatory surveillance (Albrechtslund, 2008) describes how social media normalises mutual monitoring — checking profiles, tracking activities — creating a foundation that can escalate to stalking and control.",reference:"Albrechtslund, A. (2008).",tags:["surveillance","normalisation"]},

  {id:"ca_267",category:"cyber-aggression",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'epistemic violence' applied to online hate speech refers to the systematic:",
    options:[
      "Physical destruction of digital infrastructure such as servers and network cables by violent actors",
      "Undermining of marginalised groups' knowledge systems, credibility, and capacity to be heard and believed",
      "Accidental corruption of digital files caused by software bugs during routine data storage processes",
      "Equal representation of all perspectives in online discourse regardless of evidence quality or expertise"
    ],correct:1,explanation:"Epistemic violence (Spivak, 1988) online describes systematic undermining of marginalised groups' knowledge, credibility, and capacity to be heard — through silencing, discrediting, and erasure in digital spaces.",reference:"Spivak, G. C. (1988); Dotson, K. (2011).",tags:["epistemic-violence","hate-speech"]},

  {id:"ca_268",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'tokenistic reporting' problem in platform governance research describes which failure?",
    options:[
      "Platforms providing reporting mechanisms that exist in name only without genuine follow-through or enforcement",
      "Users submitting too many accurate reports that overwhelm perfectly functioning moderation systems",
      "Researchers publishing too many studies about online reporting systems that saturate the academic literature",
      "Government agencies creating excessive regulatory frameworks that provide too much user protection"
    ],correct:0,explanation:"Tokenistic reporting describes platforms that provide reporting interfaces that appear functional but lack genuine follow-through — reports go unreviewed, unactioned, or receive only automated responses.",reference:"Crawford, K., & Gillespie, T. (2016).",tags:["reporting","tokenistic"]},

  {id:"ca_269",category:"cyber-aggression",difficulty:1,mode:"public",type:"truefalse",
    question:"Attachment theory has been applied to explain not only individual perpetration of cyber-aggression but also patterns of online relationship conflict and jealousy-driven digital monitoring.",
    options:["True","False"],correct:0,explanation:"Attachment theory has been applied to explain individual aggression, relationship conflict, jealousy-driven digital monitoring, and partner surveillance — all linked to insecure attachment patterns.",reference:"Morelli, M., et al. (2018).",tags:["attachment","applications"]},

  {id:"ca_270",category:"cyber-aggression",difficulty:2,mode:"public",type:"mcq",
    question:"The 'protective factors' approach to cyber-aggression prevention identifies which factor as most consistently protective for young people?",
    options:[
      "Complete prohibition of all technology use until the age of eighteen with no exceptions permitted",
      "Strong, supportive relationships with parents, peers, and teachers combined with high digital literacy",
      "Exclusive reliance on automated content filtering software with no accompanying human support",
      "Compulsory participation in competitive online gaming leagues to build resilience through exposure"
    ],correct:1,explanation:"Research consistently identifies strong supportive relationships (parental warmth, peer support, teacher engagement) combined with digital literacy as the most protective factors against cyber-aggression.",reference:"Hinduja, S., & Patchin, J. W. (2017).",tags:["protective-factors","prevention"]},

  // ═══════════════════════════════════════════════════════════════
  // MORAL DISENGAGEMENT (expanded md_021–md_060)
  // ═══════════════════════════════════════════════════════════════

  {id:"md_021",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Collective moral disengagement refers to which phenomenon in group behaviour contexts?",
    options:[
      "The process by which entire groups develop shared justifications that allow harmful conduct to continue",
      "The individual decision to withdraw from a group that is engaging in morally questionable online actions",
      "The tendency for group members to experience heightened moral sensitivity when acting collaboratively",
      "The formal establishment of ethical codes and guidelines within professional organisations and groups"
    ],correct:0,explanation:"Collective moral disengagement occurs when groups develop shared rationalizations that enable harmful conduct, going beyond individual-level cognitive restructuring.",reference:"Bandura, A. (1999).",tags:["collective","moral-disengagement"]},

  {id:"md_022",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'graduated moral disengagement' suggests that disengagement typically follows which pattern?",
    options:[
      "Individuals suddenly adopt all eight mechanisms simultaneously during a single provocative online event",
      "Individuals progressively employ stronger disengagement mechanisms as harmful behaviour escalates gradually",
      "Individuals use disengagement mechanisms in a random order unrelated to the severity of their actions",
      "Individuals start with the strongest mechanisms and gradually reduce disengagement as behaviour normalises"
    ],correct:1,explanation:"Graduated disengagement suggests a progressive escalation where individuals employ increasingly powerful justifications as their harmful behaviour escalates incrementally over time.",reference:"Bandura, A. (2016).",tags:["graduated","escalation"]},

  {id:"md_023",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How does moral licensing differ from moral disengagement as a psychological process?",
    options:[
      "Moral licensing and moral disengagement are identical processes described using different terminology only",
      "Moral licensing involves past good deeds creating perceived 'credits' that permit subsequent transgressions",
      "Moral licensing applies only to online behaviour while moral disengagement applies only to offline actions",
      "Moral licensing is a conscious deliberate strategy while moral disengagement always operates unconsciously"
    ],correct:1,explanation:"Moral licensing involves prior moral behaviour creating perceived 'credits' that license subsequent transgressions, whereas moral disengagement involves cognitive restructuring of harmful acts themselves.",reference:"Merritt, A. C., et al. (2010).",tags:["moral-licensing","comparison"]},

  {id:"md_024",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Techno-moral disengagement specifically refers to which phenomenon in digital contexts?",
    options:[
      "The complete abandonment of all technology use due to ethical concerns about digital platform practices",
      "The use of technology's features and affordances as facilitators of moral disengagement processes online",
      "The development of new ethical frameworks specifically designed for artificial intelligence governance only",
      "The mandatory ethics training that technology companies provide to their software engineering employees"
    ],correct:1,explanation:"Techno-moral disengagement describes how technological affordances (anonymity, physical distance, automated mediation) specifically facilitate moral disengagement in digital environments.",reference:"Bandura, A. (2016); Runions, K. C., & Bak, M. (2015).",tags:["techno-moral","digital"]},

  {id:"md_025",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In Sykes and Matza's neutralisation theory, the technique of 'denial of injury' involves which cognitive strategy?",
    options:[
      "Claiming that authorities and institutions condemning the behaviour are themselves corrupt and hypocritical",
      "Arguing that no real harm was caused by the behaviour because the consequences were trivial or non-existent",
      "Asserting that the behaviour was compelled by circumstances entirely beyond the individual's personal control",
      "Redirecting blame toward the victim by claiming they deserved the harmful treatment they experienced online"
    ],correct:1,explanation:"Denial of injury involves claiming that no real harm occurred, minimising consequences — parallel to Bandura's 'minimising or disregarding consequences' mechanism.",reference:"Sykes, G. M., & Matza, D. (1957).",tags:["neutralisation","denial-of-injury"]},

  {id:"md_026",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Sykes and Matza's 'condemnation of the condemners' technique is functionally similar to Bandura's mechanism of blaming or dehumanising victims.",
    options:["True","False"],correct:1,explanation:"Condemnation of the condemners (redirecting attention to the motives of those who disapprove) is more closely aligned with Bandura's mechanism of displacing or diffusing responsibility, not victim blaming.",reference:"Sykes, G. M., & Matza, D. (1957); Bandura, A. (1999).",tags:["neutralisation","comparison"]},

  {id:"md_027",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How does platform culture potentially facilitate moral disengagement among users according to research?",
    options:[
      "Platform cultures have no influence on individual moral reasoning processes or ethical decision-making online",
      "Platform norms that normalise aggressive discourse can provide social validation for disengagement strategies",
      "Platform cultures exclusively promote moral engagement and prosocial behaviour through community guidelines",
      "Platform culture effects are limited to aesthetic preferences and have no bearing on ethical behaviour at all"
    ],correct:1,explanation:"Platform cultures that normalise aggression, trolling, or toxic discourse provide social validation for moral disengagement, making harmful behaviour seem acceptable within that context.",reference:"Massanari, A. (2017).",tags:["platform-culture","normalisation"]},

  {id:"md_028",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Research on radicalisation pathways suggests moral disengagement plays which role in the process?",
    options:[
      "Moral disengagement is irrelevant to radicalisation, which is driven entirely by political ideology alone",
      "Moral disengagement acts as a cognitive facilitator enabling increasingly extreme actions through gradual justification",
      "Moral disengagement only operates after radicalisation is complete, serving as a retrospective justification",
      "Moral disengagement prevents radicalisation by allowing individuals to process moral conflicts constructively"
    ],correct:1,explanation:"Moral disengagement facilitates radicalisation by progressively enabling individuals to justify increasingly extreme actions through cognitive restructuring of moral standards.",reference:"Bandura, A. (2004); Moghaddam, F. M. (2005).",tags:["radicalisation","extremism"]},

  {id:"md_029",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral courage in online contexts is best described as which behavioural tendency?",
    options:[
      "The tendency to avoid all online spaces where controversial or potentially harmful content might appear",
      "The willingness to act ethically and intervene against wrongdoing despite personal social costs or risks",
      "The ability to remain emotionally detached and uninvolved when witnessing online aggression or harassment",
      "The practice of reporting all online content to platform moderators regardless of whether it is harmful"
    ],correct:1,explanation:"Moral courage involves the willingness to stand up for ethical principles and intervene against perceived wrongdoing, even when doing so carries personal social risk.",reference:"Osswald, S., et al. (2010).",tags:["moral-courage","intervention"]},

  {id:"md_030",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Compartmentalisation allows individuals to maintain different moral standards for online and offline behaviour without experiencing cognitive dissonance.",
    options:["True","False"],correct:0,explanation:"Compartmentalisation enables individuals to separate their online and offline moral identities, applying different standards in each domain without experiencing the expected cognitive dissonance.",reference:"Suler, J. (2004).",tags:["compartmentalisation","dual-standards"]},

  {id:"md_031",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"How can algorithmic content recommendation systems potentially facilitate moral disengagement?",
    options:[
      "Algorithms have no capacity to influence moral reasoning because they are neutral mathematical processes",
      "Algorithms can create filter bubbles that reinforce existing justifications and normalise harmful perspectives",
      "Algorithms exclusively promote prosocial content and actively counteract moral disengagement in all users",
      "Algorithms only affect purchasing decisions and have no meaningful impact on moral cognition or behaviour"
    ],correct:1,explanation:"Algorithmic recommendation systems can create echo chambers and filter bubbles that reinforce existing beliefs, normalise extreme views, and provide social validation for moral disengagement.",reference:"Pariser, E. (2011).",tags:["algorithms","filter-bubbles"]},

  {id:"md_032",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Group-level moral disengagement in online communities most commonly manifests through which process?",
    options:[
      "Individual members independently and privately developing personal moral justifications for their actions",
      "Shared narratives and in-group language that collectively reframe harmful actions as acceptable or necessary",
      "Formal organisational policies that explicitly prohibit any discussion of ethics or moral responsibility",
      "Random fluctuations in group behaviour that have no consistent pattern or underlying cognitive mechanism"
    ],correct:1,explanation:"Group-level moral disengagement manifests through shared narratives, collective language, and in-group norms that reframe harmful actions as justified, necessary, or insignificant.",reference:"Bandura, A. (1999).",tags:["group-level","collective"]},

  {id:"md_033",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Bandura identified eight mechanisms of moral disengagement that operate at different points in the self-regulation of moral conduct.",
    options:["True","False"],correct:0,explanation:"Bandura identified eight mechanisms operating at four loci: behaviour (moral justification, euphemistic labelling, advantageous comparison), agency (displacement/diffusion of responsibility), outcomes (minimising consequences), and victim (dehumanisation, attribution of blame).",reference:"Bandura, A. (1986, 1999).",tags:["eight-mechanisms","theory"]},

  {id:"md_034",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Euphemistic labelling as a moral disengagement mechanism operates by which specific cognitive process?",
    options:[
      "Directly confronting the moral implications of harmful behaviour to develop a genuine ethical justification",
      "Using sanitised or neutral language to cognitively restructure harmful conduct and obscure its true nature",
      "Comparing one's harmful behaviour favourably against much worse actions committed by entirely other people",
      "Attributing responsibility for harmful outcomes to external authorities who issued the original instructions"
    ],correct:1,explanation:"Euphemistic labelling involves using sanitised, neutral, or convoluted language to make harmful conduct appear benign or respectable, obscuring its moral significance.",reference:"Bandura, A. (1999).",tags:["euphemistic-labelling","mechanism"]},

  {id:"md_035",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and empathy in online aggression contexts shows which pattern?",
    options:[
      "Moral disengagement and empathy are completely unrelated constructs with no empirical association found",
      "Higher moral disengagement is associated with lower empathy, jointly predicting greater online aggression",
      "Higher empathy reliably predicts greater moral disengagement due to emotional burnout and fatigue effects",
      "Empathy moderates moral disengagement only in female participants and has no effect for male participants"
    ],correct:1,explanation:"Research shows moral disengagement and empathy are inversely related, with higher disengagement and lower empathy jointly predicting greater engagement in online aggression.",reference:"Pornari, C. D., & Wood, J. (2010).",tags:["empathy","relationship"]},

  {id:"md_036",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"Which of Bandura's moral disengagement mechanisms involves portraying victims as less than fully human?",
    options:[
      "Displacement of responsibility, which shifts blame to authority figures who directed the harmful actions",
      "Advantageous comparison, which makes harmful acts seem minor by comparing them to much worse behaviour",
      "Dehumanisation, which strips victims of human qualities, making it easier to justify harming them online",
      "Diffusion of responsibility, which distributes blame across all group members so no one feels accountable"
    ],correct:2,explanation:"Dehumanisation involves divesting victims of human qualities or attributing animal/demonic characteristics to them, reducing empathic concern and moral inhibitions against harmful conduct.",reference:"Bandura, A. (1999).",tags:["dehumanisation","mechanism"]},

  {id:"md_037",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Research suggests that moral disengagement is a stable personality trait that remains constant across all situations and contexts.",
    options:["True","False"],correct:1,explanation:"While there are trait-like individual differences in propensity for moral disengagement, situational factors (anonymity, group pressure, platform norms) also significantly influence its activation.",reference:"Moore, C. (2015).",tags:["trait-state","situational"]},

  {id:"md_038",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Bandura's concept of 'selective activation and disengagement of moral self-sanctions' implies which important theoretical point?",
    options:[
      "Moral standards are entirely absent in individuals who engage in harmful behaviour towards other people",
      "People possess moral standards but selectively activate or disengage them depending on the situation context",
      "Moral self-sanctions operate automatically and cannot be influenced by cognitive or environmental factors",
      "Only individuals with clinical psychopathy are capable of disengaging their internal moral self-sanctions"
    ],correct:1,explanation:"Bandura argues that most people possess moral standards but can selectively disengage self-regulatory mechanisms through cognitive restructuring, not that they lack moral standards entirely.",reference:"Bandura, A. (2002).",tags:["selective-activation","theory"]},

  {id:"md_039",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The 'denial of the victim' neutralisation technique (Sykes and Matza) involves which specific reasoning?",
    options:[
      "Acknowledging that harm occurred but claiming the victim provoked or deserved the negative treatment received",
      "Denying that any victim exists at all by claiming the harmful behaviour had absolutely no negative effects",
      "Asserting that the victim is actually a disguised perpetrator who initiated all of the harmful interactions",
      "Claiming that the victim's identity cannot be verified and therefore no responsibility can be assigned here"
    ],correct:0,explanation:"Denial of the victim involves acknowledging harm but reframing the victim as deserving of the treatment, often arguing they provoked the response through their own actions.",reference:"Sykes, G. M., & Matza, D. (1957).",tags:["denial-of-victim","neutralisation"]},

  {id:"md_040",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Advantageous comparison works by making one's own harmful behaviour seem trivial when compared to more extreme actions by others.",
    options:["True","False"],correct:0,explanation:"Advantageous comparison involves comparing one's conduct with more reprehensible behaviour by others, making one's own actions appear minor or insignificant by contrast.",reference:"Bandura, A. (1999).",tags:["advantageous-comparison","mechanism"]},

  {id:"md_041",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In online gaming contexts, moral disengagement is most commonly associated with which specific behaviour?",
    options:[
      "Developing advanced technical skills through dedicated practice and strategic gameplay improvement efforts",
      "Griefing, cheating, and toxic communication justified through gaming-specific norms and competitive culture",
      "Forming supportive online communities that encourage prosocial interaction and collaborative team play",
      "Purchasing in-game items through legitimate microtransaction systems supported by the game developers"
    ],correct:1,explanation:"Moral disengagement in gaming manifests as justification of griefing, cheating, and toxic behaviour through gaming-specific norms ('it's just a game') and competitive culture.",reference:"Hartmann, T., & Vorderer, P. (2010).",tags:["gaming","griefing"]},

  {id:"md_042",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'moral identity' relates to moral disengagement through which theoretical mechanism?",
    options:[
      "Individuals with strong moral identities are completely immune to all forms of moral disengagement always",
      "Moral identity strength moderates the relationship between moral disengagement and harmful behaviour",
      "Moral identity and moral disengagement are identical constructs measuring the same underlying dimension",
      "Moral identity only develops in adulthood and therefore has no relevance to adolescent online behaviour"
    ],correct:1,explanation:"Moral identity — the centrality of moral traits to one's self-concept — moderates the link between disengagement and behaviour; stronger moral identity buffers against disengagement effects.",reference:"Aquino, K., & Reed, A. (2002).",tags:["moral-identity","moderator"]},

  {id:"md_043",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Displacement of responsibility as a moral disengagement mechanism involves which specific cognitive shift?",
    options:[
      "Distributing blame equally across all members of a large group so that no single person feels responsible",
      "Shifting personal responsibility to legitimate authorities or social pressures that directed the behaviour",
      "Completely denying that the harmful action ever took place despite clear and documented evidence available",
      "Reframing harmful behaviour as serving a noble higher purpose that justifies the negative consequences"
    ],correct:1,explanation:"Displacement of responsibility involves shifting personal accountability to authority figures, social pressures, or institutional directives, reducing self-sanctions for harmful conduct.",reference:"Bandura, A. (1999).",tags:["displacement-responsibility","mechanism"]},

  {id:"md_044",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Diffusion of responsibility and displacement of responsibility are the same moral disengagement mechanism described using different terms.",
    options:["True","False"],correct:1,explanation:"They are distinct mechanisms: displacement shifts responsibility to authority figures, while diffusion spreads responsibility across group members so no single individual feels fully accountable.",reference:"Bandura, A. (1999).",tags:["diffusion","displacement","distinction"]},

  {id:"md_045",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on moral disengagement and cyberbullying in adolescents most consistently finds which relationship?",
    options:[
      "Moral disengagement has no significant association with cyberbullying perpetration in adolescent samples",
      "Moral disengagement significantly predicts cyberbullying perpetration even after controlling for other factors",
      "Moral disengagement only predicts cyberbullying victimisation but not perpetration in adolescent populations",
      "Moral disengagement predicts cyberbullying only in adult populations and is irrelevant for adolescent youth"
    ],correct:1,explanation:"Multiple studies confirm that moral disengagement is a significant predictor of cyberbullying perpetration in adolescents, even when controlling for demographics and other psychological variables.",reference:"Pornari, C. D., & Wood, J. (2010); Robson, C., & Witenberg, R. T. (2013).",tags:["cyberbullying","adolescents"]},

  {id:"md_046",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Which moral disengagement mechanism is most directly facilitated by the physical distance inherent in online communication?",
    options:[
      "Moral justification, which involves reframing harmful conduct as serving a worthy social or moral purpose",
      "Euphemistic labelling, which uses sanitised language to make harmful behaviour appear more respectable",
      "Minimising or disregarding consequences, as physical distance reduces awareness of the victim's suffering",
      "Advantageous comparison, which contrasts one's behaviour with more extreme conduct by other individuals"
    ],correct:2,explanation:"Physical distance in online communication reduces visibility of victim suffering, directly facilitating the minimisation or disregard of harmful consequences.",reference:"Bandura, A. (2016).",tags:["distance","consequences"]},

  {id:"md_047",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Attribution of blame involves holding victims responsible for the harm they received, arguing they brought it upon themselves.",
    options:["True","False"],correct:0,explanation:"Attribution of blame involves blaming the victim for the harmful conduct directed at them, arguing that the victim's own behaviour provoked or caused the aggression.",reference:"Bandura, A. (1999).",tags:["attribution-of-blame","mechanism"]},

  {id:"md_048",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The relationship between Dark Triad traits and moral disengagement in cyber-aggression shows which empirical pattern?",
    options:[
      "Dark Triad traits are negatively associated with moral disengagement and positively predict prosocial behaviour",
      "Only narcissism among the Dark Triad traits shows any association with moral disengagement processes online",
      "All three Dark Triad traits positively predict moral disengagement, which mediates their effect on aggression",
      "Dark Triad traits directly cause cyber-aggression without any role for moral disengagement as a mechanism"
    ],correct:2,explanation:"Research shows all three Dark Triad traits (Machiavellianism, narcissism, psychopathy) positively predict moral disengagement, which partially mediates their relationship with cyber-aggression.",reference:"Egan, V., et al. (2015).",tags:["Dark-Triad","mediation"]},

  {id:"md_049",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The 'appeal to higher loyalties' neutralisation technique (Sykes and Matza) involves which justification?",
    options:[
      "Claiming that societal rules do not apply because one's loyalty to a smaller group takes moral precedence",
      "Arguing that no harm resulted from the behaviour and therefore no moral violation has actually occurred",
      "Asserting that the victim deserved negative treatment because of their own prior provocative behaviour",
      "Pointing out that those who criticise the behaviour are themselves guilty of similar or worse misconduct"
    ],correct:0,explanation:"Appeal to higher loyalties involves sacrificing societal rules in favour of loyalty to a smaller group (friends, gang, online community), justifying harmful acts through in-group allegiance.",reference:"Sykes, G. M., & Matza, D. (1957).",tags:["higher-loyalties","neutralisation"]},

  {id:"md_050",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Moral justification involves reframing harmful conduct as serving socially worthy or morally righteous purposes.",
    options:["True","False"],correct:0,explanation:"Moral justification involves cognitively restructuring harmful conduct as serving worthy social or moral purposes, making the behaviour personally and socially acceptable.",reference:"Bandura, A. (1999).",tags:["moral-justification","mechanism"]},

  {id:"md_051",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"How does the concept of 'moral agency' in Bandura's social cognitive theory relate to moral disengagement?",
    options:[
      "Moral agency is irrelevant to moral disengagement because disengagement bypasses all agentic processes entirely",
      "Moral agency provides the self-regulatory capacity that moral disengagement mechanisms selectively deactivate",
      "Moral agency and moral disengagement operate in completely separate and unrelated psychological systems",
      "Moral agency only develops in early childhood and is fully fixed before moral disengagement can even occur"
    ],correct:1,explanation:"Bandura views moral agency as the self-regulatory capacity involving moral standards and self-sanctions; moral disengagement selectively deactivates this self-regulatory process.",reference:"Bandura, A. (2006).",tags:["moral-agency","theory"]},

  {id:"md_052",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on moral disengagement interventions suggests which approach is most effective at reducing disengagement?",
    options:[
      "Punitive measures that severely penalise any expression of moral disengagement cognitions in participants",
      "Perspective-taking exercises and empathy-building activities that increase awareness of victim experiences",
      "Complete avoidance of all situations where moral disengagement could potentially be activated in any form",
      "Pharmacological interventions that target the neurological substrates of moral reasoning in the brain area"
    ],correct:1,explanation:"Research supports perspective-taking and empathy-building interventions as effective for reducing moral disengagement by strengthening awareness of consequences and victim suffering.",reference:"Gini, G., et al. (2014).",tags:["intervention","empathy"]},

  {id:"md_053",category:"moral-disengagement",difficulty:1,mode:"public",type:"mcq",
    question:"Which of the following is an example of 'diffusion of responsibility' in an online context?",
    options:[
      "A user claims their abusive post was justified because the target had insulted them previously online",
      "A user argues that everyone in the comment section was being similarly aggressive so they are not to blame",
      "A user uses euphemisms to describe their harassment, calling it 'just banter' or 'friendly ribbing' only",
      "A user claims their abusive behaviour was actually morally justified to protect the broader online community"
    ],correct:1,explanation:"Diffusion of responsibility involves distributing blame across group members ('everyone was doing it'), reducing individual accountability for harmful collective behaviour.",reference:"Bandura, A. (1999).",tags:["diffusion","example"]},

  {id:"md_054",category:"moral-disengagement",difficulty:2,mode:"public",type:"truefalse",
    question:"Moral disengagement is theoretically distinct from a lack of moral development; individuals who disengage typically possess moral standards but selectively bypass them.",
    options:["True","False"],correct:0,explanation:"Bandura's theory explicitly distinguishes moral disengagement from moral developmental deficits; most people who disengage possess moral standards but selectively deactivate self-regulatory mechanisms.",reference:"Bandura, A. (2002).",tags:["moral-development","distinction"]},

  {id:"md_055",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The role of anonymity in facilitating moral disengagement online is best explained by which mechanism?",
    options:[
      "Anonymity reduces the likelihood that self-sanctions will be activated by removing accountability cues",
      "Anonymity has no influence on moral disengagement because cognitive processes are entirely internal only",
      "Anonymity increases moral engagement because it allows individuals to express their true ethical beliefs",
      "Anonymity exclusively affects behavioural inhibition without any impact on moral cognitive restructuring"
    ],correct:0,explanation:"Anonymity reduces accountability cues, weakening the activation of moral self-sanctions and facilitating moral disengagement through reduced identifiability and consequence awareness.",reference:"Runions, K. C., & Bak, M. (2015).",tags:["anonymity","self-sanctions"]},

  {id:"md_056",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'moral self-licensing' in online contexts differs from moral disengagement in which key respect?",
    options:[
      "Moral self-licensing involves cognitive restructuring of the harmful act itself to reduce moral significance",
      "Moral self-licensing draws on accumulated moral credits from past good behaviour to permit transgressions",
      "Moral self-licensing operates only at the group level while moral disengagement operates individually only",
      "Moral self-licensing requires conscious awareness while moral disengagement always operates unconsciously"
    ],correct:1,explanation:"Moral self-licensing involves drawing on 'moral credits' accumulated through past good behaviour, whereas moral disengagement restructures the perception of the harmful act itself.",reference:"Blanken, I., et al. (2015).",tags:["moral-licensing","comparison"]},

  {id:"md_057",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on the measurement of moral disengagement in cyber-aggression contexts typically uses which assessment approach?",
    options:[
      "Neuroimaging techniques that directly observe moral reasoning processes in the prefrontal brain cortex area",
      "Self-report scales presenting scenarios requiring participants to rate agreement with disengagement justifications",
      "Behavioural observation methods where trained researchers code real-time online interactions for mechanisms",
      "Projective personality tests where participants interpret ambiguous images to reveal disengagement tendencies"
    ],correct:1,explanation:"Moral disengagement is most commonly measured through self-report scales (e.g., Bandura's Moral Disengagement Scale) presenting vignettes with disengagement justifications to rate.",reference:"Bandura, A., et al. (1996).",tags:["measurement","self-report"]},

  {id:"md_058",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement has been linked to a wide range of harmful behaviours beyond aggression, including corruption, environmental destruction, and corporate misconduct.",
    options:["True","False"],correct:0,explanation:"Moral disengagement has been applied to explain diverse harmful behaviours including corporate misconduct, environmental inaction, military conduct, terrorism, and political corruption.",reference:"Moore, C. (2015).",tags:["broad-application","scope"]},

  {id:"md_059",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The interaction between moral disengagement and perceived anonymity in predicting cyber-aggression shows which pattern?",
    options:[
      "Anonymity and moral disengagement have completely independent effects with no statistical interaction found",
      "High anonymity amplifies the relationship between moral disengagement and cyber-aggression perpetration",
      "High anonymity completely eliminates the need for moral disengagement in predicting aggressive behaviour",
      "Moral disengagement only predicts aggression when anonymity is absent and the user is fully identifiable"
    ],correct:1,explanation:"Research suggests perceived anonymity amplifies the effect of moral disengagement on cyber-aggression, as anonymity reduces accountability cues that might otherwise constrain behaviour.",reference:"Runions, K. C., & Bak, M. (2015).",tags:["anonymity","interaction"]},

  {id:"md_060",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Which developmental trend is most consistently observed in moral disengagement across the adolescent period?",
    options:[
      "Moral disengagement remains perfectly stable throughout adolescence with no measurable developmental change",
      "Moral disengagement steadily increases throughout adolescence, peaking in the final year of secondary school",
      "Moral disengagement tends to peak in early-to-mid adolescence and gradually decline with increasing maturity",
      "Moral disengagement only emerges in late adolescence and is completely absent in children under age fourteen"
    ],correct:2,explanation:"Research generally shows moral disengagement peaks in early-to-mid adolescence and declines with age, paralleling patterns in antisocial behaviour and moral development maturation.",reference:"Paciello, M., et al. (2008).",tags:["developmental","adolescence"]},

  // ═══════════════════════════════════════════════════════════════
  // MORAL DISENGAGEMENT (expanded md_061–md_180)
  // ═══════════════════════════════════════════════════════════════

  {id:"md_061",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in online gaming contexts is most commonly facilitated by which mechanism?",
    options:[
      "The perception that game characters are not real people and therefore cannot experience genuine harm",
      "The belief that all online gaming interactions are equally harmful regardless of context or content",
      "The requirement for all gamers to complete ethics training before accessing multiplayer environments",
      "The universal enforcement of strict behavioural codes that eliminate all toxic behaviour in games"
    ],correct:0,explanation:"In gaming contexts, moral disengagement is commonly facilitated by dehumanisation — viewing opponents as avatars rather than real people — and moral justification framing aggression as 'just part of the game.'",reference:"Hartmann, T., & Vorderer, P. (2010).",tags:["gaming","dehumanisation"]},

  {id:"md_062",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement on social media can be facilitated by the physical distance between users, which reduces the perceived reality of harm caused to others.",
    options:["True","False"],correct:0,explanation:"Physical distance in social media interactions reduces perceptions of harm reality, facilitating distortion of consequences and dehumanisation — key moral disengagement mechanisms in Bandura's framework.",reference:"Bandura, A. (2016).",tags:["social-media","distance"]},

  {id:"md_063",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In online forums, the practice of 'dogpiling' is sustained through which collective moral disengagement mechanism?",
    options:[
      "Individual moral responsibility being clearly acknowledged by every participant before joining the pile-on",
      "Diffusion of responsibility, where each participant perceives their individual contribution as negligible",
      "The complete absence of any harmful impact on the target because online words cannot cause real distress",
      "Platform moderators actively encouraging mass targeting of specific users as a community-building strategy"
    ],correct:1,explanation:"Dogpiling is sustained through diffusion of responsibility — each participant sees their individual comment as minor while the collective effect is overwhelming, reducing personal moral accountability.",reference:"Bandura, A. (2016).",tags:["forums","diffusion-responsibility"]},

  {id:"md_064",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The role of leadership in collective moral disengagement within online communities is primarily to:",
    options:[
      "Consistently model ethical behaviour and challenge all instances of moral justification among members",
      "Provide authoritative moral justifications that legitimise group aggression and set normative standards",
      "Remain completely neutral and refuse to express any opinion about the moral behaviour of group members",
      "Automatically ban all group members who express any form of disagreement with the leadership's position"
    ],correct:1,explanation:"Community leaders facilitate collective moral disengagement by providing authoritative moral justifications, framing targets as deserving, and establishing norms that legitimise aggressive group behaviour.",reference:"Bandura, A. (1999).",tags:["leadership","collective"]},

  {id:"md_065",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Institutional moral disengagement by technology companies most commonly manifests through which practice?",
    options:[
      "Transparent acknowledgment of platform harms and proactive investment in comprehensive safety measures",
      "Framing harmful platform effects as unintended consequences of neutral tools rather than design choices",
      "Aggressive self-regulation that exceeds all government requirements for user safety and data protection",
      "Publishing detailed annual reports on the psychological impact of their products on vulnerable users"
    ],correct:1,explanation:"Tech companies demonstrate institutional moral disengagement by framing platforms as 'neutral tools,' displacing responsibility onto users, and minimising (distorting) consequences of design decisions.",reference:"Zuboff, S. (2019).",tags:["institutional","tech-companies"]},

  {id:"md_066",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement has been identified as a significant psychological factor in the process of online political radicalisation.",
    options:["True","False"],correct:0,explanation:"Moral disengagement — particularly moral justification and dehumanisation of out-groups — plays a significant role in political radicalisation, enabling individuals to endorse increasingly extreme positions.",reference:"Sageman, M. (2008).",tags:["political-extremism","radicalisation"]},

  {id:"md_067",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement in AI ethics debates is most evident when technology developers argue that:",
    options:[
      "They bear full moral responsibility for every outcome produced by the artificial intelligence systems they create",
      "Algorithmic decisions are value-neutral technical processes and therefore fall outside moral evaluation",
      "Every AI system must undergo comprehensive ethical review before deployment in any real-world application",
      "Developers should prioritise the wellbeing of affected communities over all commercial business objectives"
    ],correct:1,explanation:"Moral disengagement in AI ethics manifests when developers frame algorithmic decisions as value-neutral technical processes — displacing responsibility from human designers to 'objective' technology.",reference:"Mittelstadt, B. D., et al. (2016).",tags:["AI-ethics","displacement"]},

  {id:"md_068",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Platform affordances enable moral disengagement primarily by providing which structural feature?",
    options:[
      "Mandatory real-name identification systems that link all behaviour directly to personal legal identity",
      "Anonymity, reduced social cues, and psychological distance that weaken self-regulatory moral processes",
      "Comprehensive transparency reports that make all user behaviour publicly visible and auditable",
      "Built-in ethical decision-making tools that prompt users to consider consequences before every post"
    ],correct:1,explanation:"Platform affordances — anonymity, pseudonymity, reduced social cues, asynchronous communication — weaken the self-regulatory moral processes that normally inhibit harmful behaviour.",reference:"Suler, J. (2004); Bandura, A. (2016).",tags:["affordances","structural"]},

  {id:"md_069",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Developmental research on moral disengagement trajectories shows that children who demonstrate high moral disengagement at age ten are:",
    options:[
      "Certain to become violent criminals without any possibility of change through intervention or maturation",
      "At elevated risk for continued aggressive behaviour but still responsive to intervention and development",
      "Guaranteed to show complete spontaneous recovery by adolescence without any intervention being needed",
      "Identical in their developmental trajectory to children who demonstrate low moral disengagement at age ten"
    ],correct:1,explanation:"High early moral disengagement predicts elevated risk for continued aggression, but trajectories are not deterministic — individuals remain responsive to intervention, socialization, and developmental maturation.",reference:"Paciello, M., et al. (2008).",tags:["developmental","trajectories"]},

  {id:"md_070",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Cultural variations in moral disengagement suggest that collectivist cultures may be more susceptible to which specific mechanism?",
    options:[
      "Individual moral justification based on personal achievement goals and self-enhancement motives only",
      "Displacement of responsibility onto group leaders and diffusion of responsibility within the collective",
      "Complete immunity to all forms of moral disengagement due to strong collective ethical frameworks",
      "Exclusive reliance on attribution of blame as the only available moral disengagement strategy"
    ],correct:1,explanation:"Collectivist cultures may be more susceptible to displacement and diffusion of responsibility because group cohesion and deference to authority are culturally valued — facilitating collective disengagement.",reference:"Caprara, G. V., et al. (2014).",tags:["cultural","collectivism"]},

  {id:"md_071",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"A key measurement challenge with moral disengagement scales is that respondents tend to:",
    options:[
      "Provide perfectly honest and accurate responses about their use of cognitive distortions in all contexts",
      "Under-report moral disengagement due to social desirability bias and limited self-awareness of processes",
      "Over-report moral disengagement because they find the concept interesting and want to appear complex",
      "Respond randomly without reading items because moral disengagement questionnaires are too straightforward"
    ],correct:1,explanation:"Social desirability bias leads respondents to under-report moral disengagement, and many cognitive distortions operate outside conscious awareness — both compromising self-report measurement accuracy.",reference:"Boardley, I. D., & Kavussanu, M. (2007).",tags:["measurement","social-desirability"]},

  {id:"md_072",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"The Moral Disengagement Scale (MDS) developed by Bandura and colleagues has been adapted for use specifically in online and cyber-aggression contexts.",
    options:["True","False"],correct:0,explanation:"Researchers have developed cyber-specific adaptations of Bandura's MDS, modifying items to reflect online contexts (e.g., replacing physical aggression scenarios with digital harassment scenarios).",reference:"Robson, C., & Witenberg, R. T. (2013).",tags:["measurement","scales"]},

  {id:"md_073",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and guilt suggests that moral disengagement primarily functions to:",
    options:[
      "Increase guilt feelings so that individuals are motivated to seek forgiveness from those they have harmed",
      "Reduce anticipatory guilt, allowing individuals to engage in harmful behaviour without emotional discomfort",
      "Eliminate the capacity for guilt permanently and irreversibly across all future moral decision situations",
      "Transform guilt into anger that is then directed inward as self-punishment for past moral transgressions"
    ],correct:1,explanation:"Moral disengagement primarily reduces anticipatory guilt — the expected emotional discomfort from harmful actions — enabling behaviour that would otherwise be inhibited by moral self-regulation.",reference:"Bandura, A. (2002).",tags:["guilt","emotional-regulation"]},

  {id:"md_074",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement in whistleblowing contexts operates in which direction to suppress ethical action?",
    options:[
      "Whistleblowers use moral disengagement to justify their decision to report organisational wrongdoing",
      "Organisations use moral disengagement to delegitimise whistleblowers through attribution of blame and dehumanisation",
      "Whistleblowing automatically eliminates all moral disengagement within the organisation that is exposed",
      "Moral disengagement has no relevance to whistleblowing because reporting always occurs without opposition"
    ],correct:1,explanation:"Organisations suppress whistleblowing through moral disengagement — attributing blame to the whistleblower, dehumanising them as 'traitors,' and displacing responsibility for the original wrongdoing.",reference:"Miceli, M. P., et al. (2008).",tags:["whistleblowing","organisational"]},

  {id:"md_075",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Conspiracy theories leverage moral disengagement primarily through which two mechanisms?",
    options:[
      "Moral justification and dehumanisation of the alleged conspirators, framing aggression as righteous defence",
      "Enhanced critical thinking and evidence evaluation that increase moral sensitivity across all participants",
      "Reduction of group cohesion and collective identity that weakens commitment to conspiracy narratives",
      "Increased empathy for the targets of conspiracy accusations that moderates aggressive impulses toward them"
    ],correct:0,explanation:"Conspiracy theories leverage moral justification (framing action against 'conspirators' as righteous defence) and dehumanisation (depicting targets as evil, subhuman, or monstrous) to enable aggression.",reference:"Jolley, D., & Douglas, K. M. (2014).",tags:["conspiracy","moral-justification"]},

  {id:"md_076",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Content moderation workers may develop moral disengagement as a psychological coping strategy because:",
    options:[
      "They are never exposed to any harmful content and therefore have no need for psychological coping strategies",
      "Repeated exposure to harmful content necessitates emotional distancing to maintain occupational functioning",
      "Their work involves exclusively positive content that creates excessive empathy requiring suppression",
      "Content moderation is universally recognised as the least psychologically demanding occupation available"
    ],correct:1,explanation:"Content moderators may develop moral disengagement as a coping mechanism — distancing emotionally from harmful content (distortion of consequences) to maintain functioning, but risking desensitisation.",reference:"Steiger, M., et al. (2021).",tags:["content-moderation","coping"]},

  {id:"md_077",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement plays a significant role in bystander inaction during cyberbullying, enabling witnesses to avoid intervening.",
    options:["True","False"],correct:0,explanation:"Bystanders use moral disengagement — particularly diffusion of responsibility ('someone else will help') and distortion of consequences ('it's not that bad') — to justify inaction during cyberbullying.",reference:"Machackova, H., et al. (2015).",tags:["bystander","inaction"]},

  {id:"md_078",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"'Prosocial moral disengagement' in vigilante justice online refers to which phenomenon?",
    options:[
      "Using moral disengagement to justify entirely selfish and antisocial behaviour without any prosocial framing",
      "Using moral justification to frame aggressive attacks on perceived wrongdoers as righteous public service",
      "The complete absence of moral disengagement in all instances of online vigilantism and public accountability",
      "The use of moral engagement to carefully evaluate the ethics of every action before taking any online step"
    ],correct:1,explanation:"Prosocial moral disengagement occurs when individuals use moral justification to frame aggression against perceived wrongdoers (doxxing, harassment) as righteous public service — 'they deserved it.'",reference:"Bandura, A. (2016).",tags:["prosocial","vigilantism"]},

  {id:"md_079",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in automated decision-making systems arises primarily because:",
    options:[
      "Algorithms cannot make decisions and always require direct human input for every individual outcome",
      "The distributed design process diffuses moral responsibility across multiple developers, datasets, and systems",
      "Every automated decision is reviewed by a dedicated ethics committee before implementation occurs",
      "Automated systems are universally acknowledged to be morally neutral with no ethical implications"
    ],correct:1,explanation:"Automated decision-making facilitates moral disengagement through diffusion and displacement of responsibility — the distributed development process means no single individual feels accountable for outcomes.",reference:"Mittelstadt, B. D., et al. (2016).",tags:["automated-decisions","diffusion"]},

  {id:"md_080",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In social media contexts, the 'ratio' phenomenon — where a post receives overwhelmingly negative replies — facilitates collective moral disengagement through:",
    options:[
      "Individual accountability, where each respondent carefully considers the cumulative impact of all replies",
      "The perceived consensus of disapproval that morally justifies aggressive responses to the original poster",
      "Complete silence from all users who choose not to engage with any controversial content on the platform",
      "Platform algorithms that suppress all negative replies and only display supportive and positive responses"
    ],correct:1,explanation:"The 'ratio' facilitates collective moral disengagement through moral justification ('they said something wrong') and diffusion of responsibility ('everyone is doing it') — normalising pile-on aggression.",reference:"Marwick, A. E. (2021).",tags:["social-media","ratio"]},

  {id:"md_081",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Workplace moral disengagement can be encouraged by organisational cultures that reward aggressive competitive behaviour among employees.",
    options:["True","False"],correct:0,explanation:"Organisational cultures that reward aggressive competition can normalise moral disengagement — employees learn to morally justify harmful tactics and displace responsibility onto competitive pressures and targets.",reference:"Moore, C. (2015).",tags:["workplace","organisational-culture"]},

  {id:"md_082",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'moral licensing' differs from moral disengagement because moral licensing involves:",
    options:[
      "Identical cognitive mechanisms to moral disengagement applied in exactly the same psychological contexts",
      "Feeling entitled to behave unethically after performing a prior good deed, without cognitive restructuring",
      "The formal legal process of obtaining government permission to engage in morally questionable activities",
      "A permanent personality change that eliminates all future capacity for moral reasoning and ethical behaviour"
    ],correct:1,explanation:"Moral licensing — feeling entitled to transgress after prior good behaviour — differs from moral disengagement, which involves cognitive restructuring of harmful acts. Licensing requires no cognitive distortion.",reference:"Merritt, A. C., et al. (2010).",tags:["moral-licensing","distinction"]},

  {id:"md_083",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In gaming communities, the phrase 'it's just a game' serves which moral disengagement function?",
    options:[
      "Moral justification, by framing the behaviour as pursuing a legitimate and worthwhile competitive goal",
      "Distortion of consequences, by minimising the real-world impact of aggressive behaviour on other players",
      "Attribution of blame, by placing full responsibility on game developers for creating competitive environments",
      "Displacement of responsibility, by attributing all behaviour to the game's artificial intelligence systems"
    ],correct:1,explanation:"'It's just a game' functions as distortion of consequences — minimising the real psychological impact of toxic behaviour on other players by framing the context as trivial and inconsequential.",reference:"Hartmann, T., & Vorderer, P. (2010).",tags:["gaming","distortion-consequences"]},

  {id:"md_084",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on moral disengagement and shame suggests that unlike guilt, shame tends to:",
    options:[
      "Motivate constructive reparative action and genuine apology toward the person who was harmed",
      "Promote defensive reactions including anger, externalisation, and further moral disengagement strategies",
      "Eliminate all future aggressive behaviour by creating an overwhelming desire to avoid social disapproval",
      "Function identically to guilt in motivating moral reflection and prosocial behavioural change efforts"
    ],correct:1,explanation:"While guilt motivates reparation, shame promotes defensive reactions — anger, blame externalisation, withdrawal — that can paradoxically fuel further moral disengagement and aggression.",reference:"Tangney, J. P., & Dearing, R. L. (2002).",tags:["shame","defensive-reactions"]},

  {id:"md_085",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Institutional moral disengagement by tech companies is most clearly demonstrated through the practice of:",
    options:[
      "Publishing comprehensive impact assessments before launching new product features for public user access",
      "Describing exploitative design patterns as 'user engagement optimisation' through euphemistic labelling",
      "Voluntarily restricting addictive features based on internal research showing harm to vulnerable populations",
      "Establishing independent ethics boards with genuine authority to veto product decisions deemed harmful"
    ],correct:1,explanation:"Euphemistic labelling — describing dark patterns as 'engagement optimisation,' surveillance as 'personalisation' — is a key institutional moral disengagement mechanism used by technology companies.",reference:"Bandura, A. (2016); Zuboff, S. (2019).",tags:["institutional","euphemistic-labelling"]},

  {id:"md_086",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement has been linked to support for political violence, including endorsement of extremist actions against perceived enemies.",
    options:["True","False"],correct:0,explanation:"Research demonstrates that moral disengagement — particularly moral justification and dehumanisation — significantly predicts support for political violence and endorsement of extremist actions.",reference:"Aquino, K., et al. (2007).",tags:["political-extremism","violence"]},

  {id:"md_087",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In AI ethics debates, 'algorithmic displacement of responsibility' occurs when developers argue that:",
    options:[
      "They are personally accountable for every decision made by any AI system they have contributed to building",
      "The algorithm made the decision autonomously and therefore human developers cannot be held responsible",
      "All AI systems should be permanently shut down because they inevitably produce harmful biased outcomes",
      "Ethical review boards must approve every individual algorithmic output before it affects any real person"
    ],correct:1,explanation:"Algorithmic displacement of responsibility occurs when developers deflect moral accountability onto the algorithm itself — framing autonomous systems as independent moral agents beyond human control.",reference:"Floridi, L., & Taddeo, M. (2016).",tags:["AI-ethics","displacement-responsibility"]},

  {id:"md_088",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"How do platform 'like' and 'share' features enable moral disengagement among users who amplify harmful content?",
    options:[
      "By requiring users to write a detailed ethical justification before every like or share action they perform",
      "By reducing sharing to a single-click action that minimises reflection on the consequences of amplification",
      "By displaying comprehensive impact metrics showing exactly how many people will be harmed by each share",
      "By automatically blocking all content that could potentially cause harm before any user can interact with it"
    ],correct:1,explanation:"One-click sharing minimises moral reflection — the frictionless design enables distortion of consequences ('I'm just sharing, not creating harm') and diffusion of responsibility across the sharing network.",reference:"Crockett, M. J. (2017).",tags:["affordances","sharing"]},

  {id:"md_089",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Developmental research suggests that the peak of moral disengagement in early adolescence corresponds to which concurrent developmental process?",
    options:[
      "The completion of prefrontal cortex myelination that provides full adult-level cognitive control capacity",
      "Heightened sensitivity to peer influence alongside immature cognitive control and moral reasoning systems",
      "The complete maturation of all brain regions involved in empathy, perspective-taking, and self-regulation",
      "A developmentally programmed decline in peer influence that reaches its lowest point during early adolescence"
    ],correct:1,explanation:"The early adolescent peak in moral disengagement corresponds to heightened peer sensitivity, immature prefrontal cognitive control, and developing moral reasoning — creating a vulnerability window.",reference:"Steinberg, L. (2008); Paciello, M., et al. (2008).",tags:["developmental","peer-influence"]},

  {id:"md_090",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Cultural research comparing individualist and collectivist societies finds that moral disengagement mechanisms differ primarily in:",
    options:[
      "Collectivist cultures showing zero moral disengagement because strong group bonds prevent all antisocial acts",
      "The relative emphasis on individual versus collective responsibility mechanisms across cultural contexts",
      "Individualist cultures showing zero moral disengagement because personal accountability eliminates all need",
      "Both cultures using identical mechanisms with no measurable cultural variation in any research findings"
    ],correct:1,explanation:"Cultural research shows individualist cultures emphasise personal-level mechanisms (moral justification) while collectivist cultures show stronger collective mechanisms (displacement to group leaders, diffusion).",reference:"Caprara, G. V., et al. (2014).",tags:["cultural","comparison"]},

  {id:"md_091",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Alternative measurement approaches to self-report scales for moral disengagement include vignette-based assessments and implicit association tests.",
    options:["True","False"],correct:0,explanation:"Researchers have developed vignette-based measures (presenting scenarios for evaluation) and implicit measures to address social desirability bias in self-report moral disengagement scales.",reference:"Hymel, S., et al. (2005).",tags:["measurement","alternatives"]},

  {id:"md_092",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and guilt is best described as:",
    options:[
      "Moral disengagement increases guilt, which in turn motivates more aggressive behaviour as an outlet",
      "Moral disengagement pre-emptively neutralises anticipated guilt, reducing the emotional cost of harmful action",
      "Moral disengagement and guilt are completely independent constructs with no empirical relationship at all",
      "Guilt always overrides moral disengagement regardless of how strongly disengagement mechanisms are activated"
    ],correct:1,explanation:"Moral disengagement functions as a pre-emptive guilt neutraliser — by cognitively restructuring harmful conduct before or during the act, anticipated guilt is reduced, lowering the emotional barrier.",reference:"Bandura, A. (2002).",tags:["guilt","neutralisation"]},

  {id:"md_093",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement in organisational whistleblowing suppression functions through which combined mechanisms?",
    options:[
      "Moral justification of the original wrongdoing combined with dehumanisation and blame attribution toward the whistleblower",
      "Enhanced organisational transparency that makes whistleblowing unnecessary by preventing all wrongdoing",
      "Complete organisational support for whistleblowers that eliminates any need for moral disengagement",
      "Attribution of blame exclusively toward external competitors rather than toward any internal employees"
    ],correct:0,explanation:"Organisations suppress whistleblowing through combined mechanisms — justifying the original wrongdoing, dehumanising the whistleblower ('disloyal,' 'traitor'), and attributing blame to them for 'causing problems.'",reference:"Miceli, M. P., et al. (2008).",tags:["whistleblowing","combined-mechanisms"]},

  {id:"md_094",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Conspiracy theories specifically leverage the moral disengagement mechanism of 'attribution of blame' by:",
    options:[
      "Encouraging followers to accept personal responsibility for all negative events in their own lives",
      "Framing alleged conspirators as the source of all harm, making aggressive action against them seem defensive",
      "Promoting nuanced analysis of complex social problems that avoids simplistic assignment of blame",
      "Attributing all responsibility to random chance rather than to any identifiable individuals or organisations"
    ],correct:1,explanation:"Conspiracy theories use attribution of blame by identifying specific groups as responsible for all perceived harms — framing aggression against these targets as defensive and justified rather than offensive.",reference:"Douglas, K. M., et al. (2019).",tags:["conspiracy","blame-attribution"]},

  {id:"md_095",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Content moderation workers who develop moral disengagement as a coping strategy may become less accurate in identifying harmful content over time.",
    options:["True","False"],correct:0,explanation:"Moral disengagement as a coping strategy — emotionally distancing from content — can lead to desensitisation that impairs accurate identification of harmful content, reducing moderation quality over time.",reference:"Roberts, S. T. (2019).",tags:["content-moderation","accuracy"]},

  {id:"md_096",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Bystanders to cyberbullying use which moral disengagement mechanism most frequently to justify inaction?",
    options:[
      "Moral justification, by arguing that the victim deserves the aggression they are receiving from perpetrators",
      "Diffusion of responsibility, by reasoning that other witnesses are more capable of intervening effectively",
      "Euphemistic labelling, by describing severe harassment as merely 'banter' or 'joking around' online",
      "Dehumanisation, by viewing all parties involved as less than human and therefore unworthy of any concern"
    ],correct:1,explanation:"Diffusion of responsibility is the most frequently reported bystander mechanism — 'others will help,' 'someone more qualified should intervene,' 'it's not my responsibility' — reducing individual obligation.",reference:"Bastiaensens, S., et al. (2014).",tags:["bystander","diffusion"]},

  {id:"md_097",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"'Prosocial moral disengagement' in online vigilantism creates which ethical paradox?",
    options:[
      "Vigilantes behave entirely ethically and create no harm because their intentions are genuinely prosocial",
      "The same cognitive mechanisms that enable harmful aggression are used to justify ostensibly justice-serving acts",
      "Online vigilantism never involves moral disengagement because all participants are motivated by pure altruism",
      "Prosocial moral disengagement only occurs offline and has no relevance to digital vigilantism contexts"
    ],correct:1,explanation:"The paradox is that moral justification, dehumanisation of targets, and distortion of consequences — the same mechanisms enabling harmful aggression — are deployed in service of perceived justice.",reference:"Bandura, A. (2016).",tags:["prosocial","paradox"]},

  {id:"md_098",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In automated decision-making, 'responsibility gaps' facilitate moral disengagement because:",
    options:[
      "Clear lines of accountability exist for every algorithmic decision from initial design to final output",
      "No single individual or entity is clearly accountable when autonomous systems produce harmful outcomes",
      "Users of automated systems always accept full responsibility for every output the system generates",
      "Government regulations have closed all accountability gaps in automated decision-making worldwide"
    ],correct:1,explanation:"Responsibility gaps in automated systems mean that developers, deployers, and operators can each disclaim responsibility — the distributed nature of AI development enables displacement at every level.",reference:"Matthias, A. (2004).",tags:["automated-decisions","responsibility-gap"]},

  {id:"md_099",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in social media harassment is particularly facilitated by the platform feature of:",
    options:[
      "Profile verification badges that confirm users' real identities and professional credentials publicly",
      "Pseudonymous accounts that create psychological distance between users' real identity and online actions",
      "Two-factor authentication that adds an extra security layer to protect user accounts from compromise",
      "Accessibility features that make platforms usable for individuals with visual or hearing impairments"
    ],correct:1,explanation:"Pseudonymity facilitates moral disengagement by creating psychological distance — users can separate their 'real self' from their online actions, enabling compartmentalisation and reduced self-sanctions.",reference:"Suler, J. (2004).",tags:["social-media","pseudonymity"]},

  {id:"md_100",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'graduated engagement' model of online moral disengagement describes how individuals:",
    options:[
      "Immediately adopt all eight moral disengagement mechanisms simultaneously upon their first online interaction",
      "Progressively adopt stronger moral disengagement strategies as they escalate from mild to severe aggression",
      "Never change their level of moral disengagement regardless of context, experience, or social environment",
      "Gradually decrease their moral disengagement over time as they become more experienced internet users"
    ],correct:1,explanation:"The graduated engagement model describes how individuals progressively adopt stronger disengagement mechanisms — beginning with euphemistic labelling and escalating to dehumanisation as behaviour intensifies.",reference:"Bandura, A. (1999).",tags:["graduated","escalation"]},

  {id:"md_101",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement in online forums can be reduced by platform designs that make users' identities and reputations more visible and persistent.",
    options:["True","False"],correct:0,explanation:"Design features that increase identity persistence and reputation visibility (e.g., post history, reputation scores) can reduce moral disengagement by strengthening self-regulatory mechanisms and accountability.",reference:"Kiesler, S., et al. (2012).",tags:["forums","design"]},

  {id:"md_102",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Leadership's role in facilitating collective moral disengagement in online communities is most dangerous when leaders:",
    options:[
      "Actively challenge group norms that justify harmful behaviour and promote empathic perspective-taking",
      "Provide sophisticated moral justifications that frame out-group aggression as necessary community defence",
      "Refuse to take any position on group conflicts and remain completely silent about all ethical questions",
      "Implement transparent moderation policies that hold all community members equally accountable for actions"
    ],correct:1,explanation:"Leadership-driven collective disengagement is most dangerous when leaders provide sophisticated moral justifications — framing aggression as community defence, dehumanising targets as existential threats.",reference:"Bandura, A. (1999).",tags:["leadership","justification"]},

  {id:"md_103",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Tech companies demonstrate 'advantageous comparison' as a moral disengagement mechanism when they:",
    options:[
      "Transparently compare their safety practices against industry best standards to identify improvement areas",
      "Compare their harms to worse hypothetical scenarios to make their own harmful practices seem acceptable",
      "Invest heavily in safety research and proactively address all identified harms before public disclosure",
      "Collaborate openly with researchers and regulators to develop evidence-based platform safety solutions"
    ],correct:1,explanation:"Tech companies use advantageous comparison by comparing their harms to worse scenarios — 'at least we moderate more than platform X' or 'traditional media was worse' — minimising their own responsibility.",reference:"Bandura, A. (1999).",tags:["institutional","advantageous-comparison"]},

  {id:"md_104",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement in political extremism is uniquely powerful because it combines which mechanisms in a mutually reinforcing system?",
    options:[
      "Only euphemistic labelling, without any other mechanisms playing a measurable contributing role",
      "Moral justification of violence, dehumanisation of enemies, and displacement onto a transcendent authority",
      "Exclusively distortion of consequences, with all other mechanisms being irrelevant to political contexts",
      "Only diffusion of responsibility, because political actors always operate alone without group support"
    ],correct:1,explanation:"Political extremism combines moral justification (sacred cause), dehumanisation (subhuman enemies), and displacement (divine/ideological mandate) in a mutually reinforcing system that enables extreme violence.",reference:"Bandura, A. (2004).",tags:["political-extremism","combined-mechanisms"]},

  {id:"md_105",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement can occur at both the individual level and the organisational/institutional level.",
    options:["True","False"],correct:0,explanation:"Moral disengagement operates at multiple levels — individual (personal cognitive distortions), group (collective justifications), and institutional (organisational policies and culture that normalise harm).",reference:"Bandura, A. (2016); Moore, C. (2015).",tags:["levels","institutional"]},

  {id:"md_106",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In AI ethics, the 'many hands problem' facilitates moral disengagement because it creates a situation where:",
    options:[
      "A single identifiable individual bears complete and sole responsibility for every algorithmic outcome",
      "Responsibility is distributed across many contributors so that no one person feels morally accountable",
      "Too many people are involved in ethical review, causing excessive caution that prevents all AI deployment",
      "All AI development teams consist of exactly one person who makes every design decision independently"
    ],correct:1,explanation:"The 'many hands problem' (Thompson, 1980) describes how AI development distributes responsibility across designers, engineers, data collectors, and managers — enabling diffusion of moral responsibility.",reference:"Thompson, D. F. (1980); Nissenbaum, H. (1996).",tags:["AI-ethics","many-hands"]},

  {id:"md_107",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Platform features that enable 'ephemeral content' (disappearing messages) may facilitate moral disengagement by:",
    options:[
      "Creating permanent records that increase accountability and make users more careful about their behaviour",
      "Reducing perceived consequences because content disappears, enabling distortion of harm's lasting impact",
      "Making all content permanently available to law enforcement regardless of user privacy settings or preferences",
      "Increasing user anxiety about content permanence that causes excessive self-censorship on all platforms"
    ],correct:1,explanation:"Ephemeral content features facilitate distortion of consequences — the perception that content 'disappears' reduces awareness of lasting harm (screenshots, psychological impact) and moral accountability.",reference:"Bayer, J. B., et al. (2016).",tags:["affordances","ephemeral"]},

  {id:"md_108",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The developmental trajectory of moral disengagement shows gender differences, with research consistently finding that:",
    options:[
      "Males and females show identical levels and trajectories of moral disengagement across all developmental stages",
      "Males typically show higher levels of moral disengagement than females, with the gap widening in adolescence",
      "Females consistently show much higher moral disengagement than males across all ages and cultural contexts",
      "Gender has been eliminated as a variable in moral disengagement research because it shows no statistical effect"
    ],correct:1,explanation:"Research consistently finds males report higher moral disengagement than females, with the gender gap particularly pronounced during adolescence — possibly reflecting gendered socialisation of aggression.",reference:"Paciello, M., et al. (2008).",tags:["developmental","gender"]},

  {id:"md_109",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Cultural variations in the acceptability of 'honour-based' aggression online demonstrate moral disengagement through:",
    options:[
      "Universal rejection of all forms of honour-based aggression across every cultural context without exception",
      "Moral justification, where aggression is framed as necessary defence of family or community reputation",
      "Complete absence of any cultural influence on moral disengagement patterns in any studied population",
      "Distortion of consequences only, with all other mechanisms being culturally irrelevant in honour contexts"
    ],correct:1,explanation:"Honour-based online aggression demonstrates cultural moral justification — aggression framed as necessary defence of family/community honour makes harmful acts appear morally mandated rather than chosen.",reference:"Cross, S. E., et al. (2014).",tags:["cultural","honour"]},

  {id:"md_110",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"The Mechanisms of Moral Disengagement Scale (MMDS) measures all eight of Bandura's moral disengagement mechanisms as separate subscales.",
    options:["True","False"],correct:0,explanation:"The MMDS and similar scales are designed to measure all eight of Bandura's mechanisms — moral justification, euphemistic labelling, advantageous comparison, diffusion, displacement, distortion, dehumanisation, and attribution of blame.",reference:"Caprara, G. V., et al. (2006).",tags:["measurement","MMDS"]},

  {id:"md_111",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and guilt-proneness suggests that individuals high in guilt-proneness:",
    options:[
      "Are more resistant to moral disengagement because their anticipatory guilt remains a strong deterrent",
      "Are more susceptible to moral disengagement because their guilt is easily neutralised by distortions",
      "Show identical moral disengagement levels to those with low guilt-proneness across all measured contexts",
      "Never experience moral disengagement under any circumstances because guilt completely prevents it always"
    ],correct:0,explanation:"High guilt-proneness serves as a protective factor — these individuals are more resistant to moral disengagement because their strong anticipatory guilt maintains moral self-sanctions even under pressure.",reference:"Tangney, J. P., et al. (2007).",tags:["guilt-proneness","protective"]},

  {id:"md_112",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement operates differently in whistleblowing contexts for internal versus external whistleblowers because:",
    options:[
      "Internal whistleblowers never face any organisational retaliation or moral disengagement from colleagues",
      "External whistleblowers face stronger dehumanisation because they are framed as betraying the organisation publicly",
      "Both internal and external whistleblowers are treated identically with full institutional support in all cases",
      "Whistleblowing has been eliminated in modern organisations through comprehensive ethical governance structures"
    ],correct:1,explanation:"External whistleblowers face stronger dehumanisation and blame attribution because going public is framed as betrayal — 'washing dirty laundry' — triggering more intense organisational moral disengagement.",reference:"Jubb, P. B. (1999).",tags:["whistleblowing","internal-external"]},

  {id:"md_113",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Online conspiracy communities demonstrate 'euphemistic labelling' when they describe their activities as:",
    options:[
      "Harmful harassment campaigns designed to intimidate and silence perceived conspirators and their supporters",
      "'Research,' 'truth-seeking,' and 'digital investigation' rather than harassment, doxxing, and coordinated abuse",
      "Illegal acts that violate multiple national laws and international human rights conventions and treaties",
      "Morally wrong behaviour that they freely acknowledge but continue to engage in despite that recognition"
    ],correct:1,explanation:"Conspiracy communities use euphemistic labelling — describing harassment as 'research,' doxxing as 'investigation,' and coordinated abuse as 'truth-seeking' — sanitising harmful activities linguistically.",reference:"Bandura, A. (1999); Douglas, K. M., et al. (2019).",tags:["conspiracy","euphemistic-labelling"]},

  {id:"md_114",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Content moderation workers' moral disengagement may be reduced through regular psychological debriefing, peer support, and limited exposure shifts.",
    options:["True","False"],correct:0,explanation:"Evidence suggests that regular debriefing, peer support structures, rotation schedules that limit continuous exposure, and access to mental health professionals can reduce moderator moral disengagement.",reference:"Steiger, M., et al. (2021).",tags:["content-moderation","support"]},

  {id:"md_115",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement facilitates bystander inaction through 'distortion of consequences' when witnesses believe that:",
    options:[
      "The victim is experiencing severe and lasting psychological harm that requires immediate urgent intervention",
      "Online harassment is not 'real' harm because it happens through screens rather than in physical spaces",
      "Every bystander has a personal moral obligation to intervene in every instance of online aggression observed",
      "Platform moderation teams are completely ineffective and therefore reporting has no value whatsoever"
    ],correct:1,explanation:"Bystanders distort consequences by minimising online harm — 'it's just words on a screen,' 'they can just log off' — which reduces the perceived urgency and moral obligation to intervene.",reference:"Machackova, H., et al. (2015).",tags:["bystander","distortion"]},

  {id:"md_116",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Online vigilantes who doxx perceived wrongdoers demonstrate prosocial moral disengagement most clearly through:",
    options:[
      "Acknowledging that doxxing is harmful regardless of the target and seeking legal alternatives instead",
      "Moral justification framing exposure of personal information as necessary accountability for wrongdoing",
      "Recognising that vigilante justice creates more harm than formal legal processes and choosing not to act",
      "Seeking the target's consent before publishing any personal information about them on public platforms"
    ],correct:1,explanation:"Prosocial moral disengagement in online vigilantism uses moral justification — framing doxxing as 'accountability,' 'justice,' or 'public safety' — to sanitise behaviour that causes genuine harm.",reference:"Trottier, D. (2017).",tags:["prosocial","doxxing"]},

  {id:"md_117",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In automated hiring systems, moral disengagement operates when organisations claim that algorithmic decisions are:",
    options:[
      "Inherently biased and require constant human oversight to prevent discriminatory hiring outcomes",
      "Objective and unbiased by nature, displacing responsibility for discriminatory outcomes onto 'neutral' technology",
      "Always less accurate than human decision-making and should therefore never be used in any hiring context",
      "Designed to deliberately discriminate against specific groups as an explicit feature of the system design"
    ],correct:1,explanation:"Organisations morally disengage by framing algorithmic hiring as 'objective' — displacing responsibility for discriminatory outcomes onto the technology and distorting consequences for affected groups.",reference:"Raghavan, M., et al. (2020).",tags:["automated-decisions","hiring"]},

  {id:"md_118",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement mechanisms can operate both before harmful behaviour (prospective) and after it has occurred (retrospective).",
    options:["True","False"],correct:0,explanation:"Moral disengagement operates prospectively (enabling behaviour by neutralising anticipated guilt) and retrospectively (reducing guilt after harm has occurred through post-hoc justification and minimisation).",reference:"Bandura, A. (2002).",tags:["temporal","prospective-retrospective"]},

  {id:"md_119",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in workplace cyberbullying is facilitated by 'displacement of responsibility' when perpetrators argue that:",
    options:[
      "They are personally responsible for all of their behaviour and should face full accountability for actions",
      "Management pressure, organisational culture, or competitive demands forced them to behave aggressively",
      "Workplace cyberbullying does not exist and all negative interactions are productive professional feedback",
      "They have never used digital technology in the workplace and therefore could not have perpetrated any harm"
    ],correct:1,explanation:"Displacement onto management pressure ('my boss made me do it'), organisational culture ('everyone communicates this way'), or competitive demands enables workplace cyberbullying perpetrators to deny responsibility.",reference:"D'Cruz, P., & Noronha, E. (2013).",tags:["workplace","displacement"]},

  {id:"md_120",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral bureaucracy' concept describes how organisational structures facilitate moral disengagement by:",
    options:[
      "Creating clear personal accountability for every individual decision within the organisation's hierarchy",
      "Fragmenting harmful processes across roles so that no individual sees the full consequences of their work",
      "Encouraging employees to question all organisational decisions through robust whistleblower protections",
      "Eliminating all hierarchical structures to ensure completely equal moral responsibility across all staff"
    ],correct:1,explanation:"Moral bureaucracy (Bandura, 1999) describes how organisations fragment harmful processes across departments and roles — each person contributes a small piece, enabling diffusion and displacement of responsibility.",reference:"Bandura, A. (1999); Arendt, H. (1963).",tags:["organisational","bureaucracy"]},

  {id:"md_121",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In gaming contexts, moral disengagement through 'advantageous comparison' typically involves players arguing that:",
    options:[
      "Their toxic behaviour is significantly more harmful than all other forms of online aggression combined",
      "Their behaviour is acceptable because other players do much worse things without facing any consequences",
      "All gaming behaviour is equally harmful regardless of severity, context, or the nature of the interaction",
      "They should be held to a higher standard than all other players because of their expertise and experience"
    ],correct:1,explanation:"Advantageous comparison in gaming involves comparing one's behaviour to worse examples — 'I only trash-talk, I don't doxx people' — making one's own toxic behaviour seem acceptable by contrast.",reference:"Hartmann, T., & Vorderer, P. (2010).",tags:["gaming","advantageous-comparison"]},

  {id:"md_122",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Research has shown that moral disengagement mediates the relationship between personality traits (such as the Dark Triad) and cyber-aggression perpetration.",
    options:["True","False"],correct:0,explanation:"Moral disengagement has been shown to mediate the link between personality traits (narcissism, Machiavellianism, psychopathy) and cyber-aggression — these traits predict disengagement, which in turn predicts aggression.",reference:"Robson, C., & Witenberg, R. T. (2013).",tags:["personality","mediation"]},

  {id:"md_123",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The 'dehumanisation through aggregation' concept in social media describes how moral disengagement is facilitated by:",
    options:[
      "Personalised, empathic engagement with each individual user's unique story, background, and perspective",
      "Viewing targets as statistics, numbers, or usernames rather than as individual human beings with feelings",
      "Platforms providing detailed biographical information about every user to increase mutual understanding",
      "Social media's inherent tendency to humanise all participants through rich multimedia communication tools"
    ],correct:1,explanation:"Social media facilitates dehumanisation through aggregation — seeing targets as part of a faceless mass, reducing them to usernames or statistics rather than recognising individual humanity and suffering.",reference:"Bandura, A. (2016).",tags:["social-media","dehumanisation"]},

  {id:"md_124",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Developmental research on moral disengagement trajectories identifies which subgroup as having the most concerning long-term outcomes?",
    options:[
      "Children who show consistently low moral disengagement that remains stable across the entire developmental span",
      "Children who show high and increasing moral disengagement trajectories that persist into late adolescence",
      "Children who show moderate moral disengagement that decreases naturally with age without any intervention",
      "Children who show high initial moral disengagement that rapidly decreases to zero by early adolescence"
    ],correct:1,explanation:"The 'high-increasing' trajectory subgroup — showing persistently high and escalating moral disengagement — demonstrates the worst long-term outcomes for aggression and antisocial behaviour.",reference:"Paciello, M., et al. (2008).",tags:["developmental","trajectories"]},

  {id:"md_125",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The moral disengagement concept of 'gradual moral disengagement' is important because it explains how individuals can:",
    options:[
      "Immediately and suddenly adopt extreme moral positions without any preceding escalation or process",
      "Progressively engage in increasingly harmful behaviour through small incremental steps that each seem minor",
      "Maintain perfectly consistent moral standards that never change regardless of circumstances or context",
      "Become completely immune to all moral disengagement mechanisms through a single educational intervention"
    ],correct:1,explanation:"Gradual moral disengagement explains how individuals progress from minor transgressions to severe harm through incremental steps — each step seems minor, but the cumulative effect is profound moral shift.",reference:"Bandura, A. (1999).",tags:["gradual","escalation"]},

  {id:"md_126",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Cultural variations in moral disengagement are most evident in which mechanism across honour-based versus dignity-based cultures?",
    options:[
      "Distortion of consequences, which operates identically in all cultural contexts without any variation",
      "Moral justification, where honour cultures are more likely to justify aggression as protecting reputation",
      "Diffusion of responsibility, which is exclusively used in dignity cultures and never in honour cultures",
      "Euphemistic labelling, which is never observed in any culture regardless of social norms or values"
    ],correct:1,explanation:"Honour-based cultures show stronger moral justification for reputation-defending aggression — maintaining honour is a moral imperative, making aggression in its defence appear morally mandated.",reference:"Cross, S. E., et al. (2014).",tags:["cultural","honour-dignity"]},

  {id:"md_127",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Measurement challenges with moral disengagement in online contexts are compounded by which specific issue?",
    options:[
      "The complete absence of any validated instruments for measuring moral disengagement in any setting",
      "Context-dependency of mechanisms, where the same behaviour may involve different disengagement in different platforms",
      "Universal agreement among researchers about the best measurement approach with no remaining questions",
      "The fact that moral disengagement occurs so rarely online that statistical analysis is not feasible"
    ],correct:1,explanation:"Online moral disengagement measurement is complicated by context-dependency — the same aggressive behaviour may involve different mechanisms on different platforms (e.g., anonymous vs. identified contexts).",reference:"Meter, D. J., & Bauman, S. (2018).",tags:["measurement","context-dependency"]},

  {id:"md_128",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement is a stable personality trait that cannot be influenced by situational factors or environmental context.",
    options:["True","False"],correct:1,explanation:"Moral disengagement is influenced by both dispositional and situational factors — context (anonymity, group norms, authority pressure) can significantly increase or decrease moral disengagement levels.",reference:"Moore, C. (2015).",tags:["situational","dispositional"]},

  {id:"md_129",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and shame-proneness suggests that shame-prone individuals may paradoxically:",
    options:[
      "Show lower moral disengagement because shame always motivates prosocial and ethical behaviour changes",
      "Show higher moral disengagement because shame triggers defensive reactions that require cognitive distortion",
      "Have no relationship with moral disengagement because shame and moral cognition are entirely independent",
      "Never engage in any harmful online behaviour because shame serves as a perfect and complete deterrent"
    ],correct:1,explanation:"Shame-prone individuals may paradoxically show higher moral disengagement because shame triggers defensive reactions (anger, blame externalisation) that require cognitive distortions to manage.",reference:"Tangney, J. P., & Dearing, R. L. (2002).",tags:["shame-proneness","paradox"]},

  {id:"md_130",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in social media moderation teams can lead to which organisational problem?",
    options:[
      "Excessive sensitivity to harmful content that results in over-removal of benign and harmless material",
      "Inconsistent enforcement standards as moderators normalise increasingly severe content as acceptable",
      "Perfect calibration of moderation decisions that eliminates all false positive and false negative errors",
      "Complete elimination of moderator bias that produces universally consistent and fair content decisions"
    ],correct:1,explanation:"Moral disengagement in moderation teams can lead to inconsistent enforcement — as moderators become desensitised and normalise severe content, their threshold for action rises, creating inconsistency.",reference:"Roberts, S. T. (2019).",tags:["content-moderation","inconsistency"]},

  {id:"md_131",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'banality of evil' concept (Arendt) relates to moral disengagement in digital contexts because it illustrates how:",
    options:[
      "Only exceptionally evil individuals are capable of causing harm in any context, online or offline",
      "Ordinary people can participate in systemic harm through bureaucratic role-division and moral displacement",
      "Evil actions online are always dramatic, obvious, and easily identified by all observers without exception",
      "Digital technology has eliminated all capacity for ordinary people to participate in harmful systems"
    ],correct:1,explanation:"Arendt's 'banality of evil' parallels digital moral disengagement — ordinary people contribute to systemic online harm through fragmented roles, displacement of responsibility, and bureaucratic distance.",reference:"Arendt, H. (1963); Bandura, A. (2016).",tags:["banality-of-evil","systemic"]},

  {id:"md_132",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in online political discourse is facilitated by which common rhetorical strategy?",
    options:[
      "Carefully citing peer-reviewed evidence to support all claims made during political online discussions",
      "Dehumanising political opponents through derogatory labels that reduce them to a vilified out-group",
      "Engaging in respectful dialogue that acknowledges the legitimate concerns of all political perspectives",
      "Avoiding all political discussion online and only sharing non-controversial entertainment content"
    ],correct:1,explanation:"Dehumanisation through derogatory labelling of political opponents ('snowflakes,' 'fascists,' 'NPCs') reduces them to vilified stereotypes, enabling moral disengagement from the harm of political aggression.",reference:"Waytz, A., & Schroeder, J. (2014).",tags:["political","dehumanisation"]},

  {id:"md_133",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Interventions targeting moral disengagement in cyberbullying contexts have shown promise in reducing both disengagement cognitions and subsequent aggressive behaviour.",
    options:["True","False"],correct:0,explanation:"Research supports interventions targeting moral disengagement — programmes that challenge cognitive distortions and build empathy show reductions in both disengagement cognitions and associated aggressive behaviour.",reference:"Williford, A., et al. (2013).",tags:["intervention","effectiveness"]},

  {id:"md_134",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in AI-assisted content moderation arises when human moderators defer excessively to AI recommendations because:",
    options:[
      "They maintain full personal responsibility for every decision regardless of the AI's recommendation",
      "They displace moral responsibility onto the algorithm, reducing their sense of personal accountability",
      "AI recommendations are always perfectly accurate and therefore require no human critical evaluation",
      "Human moderators always override AI recommendations because they distrust all automated systems"
    ],correct:1,explanation:"Excessive deference to AI recommendations enables displacement of responsibility — 'the algorithm flagged it' or 'the algorithm cleared it' — reducing moderators' sense of personal moral accountability.",reference:"Green, B., & Chen, Y. (2019).",tags:["AI-moderation","deference"]},

  {id:"md_135",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral disengagement chain' in online hate groups describes how new members are socialised through:",
    options:[
      "Immediate exposure to the most extreme content to test their commitment from the very first interaction",
      "Progressive normalisation from mild in-group humour to dehumanising rhetoric to endorsement of violence",
      "Comprehensive ethics training that ensures all new members understand and reject all harmful behaviours",
      "Random assignment to different moral disengagement conditions as part of controlled research experiments"
    ],correct:1,explanation:"The moral disengagement chain describes progressive socialisation — new members are gradually exposed to escalating content, from humour to dehumanisation to violence endorsement, normalising each step.",reference:"Moghaddam, F. M. (2005).",tags:["hate-groups","socialisation"]},

  {id:"md_136",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement through 'euphemistic labelling' is particularly prevalent in online gaming because aggressive behaviours are commonly described as:",
    options:[
      "Unacceptable harassment that violates community standards and should result in permanent account suspension",
      "'Trash talk,' 'competitive banter,' or 'tactical communication' rather than verbal abuse or harassment",
      "Serious misconduct that gaming companies actively prosecute through formal legal channels in all cases",
      "Behaviours that all players unanimously condemn and refuse to engage in across all gaming communities"
    ],correct:1,explanation:"Gaming culture normalises aggression through euphemistic labelling — 'trash talk,' 'competitive banter,' 'tactical mind games' — sanitising what would be recognised as verbal abuse in other contexts.",reference:"Tang, W. Y., & Fox, J. (2016).",tags:["gaming","euphemistic-labelling"]},

  {id:"md_137",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Collective moral disengagement in online communities can be stronger than individual moral disengagement because group processes amplify cognitive distortions.",
    options:["True","False"],correct:0,explanation:"Group processes — conformity, groupthink, social validation — can amplify moral disengagement beyond individual levels, as members reinforce each other's justifications and distortions.",reference:"Bandura, A. (1999).",tags:["collective","amplification"]},

  {id:"md_138",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in bystander contexts is reduced when platforms implement which design feature?",
    options:[
      "Removing all intervention tools to prevent bystanders from interfering in conflicts between other users",
      "Providing clear, accessible intervention options with feedback confirming that the report has been received",
      "Hiding all conflict from bystanders so that they never become aware that any aggression is occurring",
      "Automatically banning all bystanders who do not intervene within thirty seconds of witnessing aggression"
    ],correct:1,explanation:"Clear, accessible intervention tools with feedback reduce bystander disengagement by providing concrete action options and confirming that reports are received — reducing diffusion of responsibility.",reference:"Schoenebeck, S., et al. (2021).",tags:["bystander","platform-design"]},

  {id:"md_139",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'dark participation' describes how some online users engage in prosocial moral disengagement by:",
    options:[
      "Contributing constructive, empathic, and supportive comments that genuinely help distressed individuals",
      "Participating in harassment campaigns framed as accountability, justice, or community protection activities",
      "Abstaining from all online participation to avoid any possibility of causing or witnessing harmful content",
      "Reporting their own content for moderation review to ensure it meets community standards before publication"
    ],correct:1,explanation:"'Dark participation' (Quandt, 2018) describes how users engage in destructive behaviour framed as prosocial — harassment campaigns disguised as 'accountability' rely on prosocial moral disengagement.",reference:"Quandt, T. (2018).",tags:["dark-participation","prosocial"]},

  {id:"md_140",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In automated decision-making, the 'automation bias' facilitates moral disengagement because users tend to:",
    options:[
      "Critically evaluate every automated output and override decisions they consider morally problematic",
      "Over-trust automated recommendations and under-scrutinise potentially harmful algorithmic outcomes",
      "Reject all automated recommendations regardless of their accuracy or appropriateness in each situation",
      "Develop complete expertise in the technical specifications of every algorithm they interact with daily"
    ],correct:1,explanation:"Automation bias — over-trusting automated outputs — facilitates displacement of responsibility: users under-scrutinise harmful algorithmic decisions because 'the computer decided,' reducing moral engagement.",reference:"Skitka, L. J., et al. (1999).",tags:["automated-decisions","automation-bias"]},

  {id:"md_141",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in workplace digital communication is uniquely problematic because unlike face-to-face interactions:",
    options:[
      "Digital messages always convey tone, emotion, and intent more clearly than face-to-face conversations",
      "Reduced non-verbal cues make it easier to dehumanise colleagues and distort the consequences of messages",
      "All workplace digital communication is automatically monitored and reviewed for aggressive content",
      "Employees never use digital technology for any work-related communication in modern organisations"
    ],correct:1,explanation:"Reduced non-verbal cues in workplace digital communication facilitate dehumanisation of colleagues and distortion of consequences — harmful messages feel less 'real' without seeing the recipient's reaction.",reference:"Byron, K. (2008).",tags:["workplace","digital-communication"]},

  {id:"md_142",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral disengagement paradox' in platform governance refers to the tension between:",
    options:[
      "Platforms needing to engage with harmful content to moderate it while also needing to disengage from its emotional impact",
      "Users wanting both complete freedom of expression and comprehensive protection from all harmful content",
      "Governments simultaneously demanding more censorship and more free speech from all platform companies",
      "Researchers wanting both larger and smaller sample sizes for moral disengagement studies simultaneously"
    ],correct:0,explanation:"The governance paradox describes how platforms must engage with harmful content to moderate it effectively while also needing to manage moral disengagement among moderators exposed to that content.",reference:"Gillespie, T. (2018).",tags:["governance","paradox"]},

  {id:"md_143",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement can explain why some individuals who would never bully someone face-to-face engage in cyber-aggression without apparent remorse.",
    options:["True","False"],correct:0,explanation:"Online features (anonymity, distance) activate moral disengagement mechanisms not triggered offline — individuals who would not bully face-to-face can disengage morally online, enabling aggression without remorse.",reference:"Bandura, A. (2016).",tags:["online-offline","differential"]},

  {id:"md_144",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Institutional moral disengagement in social media companies regarding child safety most commonly uses which mechanism?",
    options:[
      "Transparent acknowledgment that platform design creates risks and proactive investment in child protection",
      "Displacement of responsibility onto parents and schools while minimising platform design contributions to harm",
      "Independent safety audits that hold the company fully accountable for all child safety outcomes on platform",
      "Immediate removal of all features that could potentially be used to contact or communicate with minors"
    ],correct:1,explanation:"Tech companies commonly displace responsibility for child safety onto parents and schools — 'parental supervision is key' — while minimising their own design choices that create or amplify risks.",reference:"Livingstone, S., & Helsper, E. J. (2008).",tags:["institutional","child-safety"]},

  {id:"md_145",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in political extremist forums is reinforced through 'echo chamber effects' because:",
    options:[
      "Exposure to diverse perspectives naturally challenges and weakens moral disengagement in all members",
      "Selective exposure to agreeing voices provides social validation for moral justifications and dehumanisation",
      "Political forums always contain balanced representation of all viewpoints that moderates extreme positions",
      "Algorithm-free platform designs prevent any content curation that could create ideological homogeneity"
    ],correct:1,explanation:"Echo chambers reinforce moral disengagement by providing constant social validation — hearing others use the same justifications and dehumanising language normalises and strengthens individual disengagement.",reference:"Sunstein, C. R. (2017).",tags:["political-extremism","echo-chambers"]},

  {id:"md_146",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral buffer' concept describes how intermediary technologies in automated decision-making:",
    options:[
      "Increase moral sensitivity by making decision-makers directly confront the human impact of every choice",
      "Create psychological distance between decision-makers and affected individuals, reducing empathic engagement",
      "Eliminate all moral complexity by providing perfectly clear ethical guidelines for every possible situation",
      "Always improve decision quality by removing human cognitive biases from every automated assessment process"
    ],correct:1,explanation:"The 'moral buffer' describes how technology interposes between decision-makers and affected individuals — screens, dashboards, and algorithms create distance that reduces empathic engagement and moral weight.",reference:"Bandura, A. (2016).",tags:["automated-decisions","moral-buffer"]},

  {id:"md_147",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Developmental research shows that children can begin to demonstrate moral disengagement mechanisms as early as primary school age.",
    options:["True","False"],correct:0,explanation:"Research shows moral disengagement mechanisms emerge in primary school years, with children as young as 8-9 demonstrating moral justification, blame attribution, and distortion of consequences.",reference:"Hymel, S., et al. (2005).",tags:["developmental","early-onset"]},

  {id:"md_148",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Cultural research on moral disengagement in East Asian online contexts finds that 'loss of face' dynamics specifically amplify:",
    options:[
      "Moral justification, because protecting face is framed as a moral imperative justifying aggressive defence",
      "Distortion of consequences only, with no other mechanisms being culturally relevant in East Asian contexts",
      "Complete absence of moral disengagement because collectivist norms prevent all cognitive distortion",
      "Exclusively dehumanisation, which is the only mechanism observed across all East Asian cultural contexts"
    ],correct:0,explanation:"In East Asian contexts, loss of face can amplify moral justification — protecting one's own or others' face is framed as a moral duty, justifying aggressive responses to perceived face-threats online.",reference:"Kim, Y. H., & Cohen, D. (2010).",tags:["cultural","face"]},

  {id:"md_149",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Alternative scales to Bandura's original Moral Disengagement Scale have been developed primarily to address which limitation?",
    options:[
      "The original scale's items being too specific to online contexts and having no offline applicability",
      "The original scale's focus on physical aggression and limited applicability to cyber-aggression and relational harm",
      "The original scale being too short with insufficient items to produce reliable measurement of the construct",
      "The original scale only measuring one of the eight mechanisms rather than the complete theoretical framework"
    ],correct:1,explanation:"The original MDS focused on physical aggression — alternative scales have been developed to better capture moral disengagement in cyber-aggression, relational aggression, and domain-specific contexts.",reference:"Boardley, I. D., & Kavussanu, M. (2007).",tags:["measurement","alternative-scales"]},

  {id:"md_150",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'selective moral disengagement' emphasises that individuals typically:",
    options:[
      "Disengage their moral standards uniformly across all domains, contexts, and types of behaviour equally",
      "Apply moral disengagement selectively to specific behaviours or targets while maintaining moral standards elsewhere",
      "Either fully engage or fully disengage morally with no intermediate states or selective application",
      "Never demonstrate moral disengagement in any context because moral standards are always rigidly maintained"
    ],correct:1,explanation:"Selective moral disengagement is a key feature — individuals do not abandon morality entirely but selectively disengage for specific targets, contexts, or behaviours while maintaining standards elsewhere.",reference:"Bandura, A. (2002).",tags:["selective","domain-specific"]},

  {id:"md_151",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in online forum moderation by volunteer moderators can manifest when moderators:",
    options:[
      "Apply community guidelines consistently and transparently to all users regardless of personal preference",
      "Use their power to selectively enforce rules against out-group members while morally justifying the bias",
      "Resign from their moderation role when they recognise personal biases affecting their decision-making",
      "Seek regular feedback from community members to ensure moderation decisions are fair and proportionate"
    ],correct:1,explanation:"Volunteer moderators can demonstrate moral disengagement through selective enforcement — using moral justification to treat in-group and out-group members differently while framing bias as 'maintaining standards.'",reference:"Seering, J., et al. (2019).",tags:["forums","moderator-bias"]},

  {id:"md_152",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement mediates the relationship between empathy deficits and cyber-aggression, meaning low empathy leads to disengagement which then enables aggression.",
    options:["True","False"],correct:0,explanation:"Research supports the mediating role of moral disengagement between empathy deficits and cyber-aggression — low empathy facilitates cognitive distortions that then enable and maintain aggressive behaviour.",reference:"Barchia, K., & Bussey, K. (2011).",tags:["empathy","mediation"]},

  {id:"md_153",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In AI ethics, the concept of 'ethics washing' represents institutional moral disengagement because it involves:",
    options:[
      "Genuine, substantive engagement with ethical concerns that leads to meaningful changes in AI design practices",
      "Superficial adoption of ethical language and principles without implementing substantive changes to practice",
      "Complete rejection of all ethical frameworks as irrelevant to technology development and deployment decisions",
      "Transparent reporting of all ethical failures and proactive remediation of identified harms to affected users"
    ],correct:1,explanation:"Ethics washing — adopting ethical language and principles superficially without substantive practice changes — represents institutional euphemistic labelling and moral justification to deflect criticism.",reference:"Wagner, B. (2018).",tags:["AI-ethics","ethics-washing"]},

  {id:"md_154",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Research on developmental trajectories of moral disengagement identifies which parenting style as most protective?",
    options:[
      "Authoritarian parenting, which uses strict punishment and surveillance to control all child behaviour",
      "Authoritative parenting, which combines warmth and reasoning with clear expectations and moral discussion",
      "Permissive parenting, which avoids all rules and consequences to maximise child freedom and autonomy",
      "Uninvolved parenting, which provides minimal supervision and allows children complete self-determination"
    ],correct:1,explanation:"Authoritative parenting — combining warmth with reasoning and moral discussion — is most protective against moral disengagement by promoting internalised moral standards and perspective-taking skills.",reference:"Campaert, K., et al. (2017).",tags:["developmental","parenting"]},

  {id:"md_155",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in conspiracy theory communities is reinforced by 'displacement of responsibility' onto which target?",
    options:[
      "Individual community members who are held personally accountable for all group actions and statements",
      "Alleged shadowy elites or secret organisations portrayed as the true source of all societal harm and control",
      "Academic researchers whose peer-reviewed findings are unanimously accepted by the conspiracy community",
      "Platform moderators who are praised for their fair and balanced handling of all conspiracy-related content"
    ],correct:1,explanation:"Conspiracy communities displace responsibility onto alleged shadowy elites ('deep state,' 'cabal') — framing all harmful community actions as defensive responses to these allegedly powerful hidden forces.",reference:"Jolley, D., & Douglas, K. M. (2014).",tags:["conspiracy","displacement"]},

  {id:"md_156",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Reducing moral disengagement through empathy-building interventions can decrease both online bullying perpetration and bystander passivity.",
    options:["True","False"],correct:0,explanation:"Empathy-building interventions that target moral disengagement can reduce both perpetration (by restoring empathic concern for victims) and bystander passivity (by reducing distortion of consequences).",reference:"Barchia, K., & Bussey, K. (2011).",tags:["intervention","empathy"]},

  {id:"md_157",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in content moderation contexts creates an ethical tension between which two organisational needs?",
    options:[
      "The need to attract more users and the need to reduce server maintenance costs across data centres",
      "The need to protect moderator wellbeing and the need to maintain empathic accuracy in content assessment",
      "The need to increase advertising revenue and the need to reduce employee training programme budgets",
      "The need to comply with copyright law and the need to allow users to share third-party creative content"
    ],correct:1,explanation:"There is a tension between protecting moderator wellbeing (which may require emotional distancing) and maintaining empathic accuracy (which requires emotional engagement with content harm).",reference:"Steiger, M., et al. (2021).",tags:["content-moderation","tension"]},

  {id:"md_158",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'moral disengagement cascade' in online mob behaviour describes how:",
    options:[
      "A single individual's moral disengagement gradually reduces over time through natural psychological recovery",
      "Initial moral justifications by leaders trigger progressive collective disengagement that escalates the mob's behaviour",
      "All participants independently arrive at identical moral disengagement mechanisms without any social influence",
      "Platform algorithms automatically generate moral justifications that users passively absorb and internalise"
    ],correct:1,explanation:"The cascade model describes how leaders' initial moral justifications trigger progressive collective disengagement — each member's participation validates others, escalating the mob's behaviour through social proof.",reference:"Bandura, A. (1999).",tags:["cascade","mob-behaviour"]},

  {id:"md_159",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Prosocial moral disengagement in 'cancel culture' is most clearly demonstrated when participants:",
    options:[
      "Carefully consider proportionality and seek the least harmful accountability mechanism available to them",
      "Frame disproportionate harassment as justified accountability, using moral justification to legitimise pile-ons",
      "Engage in constructive dialogue with the person who caused harm to understand their perspective fully",
      "Refuse to participate in collective action and instead address concerns through private communication only"
    ],correct:1,explanation:"Prosocial moral disengagement in cancel culture involves framing disproportionate collective harassment as 'holding people accountable' — moral justification sanitises behaviour that causes significant harm.",reference:"Clark, M. D. (2020).",tags:["prosocial","cancel-culture"]},

  {id:"md_160",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In automated predictive policing systems, moral disengagement enables officers and agencies to:",
    options:[
      "Critically evaluate every algorithmic prediction and override decisions they consider unjust or biased",
      "Defer to algorithmic risk scores while displacing responsibility for discriminatory outcomes onto the system",
      "Reject all technological tools and rely exclusively on traditional investigative methods and intuition",
      "Ensure perfect equity in policing by eliminating all human bias from law enforcement decision-making"
    ],correct:1,explanation:"Predictive policing enables moral disengagement through displacement — officers defer to algorithmic risk scores, displacing responsibility for discriminatory outcomes onto the 'objective' system.",reference:"Richardson, R., et al. (2019).",tags:["automated-decisions","policing"]},

  {id:"md_161",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Group-level moral disengagement in online communities tends to be weaker than individual moral disengagement because group processes moderate extreme positions.",
    options:["True","False"],correct:1,explanation:"Group-level moral disengagement is typically stronger than individual disengagement — group polarisation, conformity, and social validation amplify rather than moderate cognitive distortions.",reference:"Bandura, A. (1999).",tags:["collective","group-processes"]},

  {id:"md_162",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in the context of online misinformation sharing most commonly operates through which mechanism?",
    options:[
      "Full awareness that the information is false combined with deliberate intent to cause maximum harm",
      "Distortion of consequences, believing that sharing false information is harmless because 'it's just information'",
      "Dehumanisation of the information itself, which users view as having feelings that can be hurt",
      "Attribution of blame toward factual information for being too difficult to understand and evaluate"
    ],correct:1,explanation:"Misinformation sharing commonly involves distortion of consequences — 'I'm just sharing,' 'people can decide for themselves,' 'it's just information' — minimising the real-world harm of false claims.",reference:"Wardle, C., & Derakhshan, H. (2017).",tags:["misinformation","distortion"]},

  {id:"md_163",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral disengagement infrastructure' concept describes how platform architectures systematically:",
    options:[
      "Build moral engagement features that promote ethical reflection into every user interaction and decision point",
      "Embed structural features that facilitate moral disengagement at scale through design rather than user choice",
      "Eliminate all possibilities for moral disengagement by requiring real-name identification for every action",
      "Have no influence on moral reasoning because all moral cognition is purely internal and context-independent"
    ],correct:1,explanation:"The concept describes how platform architectures systematically embed features (anonymity, one-click sharing, reduced feedback) that facilitate moral disengagement at scale — it is structural, not individual.",reference:"Zuboff, S. (2019).",tags:["infrastructure","structural"]},

  {id:"md_164",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on moral disengagement and empathy in gaming contexts finds that frequent exposure to in-game violence can:",
    options:[
      "Increase empathy for real-world victims by sensitising players to the consequences of violent behaviour",
      "Reduce empathic responding to real-world violence through desensitisation and normalisation of aggression",
      "Have no measurable effect on empathy because players always distinguish perfectly between games and reality",
      "Completely eliminate all aggressive tendencies in players by providing a safe cathartic outlet for hostility"
    ],correct:1,explanation:"Research suggests repeated exposure to in-game violence can reduce empathic responding through desensitisation and normalisation — facilitating distortion of consequences in real-world contexts.",reference:"Bushman, B. J., & Anderson, C. A. (2009).",tags:["gaming","desensitisation"]},

  {id:"md_165",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Moral disengagement can be measured using physiological indicators such as reduced galvanic skin response to depictions of harm, not just self-report scales.",
    options:["True","False"],correct:0,explanation:"Physiological indicators — including reduced galvanic skin response, attenuated cortisol reactivity, and diminished neural empathy responses — can complement self-report measures of moral disengagement.",reference:"Fanti, K. A., et al. (2009).",tags:["measurement","physiological"]},

  {id:"md_166",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between moral disengagement and guilt-related action tendencies suggests that moral disengagement primarily disrupts:",
    options:[
      "The experience of guilt itself, which cannot occur at all when moral disengagement mechanisms are active",
      "The link between anticipated guilt and behavioural inhibition, enabling action despite residual discomfort",
      "All emotional experience permanently, creating a complete affective void across all life domains",
      "Only positive emotions, leaving negative emotions like anger and fear fully intact and intensified"
    ],correct:1,explanation:"Moral disengagement primarily disrupts the behavioural-inhibition function of anticipated guilt — individuals may still feel some discomfort but the disengagement weakens guilt's power to prevent harmful action.",reference:"Bandura, A. (2002).",tags:["guilt","behavioural-inhibition"]},

  {id:"md_167",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Moral disengagement theory has been applied to understand why tech company employees remain silent about harmful practices through:",
    options:[
      "Enhanced moral sensitivity that makes every employee question all organisational decisions continuously",
      "Institutional displacement ('leadership decided'), diffusion ('everyone's complicit'), and euphemistic labelling",
      "Complete personal satisfaction with all organisational practices and genuine belief that no harm exists",
      "External whistleblower protections that are so comprehensive that silence is never the preferred option"
    ],correct:1,explanation:"Tech employee silence about harmful practices is explained through institutional displacement ('leadership's call'), diffusion ('it's a team decision'), and euphemistic labelling ('we're optimising engagement').",reference:"Zuboff, S. (2019); Moore, C. (2015).",tags:["institutional","employee-silence"]},

  {id:"md_168",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement through 'attribution of blame' in online aggression most commonly involves perpetrators claiming that:",
    options:[
      "They take full responsibility for their actions and apologise sincerely for all harm they have caused",
      "The victim provoked the aggression and therefore deserves the harmful treatment they are receiving",
      "No aggressive behaviour occurred because all communication was polite, constructive, and well-intentioned",
      "Platform moderators are solely responsible for preventing all aggression and have failed in their duties"
    ],correct:1,explanation:"Attribution of blame involves perpetrators claiming victims provoked or deserved the aggression — 'they asked for it,' 'if they hadn't posted that...' — shifting moral responsibility to the target.",reference:"Bandura, A. (2016).",tags:["blame-attribution","perpetration"]},

  {id:"md_169",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"The concept of 'moral disengagement' was originally developed by Albert Bandura as part of his broader social cognitive theory of moral agency.",
    options:["True","False"],correct:0,explanation:"Bandura developed moral disengagement within his social cognitive theory of moral agency, which posits that moral behaviour is regulated through self-sanctions (guilt, self-condemnation) that can be selectively deactivated.",reference:"Bandura, A. (1986).",tags:["theory","origins"]},

  {id:"md_170",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Research on moral disengagement in online gaming identifies 'competitive framing' as a unique facilitator because it enables players to:",
    options:[
      "View all competitive gaming as inherently cooperative and supportive of other players' development",
      "Reframe toxic behaviour as a legitimate competitive strategy rather than as interpersonal aggression",
      "Recognise that competitive contexts do not justify abandoning basic standards of respectful conduct",
      "Withdraw from all competitive gaming activities to avoid any possibility of behaving aggressively"
    ],correct:1,explanation:"Competitive framing enables moral justification — reframing toxic behaviour as 'competitive strategy' or 'psychological warfare' rather than recognising it as interpersonal aggression and harassment.",reference:"Kwak, H., et al. (2015).",tags:["gaming","competitive-framing"]},

  {id:"md_171",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"Cultural research on moral disengagement in Scandinavian countries (characterised by egalitarian norms) suggests that:",
    options:[
      "Moral disengagement is completely absent because egalitarian cultural values prevent all cognitive distortions",
      "Egalitarian norms may suppress explicit moral disengagement while implicit disengagement processes persist",
      "Scandinavian countries show the highest global rates of moral disengagement due to excessive social freedom",
      "Cultural values have no measurable influence on moral disengagement patterns in any research findings"
    ],correct:1,explanation:"In egalitarian cultures, social desirability pressure may suppress explicit (self-reported) moral disengagement while implicit processes — measured through vignettes or physiological indicators — persist.",reference:"Caprara, G. V., et al. (2014).",tags:["cultural","egalitarian"]},

  {id:"md_172",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The challenge of measuring moral disengagement in real-time online interactions is primarily that:",
    options:[
      "Researchers have unlimited access to all users' private cognitive processes during every online interaction",
      "Self-report scales capture retrospective cognitions but may not reflect the mechanisms active during the behaviour",
      "Real-time measurement tools are universally available and produce perfectly accurate data without any limitations",
      "Moral disengagement does not operate during online interactions and only emerges in laboratory settings"
    ],correct:1,explanation:"Self-report scales capture retrospective cognitions that may not accurately reflect the automatic, often non-conscious mechanisms active during real-time online aggressive behaviour.",reference:"Meter, D. J., & Bauman, S. (2018).",tags:["measurement","real-time"]},

  {id:"md_173",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Research shows that moral disengagement is positively correlated with cyberbullying perpetration and negatively correlated with prosocial bystander behaviour.",
    options:["True","False"],correct:0,explanation:"Higher moral disengagement predicts more cyberbullying perpetration and less prosocial bystander behaviour — it simultaneously enables aggression and inhibits intervention.",reference:"Bussey, K., et al. (2015).",tags:["perpetration","bystander"]},

  {id:"md_174",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement in content moderation worker burnout creates a feedback loop where:",
    options:[
      "Increased engagement with content improves moderator wellbeing and job satisfaction over time",
      "Emotional distancing reduces accuracy, leading to more exposure to severe content, further increasing disengagement",
      "Disengagement automatically resolves through natural psychological recovery without any intervention",
      "Platform companies always detect and address moderator burnout before any negative consequences develop"
    ],correct:1,explanation:"A feedback loop develops: emotional distancing (disengagement) reduces accuracy, increasing exposure to miscategorised severe content, which increases stress and drives further disengagement and burnout.",reference:"Roberts, S. T. (2019).",tags:["content-moderation","feedback-loop"]},

  {id:"md_175",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The 'moral disengagement of systems' perspective extends Bandura's individual-level theory by arguing that:",
    options:[
      "Only individuals can morally disengage because organisations and systems lack cognitive processes entirely",
      "Sociotechnical systems can embed moral disengagement structurally through design choices and process fragmentation",
      "Systems always promote moral engagement because their complexity requires greater ethical vigilance from users",
      "Bandura's theory is entirely wrong and should be replaced by a purely structural analysis of moral behaviour"
    ],correct:1,explanation:"The systems perspective extends Bandura by arguing that sociotechnical systems (platforms, algorithms, bureaucracies) can embed moral disengagement structurally — through design, fragmentation, and automation.",reference:"Bandura, A. (2016); Nissenbaum, H. (1996).",tags:["systems","structural"]},

  {id:"md_176",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"Moral disengagement through 'dehumanisation by analogy' in online discourse operates when users:",
    options:[
      "Describe political opponents as fellow human beings with legitimate perspectives deserving of respectful engagement",
      "Compare out-group members to animals, vermin, diseases, or other non-human entities in public online posts",
      "Use personal names and individual biographical details to engage empathically with each discussion participant",
      "Draw thoughtful historical analogies that illuminate parallels between current and past social challenges"
    ],correct:1,explanation:"Dehumanisation by analogy — comparing out-groups to animals ('rats,' 'cockroaches'), diseases ('plague,' 'virus'), or other non-human entities — strips targets of perceived humanity and moral standing.",reference:"Smith, D. L. (2011).",tags:["dehumanisation","analogy"]},

  {id:"md_177",category:"moral-disengagement",difficulty:1,mode:"public",type:"truefalse",
    question:"Bystander intervention programmes that specifically address moral disengagement cognitions have shown greater effectiveness than those focusing only on behavioural skills.",
    options:["True","False"],correct:0,explanation:"Programmes addressing underlying moral disengagement cognitions (not just 'what to do' but 'why you don't') show greater effectiveness because they target the psychological barriers to intervention.",reference:"Bastiaensens, S., et al. (2014).",tags:["bystander","intervention"]},

  {id:"md_178",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"In automated content recommendation, moral disengagement operates at the system level when algorithms are described as:",
    options:[
      "Deliberate editorial choices made by identifiable human decision-makers with clear moral responsibility",
      "'Neutral' mathematical optimisation processes that merely reflect user preferences without moral implications",
      "Powerful tools that require continuous ethical oversight and regular bias auditing by independent parties",
      "Imperfect systems that sometimes produce harmful outcomes for which the developing company takes full responsibility"
    ],correct:1,explanation:"System-level moral disengagement occurs when algorithms are described as 'neutral' or 'mathematical' — euphemistic labelling that obscures the moral dimensions of design choices and their consequences.",reference:"Mittelstadt, B. D., et al. (2016).",tags:["automated-decisions","neutrality"]},

  {id:"md_179",category:"moral-disengagement",difficulty:3,mode:"public",type:"mcq",
    question:"The developmental concept of 'moral disengagement consolidation' in late adolescence describes the process whereby:",
    options:[
      "All adolescents develop identical moral disengagement levels by the end of secondary education without exception",
      "Individual differences in moral disengagement become more stable and trait-like as cognitive patterns consolidate",
      "Moral disengagement universally decreases to zero by age eighteen through natural developmental processes alone",
      "Late adolescents become completely immune to all situational influences on their moral reasoning processes"
    ],correct:1,explanation:"By late adolescence, individual differences in moral disengagement become more stable and trait-like — cognitive patterns consolidate through repeated use, making high-disengaging individuals harder to reach.",reference:"Paciello, M., et al. (2008).",tags:["developmental","consolidation"]},

  {id:"md_180",category:"moral-disengagement",difficulty:2,mode:"public",type:"mcq",
    question:"The most effective interventions for reducing moral disengagement in online contexts combine which two approaches?",
    options:[
      "Punitive consequences and surveillance-based monitoring of all user behaviour across all platforms",
      "Empathy-building exercises and cognitive restructuring that challenge specific disengagement mechanisms",
      "Complete technology prohibition and mandatory digital detox programmes for all identified aggressors",
      "Financial incentives for prosocial behaviour and automated removal of all morally disengaged individuals"
    ],correct:1,explanation:"The most effective interventions combine empathy-building (increasing concern for victims) with cognitive restructuring (identifying and challenging specific disengagement mechanisms like victim-blaming).",reference:"Williford, A., et al. (2013).",tags:["intervention","combined-approach"]},

  // ═══════════════════════════════════════════════════════════════
  // ONLINE DISINHIBITION (expanded od_016–od_045)
  // ═══════════════════════════════════════════════════════════════

  {id:"od_016",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"The 'cockpit effect' in online disinhibition refers to which psychological phenomenon?",
    options:[
      "The tendency to behave more recklessly when physically separated from consequences by a digital screen",
      "The increased focus and concentration experienced when using streamlined and well-designed user interfaces",
      "The anxiety and discomfort felt when transitioning from anonymous online spaces to real-world interactions",
      "The tendency to overestimate one's own technical abilities when operating within familiar digital platforms"
    ],correct:0,explanation:"The cockpit effect describes how the physical barrier of a screen creates a sense of detachment and protection, similar to being in an enclosed cockpit, encouraging reckless behaviour.",reference:"Suler, J. (2004).",tags:["cockpit-effect","disinhibition"]},

  {id:"od_017",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Emotional contagion in online environments differs from face-to-face settings primarily because of which factor?",
    options:[
      "Emotional contagion does not occur online because digital text lacks all emotional information entirely",
      "Online emotional contagion can spread rapidly across large networks without requiring physical co-presence",
      "Emotional contagion online is always positive and prosocial, unlike the mixed nature of offline contagion",
      "Online emotional contagion only occurs through video communication and never through text-based messaging"
    ],correct:1,explanation:"Online emotional contagion can spread rapidly across vast networks without physical co-presence, as demonstrated by Kramer et al.'s (2014) Facebook study showing text-based emotional transfer.",reference:"Kramer, A. D. I., et al. (2014).",tags:["emotional-contagion","networks"]},

  {id:"od_018",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"The disinhibition-impulsivity pathway suggests that online disinhibition interacts with impulsivity through which mechanism?",
    options:[
      "Impulsive individuals are completely immune to online disinhibition effects due to their pre-existing traits",
      "Online disinhibition amplifies existing impulsive tendencies by reducing the environmental constraints on behaviour",
      "Impulsivity and disinhibition are identical constructs and their interaction is therefore statistically meaningless",
      "Online environments reduce impulsivity by providing time delays that allow more thoughtful response generation"
    ],correct:1,explanation:"The disinhibition-impulsivity pathway proposes that online environments amplify pre-existing impulsive tendencies by removing social cues and environmental constraints that normally regulate behaviour.",reference:"Runions, K. C. (2013).",tags:["impulsivity","pathway"]},

  {id:"od_019",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Audience design theory applied to online communication suggests that disinhibition occurs partly because of which factor?",
    options:[
      "Online communicators carefully tailor messages for their intended audience, increasing self-monitoring behaviour",
      "Online communicators often struggle to accurately conceptualise their actual audience, reducing self-regulation",
      "Online communicators always assume their audience is smaller than it actually is, increasing message formality",
      "Online communicators never consider their audience because digital platforms make audience entirely invisible"
    ],correct:1,explanation:"Audience design theory suggests that difficulty in conceptualising the actual online audience (who is reading/watching) contributes to disinhibition through reduced audience awareness and self-monitoring.",reference:"Clark, H. H., & Murphy, G. L. (1982); Litt, E. (2012).",tags:["audience-design","self-regulation"]},

  {id:"od_020",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",
    question:"Context moderation suggests that different online environments produce different levels of disinhibition depending on platform-specific norms and features.",
    options:["True","False"],correct:0,explanation:"Context moderation recognises that disinhibition varies across online contexts; factors like platform norms, anonymity levels, and community moderation all influence the degree of disinhibition experienced.",reference:"Suler, J. (2004).",tags:["context-moderation","platform"]},

  {id:"od_021",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"Moral typecasting theory suggests that online interactions can lead to which bias in perceiving others?",
    options:[
      "Perceiving all online interaction partners as equally morally sophisticated and ethically minded individuals",
      "Categorising others as either moral agents capable of doing harm or moral patients capable of being harmed",
      "Assuming that all anonymous users are inherently more trustworthy than those who use their real identity",
      "Treating all online communication as morally neutral and therefore exempt from ethical evaluation entirely"
    ],correct:1,explanation:"Moral typecasting theory proposes a tendency to categorise individuals into moral agents (do-ers, capable of harm) or moral patients (receivers, capable of being harmed), affecting disinhibition.",reference:"Gray, K., & Wegner, D. M. (2009).",tags:["moral-typecasting","perception"]},

  {id:"od_022",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Research on disinhibition decay with experience suggests that online disinhibition follows which temporal pattern?",
    options:[
      "Disinhibition permanently increases with every year of internet experience throughout the user's lifetime",
      "Disinhibition tends to decrease as users gain experience and develop better understanding of online norms",
      "Disinhibition remains perfectly constant regardless of how much experience a user accumulates over time",
      "Disinhibition completely disappears after exactly six months of regular internet use in all user populations"
    ],correct:1,explanation:"Research suggests disinhibition effects may diminish as users gain experience, develop digital literacy, and internalise online norms, though individual differences remain important.",reference:"Joinson, A. N. (2007).",tags:["experience","temporal"]},

  {id:"od_023",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Research on real-name policies (requiring users to display their legal names) has found which effect on online disinhibition?",
    options:[
      "Real-name policies completely eliminate all forms of online disinhibition and aggressive behaviour observed",
      "Real-name policies show mixed results and may reduce some disinhibition while also chilling legitimate speech",
      "Real-name policies consistently increase disinhibition because they provoke reactance against the restriction",
      "Real-name policies have absolutely no measurable effect on online behaviour compared to anonymous conditions"
    ],correct:1,explanation:"Research on real-name policies shows mixed results: they may reduce some forms of toxic behaviour but also chill legitimate speech and disproportionately affect vulnerable and marginalised groups.",reference:"Cho, D., & Kim, S. (2012).",tags:["real-name","policy"]},

  {id:"od_024",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",
    question:"Video-based communication (e.g., video calls) generally produces less disinhibition than text-based communication because it restores more nonverbal social cues.",
    options:["True","False"],correct:0,explanation:"Video communication restores facial expressions, tone of voice, and other nonverbal cues, which increases social presence and self-awareness, generally reducing disinhibition compared to text-only channels.",reference:"Kiesler, S., et al. (1984).",tags:["video","modality"]},

  {id:"od_025",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"Gaming-specific disinhibition is influenced by which unique combination of factors compared to general online disinhibition?",
    options:[
      "Gaming environments provide no additional disinhibition factors beyond those found in standard social media",
      "Competitive structures, avatar-mediated interaction, and game-specific norms jointly amplify disinhibition effects",
      "Gaming environments actually reduce disinhibition because players are focused on strategic gameplay objectives",
      "Gaming-specific disinhibition only occurs in single-player games and is absent from multiplayer environments"
    ],correct:1,explanation:"Gaming environments combine competitive structures, avatar mediation, game-specific norms ('trash talk'), and immersion effects that create unique disinhibition dynamics beyond standard online contexts.",reference:"Holz Ivory, A., et al. (2014).",tags:["gaming","competition"]},

  {id:"od_026",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",
    question:"Suler's concept of 'dissociative anonymity' as a factor in online disinhibition refers to which experience?",
    options:[
      "The dissociation between one's online identity and real-world self, creating a sense of separate existence",
      "The amnesia-like forgetting of all online interactions that occurs when logging off from a digital platform",
      "The clinical dissociative disorder that develops as a result of excessive internet use over extended periods",
      "The separation anxiety experienced when users are unable to access their preferred social media platforms"
    ],correct:0,explanation:"Dissociative anonymity refers to the separation between online and offline identities, enabling people to feel their online actions are detached from their real-world self.",reference:"Suler, J. (2004).",tags:["dissociative-anonymity","factor"]},

  {id:"od_027",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'solipsistic introjection' in Suler's online disinhibition model refers to which psychological process?",
    options:[
      "The tendency to project one's own characteristics onto online interaction partners and 'hear' them internally",
      "The withdrawal from all social interaction into a private inner world unrelated to online communication",
      "The development of narcissistic personality features specifically caused by excessive social media engagement",
      "The conscious strategy of presenting an idealised version of oneself across multiple online platform accounts"
    ],correct:0,explanation:"Solipsistic introjection involves assigning imagined characteristics to online correspondents, essentially 'hearing' their messages in one's own internal voice, blurring self-other boundaries.",reference:"Suler, J. (2004).",tags:["solipsistic-introjection","factor"]},

  {id:"od_028",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Suler identified 'asynchronicity' as a factor in online disinhibition, referring to the time delay between sending and receiving messages.",
    options:["True","False"],correct:0,explanation:"Asynchronicity — the time delay in online communication — is one of Suler's six factors, allowing users to 'post and run' without immediately facing reactions or consequences.",reference:"Suler, J. (2004).",tags:["asynchronicity","factor"]},

  {id:"od_029",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"The SIDE model (Social Identity model of Deindividuation Effects) challenges Suler's disinhibition model by arguing which point?",
    options:[
      "Anonymity always reduces all forms of social influence and group conformity in every online context",
      "Anonymity can actually increase conformity to salient group norms rather than always producing disinhibition",
      "Online anonymity has absolutely no effect on behaviour because identity is irrelevant in digital contexts",
      "The disinhibition effect only applies to adolescents and has no relevance for adult online communication"
    ],correct:1,explanation:"The SIDE model argues that anonymity can increase conformity to salient group norms (rather than always disinhibiting), depending on whether personal or social identity is made salient.",reference:"Reicher, S. D., et al. (1995).",tags:["SIDE-model","group-norms"]},

  {id:"od_030",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"'Minimisation of status and authority' as a disinhibition factor operates through which mechanism?",
    options:[
      "Online environments amplify existing power hierarchies by making status indicators more prominent and visible",
      "Online environments reduce the influence of real-world status cues, flattening social hierarchies to a degree",
      "Online environments create entirely new status hierarchies based exclusively on technical computing expertise",
      "Online environments have no effect on perceptions of status or authority between communication participants"
    ],correct:1,explanation:"Online environments can reduce real-world status cues (appearance, title, position), flattening social hierarchies and reducing the inhibiting effect of authority on self-expression.",reference:"Suler, J. (2004).",tags:["status","authority"]},

  {id:"od_031",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Benign disinhibition can lead to positive outcomes such as increased self-disclosure and help-seeking behaviour online.",
    options:["True","False"],correct:0,explanation:"Benign disinhibition encompasses positive outcomes including increased self-disclosure, emotional openness, help-seeking, and exploration of identity in supportive online environments.",reference:"Suler, J. (2004).",tags:["benign","positive-outcomes"]},

  {id:"od_032",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Research on the relationship between social anxiety and online disinhibition consistently shows which pattern?",
    options:[
      "Socially anxious individuals experience no disinhibition online and remain equally inhibited in all settings",
      "Socially anxious individuals may experience greater benign disinhibition online, facilitating social interaction",
      "Social anxiety is completely unrelated to online disinhibition according to all published empirical research",
      "Socially anxious individuals always experience toxic disinhibition online and never benign forms of openness"
    ],correct:1,explanation:"Research suggests socially anxious individuals may particularly benefit from benign disinhibition online, as reduced social cues lower anxiety barriers to self-expression and social interaction.",reference:"Joinson, A. N. (2004).",tags:["social-anxiety","benign"]},

  {id:"od_033",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'deindividuation' differs from Suler's online disinhibition effect in which fundamental respect?",
    options:[
      "Deindividuation is a broader social psychological concept while Suler's model is specific to online contexts",
      "Deindividuation only applies to face-to-face crowds while disinhibition only applies to online environments",
      "Deindividuation and disinhibition are identical concepts developed by the same theorist simultaneously",
      "Deindividuation produces only prosocial outcomes while disinhibition produces only antisocial outcomes ever"
    ],correct:0,explanation:"Deindividuation (Zimbardo, 1969) is a broader concept about loss of self-awareness in groups; Suler's disinhibition effect specifically adapts and extends these ideas to online environments.",reference:"Zimbardo, P. G. (1969); Suler, J. (2004).",tags:["deindividuation","comparison"]},

  {id:"od_034",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"The 'proteus effect' in online environments describes which phenomenon related to avatar-mediated communication?",
    options:[
      "The tendency for users to completely abandon their offline personality when using any form of avatar system",
      "The tendency for users to conform their behaviour to the characteristics of their digital avatar appearance",
      "The tendency for users to feel physically ill when spending extended periods interacting through avatars",
      "The tendency for users to perceive all avatars as equally attractive regardless of their designed appearance"
    ],correct:1,explanation:"The Proteus effect (Yee & Bailenson, 2007) describes how users conform their behaviour to match the characteristics of their avatar, linking to disinhibition through identity flexibility.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["proteus-effect","avatars"]},

  {id:"od_035",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Suler's model proposes that the six factors of online disinhibition operate independently and never interact with one another.",
    options:["True","False"],correct:1,explanation:"Suler explicitly states that the six factors interact with each other, creating compound effects; they are not independent but rather work synergistically to produce disinhibition.",reference:"Suler, J. (2004).",tags:["interaction","factors"]},

  {id:"od_036",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Research on online self-disclosure and disinhibition suggests that the 'strangers on a train' phenomenon relates to which factor?",
    options:[
      "The tendency to share personal information with strangers online due to perceived anonymity and transience",
      "The fear of missing out on social interactions that drives compulsive sharing on social media platforms",
      "The preference for communicating with known contacts rather than unknown individuals in online environments",
      "The reluctance to share any personal information online due to privacy concerns about data breaches today"
    ],correct:0,explanation:"The 'strangers on a train' phenomenon describes the tendency to disclose personal information to strangers, facilitated online by perceived anonymity and the transient nature of encounters.",reference:"Rubin, Z. (1975); Joinson, A. N. (2001).",tags:["self-disclosure","strangers"]},

  {id:"od_037",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Which moderating variable most consistently affects the strength of online disinhibition effects across studies?",
    options:[
      "The colour scheme and visual design aesthetics of the particular platform interface being used at the time",
      "Individual differences in self-monitoring tendency and need for social approval in interpersonal situations",
      "The specific brand of device hardware used to access the internet during the online interaction session",
      "The geographic timezone of the user, with disinhibition strongest during late-night usage hours locally"
    ],correct:1,explanation:"Individual differences in self-monitoring and need for social approval moderate disinhibition effects; high self-monitors are more affected by the removal of social cues online.",reference:"Joinson, A. N. (2007).",tags:["moderators","individual-differences"]},

  {id:"od_038",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",
    question:"The permanence of digital communication (messages being saved and searchable) typically increases self-monitoring and reduces disinhibition effects.",
    options:["True","False"],correct:0,explanation:"Awareness that digital communications are permanent and searchable can increase self-monitoring and reduce disinhibition, though many users fail to consider this during composition.",reference:"Suler, J. (2004).",tags:["permanence","self-monitoring"]},

  {id:"od_039",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"The relationship between online disinhibition and self-regulation theory (Baumeister) suggests which interaction?",
    options:[
      "Online disinhibition and self-regulation are completely independent processes with no theoretical connection",
      "Online environments may deplete self-regulatory resources more quickly, amplifying disinhibition effects observed",
      "Strong self-regulation completely prevents all forms of online disinhibition regardless of contextual factors",
      "Self-regulation theory applies only to health behaviours and is irrelevant to online communication contexts"
    ],correct:1,explanation:"Online environments may tax self-regulatory resources through information overload and multitasking, potentially amplifying disinhibition effects when ego depletion occurs.",reference:"Baumeister, R. F., & Vohs, K. D. (2007).",tags:["self-regulation","ego-depletion"]},

  {id:"od_040",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",
    question:"Which of the following best describes 'toxic disinhibition' according to Suler's framework?",
    options:[
      "Positive openness and genuine emotional expression facilitated by reduced social barriers online",
      "Increased willingness to seek help for mental health difficulties through anonymous online platforms",
      "Rude language, harsh criticism, threats, and exploration of dark desires facilitated by online contexts",
      "The neutral reduction in communication formality observed in casual digital messaging between friends"
    ],correct:2,explanation:"Toxic disinhibition involves the expression of hostile, aggressive, or harmful behaviour facilitated by online factors, contrasting with benign disinhibition's positive openness.",reference:"Suler, J. (2004).",tags:["toxic-disinhibition","definition"]},

  {id:"od_041",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"Research comparing disinhibition across different social media platforms most consistently finds which result?",
    options:[
      "All social media platforms produce identical levels of disinhibition regardless of their design or features",
      "Platforms with greater anonymity affordances and weaker moderation tend to show higher levels of disinhibition",
      "Only platforms specifically designed for anonymous communication can produce any disinhibition effects at all",
      "Platforms with the largest user bases always produce the least disinhibition due to greater social surveillance"
    ],correct:1,explanation:"Platforms vary in disinhibition levels depending on anonymity affordances, moderation practices, community norms, and design features that affect visibility and accountability.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["platform-comparison","design"]},

  {id:"od_042",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",
    question:"Lapidot-Lefler and Barak (2012) found that eye contact was the most significant factor in reducing online disinhibition, more so than anonymity.",
    options:["True","False"],correct:0,explanation:"Lapidot-Lefler and Barak (2012) found that lack of eye contact was the most significant predictor of toxic disinhibition, even more than anonymity, highlighting the importance of gaze in social regulation.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["eye-contact","empirical"]},

  {id:"od_043",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'invisibility' in Suler's model contributes to disinhibition through which specific psychological process?",
    options:[
      "Users believe they cannot be seen by others, reducing self-consciousness and concern about being evaluated",
      "Users become literally invisible to platform moderators who cannot detect any of their online activities",
      "Users develop visual processing deficits from extended screen time that impair their social perception skills",
      "Users deliberately hide their online activity from family members to avoid conversations about internet use"
    ],correct:0,explanation:"Invisibility in Suler's model refers to the sense that others cannot physically see you, reducing self-consciousness, evaluation apprehension, and inhibiting social cues.",reference:"Suler, J. (2004).",tags:["invisibility","factor"]},

  {id:"od_044",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",
    question:"How does the 'reduced cues' approach to online communication relate to disinhibition theory?",
    options:[
      "Reduced social cues online remove normative information that typically guides and constrains social behaviour",
      "Online communication actually provides more social cues than face-to-face interaction through emoji and formatting",
      "The reduced cues approach has been completely discredited and is no longer considered relevant to the field",
      "Reduced cues only affect written communication and have no bearing on audio or video online interactions"
    ],correct:0,explanation:"The reduced cues approach (Sproull & Kiesler, 1986) argues that online communication filters out social cues that normally regulate behaviour, contributing to disinhibition and norm violations.",reference:"Sproull, L., & Kiesler, S. (1986).",tags:["reduced-cues","theory"]},

  {id:"od_045",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",
    question:"Suler argued that online disinhibition effects are entirely explained by anonymity alone, with no other contributing factors.",
    options:["True","False"],correct:1,explanation:"Suler identified six interacting factors (dissociative anonymity, invisibility, asynchronicity, solipsistic introjection, dissociative imagination, minimisation of authority), not anonymity alone.",reference:"Suler, J. (2004).",tags:["six-factors","theory"]},

  // ═══════════════════════════════════════════════════════════════
  // AI PSYCHOLOGY (expanded ai_013–ai_042)
  // ═══════════════════════════════════════════════════════════════

  {id:"ai_013",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"AI anxiety is best defined as which psychological response to artificial intelligence systems?",
    options:[
      "The generalised apprehension and worry about AI's impact on employment, privacy, and human autonomy",
      "The clinical phobia of all electronic devices that requires formal psychiatric diagnosis and treatment",
      "The excitement and enthusiasm experienced when interacting with novel artificial intelligence technology",
      "The temporary frustration felt exclusively when an AI system provides an incorrect factual answer response"
    ],correct:0,explanation:"AI anxiety refers to the generalised apprehension about AI's societal impacts including job displacement, privacy erosion, loss of control, and existential risk concerns.",reference:"Johnson, D. G., & Verdicchio, M. (2017).",tags:["AI-anxiety","definition"]},

  {id:"ai_014",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"The 'transparency paradox' in AI systems refers to which tension in system design and user experience?",
    options:[
      "The finding that AI systems become less accurate as they become more transparent about their processes",
      "The finding that increased algorithmic transparency can sometimes decrease rather than increase user trust",
      "The observation that transparent AI systems are always more expensive to develop and maintain over time",
      "The principle that all AI systems should be completely opaque to prevent users from gaming the algorithm"
    ],correct:1,explanation:"The transparency paradox describes how increased transparency about AI decision-making can sometimes decrease trust by revealing complexity users cannot evaluate, or by exposing imperfections.",reference:"Ananny, M., & Crawford, K. (2018).",tags:["transparency","paradox"]},

  {id:"ai_015",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Calibrated trust in AI systems refers to which type of relationship between user trust and system capability?",
    options:[
      "Trust that remains constantly high regardless of the AI system's actual performance and error rate observed",
      "Trust that accurately matches the actual reliability and capabilities of the specific AI system being used",
      "Trust that is always low because users fundamentally cannot understand how artificial intelligence works",
      "Trust that is determined entirely by the brand reputation of the company that developed the AI system"
    ],correct:1,explanation:"Calibrated trust means user trust levels accurately match the AI system's actual capabilities and reliability — neither over-trusting nor under-trusting the system's competence.",reference:"Lee, J. D., & See, K. A. (2004).",tags:["calibrated-trust","appropriate"]},

  {id:"ai_016",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The 'Moral Machine' experiment by MIT primarily investigated which psychological question about AI ethics?",
    options:[
      "Whether AI systems can develop genuine moral reasoning capabilities equivalent to adult human cognition",
      "How people across different cultures make moral decisions about unavoidable harm in autonomous vehicle scenarios",
      "Whether training AI systems on ethical philosophy texts improves their decision-making accuracy measurably",
      "How quickly users lose trust in AI systems after experiencing a single moral disagreement with the system"
    ],correct:1,explanation:"The Moral Machine experiment examined cross-cultural moral preferences for autonomous vehicle dilemma decisions, revealing significant cultural variation in ethical priorities.",reference:"Awad, E., et al. (2018).",tags:["Moral-Machine","autonomous-vehicles"]},

  {id:"ai_017",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Explainable AI (XAI) aims to address which fundamental psychological barrier to AI adoption and trust?",
    options:[
      "The excessive computational cost that prevents AI systems from being deployed on consumer-grade hardware",
      "The difficulty users have understanding how AI systems reach their decisions, undermining trust and acceptance",
      "The tendency for AI systems to produce outputs that are always too simple for expert users to find useful",
      "The legal requirement that all AI systems must be open-source and freely available to the general public"
    ],correct:1,explanation:"XAI aims to make AI decision-making processes interpretable and understandable to users, addressing the 'black box' problem that undermines trust, accountability, and acceptance.",reference:"Gunning, D. (2017).",tags:["XAI","explainability"]},

  {id:"ai_018",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",
    question:"Algorithmic literacy refers to the ability of individuals to understand how algorithms work and critically evaluate their outputs and societal impacts.",
    options:["True","False"],correct:0,explanation:"Algorithmic literacy encompasses understanding how algorithms function, recognising their presence in daily life, and critically evaluating their outputs, biases, and societal implications.",reference:"Dogruel, L., et al. (2022).",tags:["algorithmic-literacy","definition"]},

  {id:"ai_019",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The 'AI effect' describes which recurring phenomenon in public perception of artificial intelligence?",
    options:[
      "The tendency for people to reclassify AI achievements as 'not really intelligence' once they are understood",
      "The tendency for people to overestimate AI capabilities after seeing impressive demonstrations in the media",
      "The tendency for AI researchers to exaggerate the capabilities of their systems in academic publications",
      "The tendency for AI systems to perform significantly worse in real-world conditions than in laboratory tests"
    ],correct:0,explanation:"The AI effect describes the tendency to dismiss AI achievements as 'not real intelligence' once the underlying mechanism is understood, perpetually moving the goalposts.",reference:"McCorduck, P. (2004).",tags:["AI-effect","perception"]},

  {id:"ai_020",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Research on AI companionship and social chatbots suggests which psychological benefit and risk?",
    options:[
      "AI companions have no measurable psychological effects on users and function purely as novelty entertainment",
      "AI companions can reduce loneliness but may also create dependency and substitute for human relationships",
      "AI companions invariably improve all aspects of mental health without any associated risks or downsides",
      "AI companions are exclusively harmful and no peer-reviewed research has found any positive effects at all"
    ],correct:1,explanation:"Research suggests AI companions can provide emotional support and reduce loneliness, but risks include dependency formation, attachment to non-reciprocal entities, and displacement of human relationships.",reference:"Skjuve, M., et al. (2021).",tags:["AI-companionship","loneliness"]},

  {id:"ai_021",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"Human-AI teaming research identifies which factor as most critical for effective collaboration between humans and AI systems?",
    options:[
      "The AI system's ability to completely replace all human cognitive functions without any human involvement",
      "Appropriate task allocation based on complementary strengths and shared mental models between the partners",
      "The human team member's willingness to defer to the AI system's judgment in every decision-making scenario",
      "The physical proximity between the human team member and the hardware running the AI system algorithms"
    ],correct:1,explanation:"Effective human-AI teaming requires appropriate task allocation leveraging complementary strengths, shared mental models, and mutual understanding of capabilities and limitations.",reference:"Bansal, G., et al. (2019).",tags:["human-AI-teaming","collaboration"]},

  {id:"ai_022",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"AI applications in mental health (e.g., chatbot therapy) raise which primary ethical concern among psychologists?",
    options:[
      "AI therapy tools are too expensive for widespread deployment and are therefore economically unfeasible today",
      "AI therapy tools may lack the capacity for genuine empathy and could miss critical clinical warning signs",
      "AI therapy tools always outperform human therapists and therefore threaten the entire profession as a whole",
      "AI therapy tools are only effective for treating specific phobias and have no utility for other conditions"
    ],correct:1,explanation:"Key concerns include AI's inability to provide genuine empathy, risks of missing clinical cues (suicidality, abuse), data privacy issues, and questions about informed consent.",reference:"Fiske, A., et al. (2019).",tags:["AI-mental-health","ethics"]},

  {id:"ai_023",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",
    question:"Research on deepfake detection suggests that humans are generally highly accurate at distinguishing AI-generated faces from real photographs without training.",
    options:["True","False"],correct:1,explanation:"Research shows humans perform poorly at detecting AI-generated faces, often at or near chance levels, particularly with high-quality deepfakes, highlighting the need for technological detection tools.",reference:"Nightingale, S. J., & Farid, H. (2022).",tags:["deepfake-detection","accuracy"]},

  {id:"ai_024",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Research on perceptions of AI creativity suggests that people tend to evaluate AI-generated creative works in which manner?",
    options:[
      "People consistently rate AI-generated art as superior to human-created art across all evaluation criteria",
      "People often devalue creative works when they learn an AI produced them, even if they initially rated highly",
      "People cannot distinguish between AI-generated and human-created art under any experimental conditions",
      "People always prefer AI-generated music but consistently prefer human-created visual art in all studies"
    ],correct:1,explanation:"Research shows an 'AI penalty' where people devalue creative works upon learning they were AI-generated, even when they initially evaluated them positively — reflecting biases about machine creativity.",reference:"Ragot, M., et al. (2020).",tags:["AI-creativity","perception"]},

  {id:"ai_025",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"AI bias awareness in the general public is best characterised by which research finding?",
    options:[
      "The general public has comprehensive understanding of all forms of algorithmic bias and its consequences",
      "Most people have limited awareness of algorithmic bias and often assume AI systems are inherently objective",
      "The general public uniformly rejects all AI systems because of widespread concerns about systematic bias",
      "Awareness of AI bias is highest among the youngest users and completely absent in users over age forty"
    ],correct:1,explanation:"Research indicates limited public awareness of algorithmic bias, with many people assuming AI systems are inherently objective and neutral, despite well-documented biases in training data and design.",reference:"Smith, A., & Anderson, M. (2019).",tags:["AI-bias","awareness"]},

  {id:"ai_026",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"Trust repair after AI errors is most effectively achieved through which strategy according to research?",
    options:[
      "Completely hiding all errors from users to maintain the perception of AI system infallibility over time",
      "Providing transparent explanations of the error, its cause, and the corrective measures being implemented",
      "Replacing the AI system entirely with a new system rather than attempting to repair trust in the old one",
      "Offering financial compensation to all users regardless of whether they were personally affected by errors"
    ],correct:1,explanation:"Research shows trust repair is most effective when organisations provide transparent explanations, acknowledge the error, and demonstrate concrete corrective measures being implemented.",reference:"de Visser, E. J., et al. (2020).",tags:["trust-repair","transparency"]},

  {id:"ai_027",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",
    question:"The uncanny valley hypothesis predicts that humanoid robots or avatars that are almost but not perfectly human-like provoke feelings of unease or revulsion.",
    options:["True","False"],correct:0,explanation:"Mori's uncanny valley hypothesis proposes that as robots become more human-like, emotional responses become increasingly positive until a point where near-human appearance provokes eeriness.",reference:"Mori, M. (1970).",tags:["uncanny-valley","hypothesis"]},

  {id:"ai_028",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Automation bias refers to which specific tendency in human-AI interaction?",
    options:[
      "The tendency to distrust all automated systems regardless of their demonstrated accuracy and reliability",
      "The tendency to over-rely on automated system outputs, even when contradicted by other available evidence",
      "The tendency to prefer manual processes exclusively because automated systems are viewed as job threats",
      "The tendency to attribute human-like emotions and intentions to automated systems during all interactions"
    ],correct:1,explanation:"Automation bias is the tendency to favour suggestions from automated systems, even when contradicted by other information, potentially leading to errors of commission and omission.",reference:"Parasuraman, R., & Manzey, D. H. (2010).",tags:["automation-bias","over-reliance"]},

  {id:"ai_029",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'algorithmic aversion' describes which user response to AI decision-making systems?",
    options:[
      "Users' preference for human judgment over algorithmic judgment, even when algorithms demonstrably outperform",
      "Users' preference for the most complex algorithm available regardless of whether simpler models are better",
      "Users' inability to interact with any algorithm-based system due to severe technology-related anxiety",
      "Users' tendency to blindly trust all algorithmic recommendations without any critical evaluation process"
    ],correct:0,explanation:"Algorithmic aversion describes the preference for human over algorithmic judgment, even when the algorithm demonstrably outperforms humans, particularly after seeing the algorithm err.",reference:"Dietvorst, B. J., et al. (2015).",tags:["algorithmic-aversion","trust"]},

  {id:"ai_030",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",
    question:"Anthropomorphism of AI systems — attributing human-like qualities to them — can increase user trust but may also lead to unrealistic expectations.",
    options:["True","False"],correct:0,explanation:"Anthropomorphism can increase trust, engagement, and social bonding with AI systems, but may also create unrealistic expectations about the system's capabilities, empathy, and understanding.",reference:"Waytz, A., et al. (2014).",tags:["anthropomorphism","expectations"]},

  {id:"ai_031",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The 'algorithm appreciation' finding challenges earlier algorithmic aversion research by demonstrating which result?",
    options:[
      "Users always prefer algorithms over humans in every decision domain without any exceptions found in studies",
      "Users sometimes prefer algorithmic advice over human advice, particularly for objective and factual judgments",
      "Users have no preference between algorithmic and human advice in any context studied by the researchers",
      "Users only prefer algorithms when they are unaware that they are interacting with an automated system"
    ],correct:1,explanation:"Algorithm appreciation research shows users sometimes prefer algorithmic over human advice, particularly for objective/factual judgments, complicating the algorithmic aversion narrative.",reference:"Logg, J. M., et al. (2019).",tags:["algorithm-appreciation","preference"]},

  {id:"ai_032",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"Research on the 'moral responsibility gap' in AI decision-making highlights which fundamental ethical challenge?",
    options:[
      "AI systems are always more morally responsible than humans because they are free from emotional biases",
      "Difficulty in attributing moral responsibility when autonomous AI systems cause harm without clear human agency",
      "Humans always bear complete moral responsibility for all AI decisions regardless of system autonomy levels",
      "The moral responsibility gap only exists in military applications and is irrelevant to civilian AI systems"
    ],correct:1,explanation:"The moral responsibility gap arises when AI systems operate with sufficient autonomy that traditional attribution of moral responsibility to human agents becomes problematic.",reference:"Matthias, A. (2004).",tags:["responsibility-gap","ethics"]},

  {id:"ai_033",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",
    question:"Research shows that people judge moral decisions made by AI more harshly than identical decisions made by humans, a phenomenon known as the 'machine morality penalty'.",
    options:["True","False"],correct:0,explanation:"Studies show people often judge the same moral decision more harshly when made by an AI than a human, reflecting expectations about machine objectivity and discomfort with machine moral agency.",reference:"Bigman, Y. E., & Gray, K. (2018).",tags:["machine-morality","judgment"]},

  {id:"ai_034",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'meaningful human control' over AI systems requires which essential component?",
    options:[
      "That humans physically press a button to approve every single individual decision the AI system makes",
      "That humans retain sufficient understanding and authority to be genuinely responsible for AI system outcomes",
      "That AI systems are never permitted to operate autonomously in any capacity or context without supervision",
      "That only computer scientists with doctoral degrees are allowed to operate or interact with AI systems"
    ],correct:1,explanation:"Meaningful human control requires that humans maintain sufficient understanding, oversight, and authority over AI systems to be genuinely responsible for outcomes, not merely nominal oversight.",reference:"Santoni de Sio, F., & van den Hoven, J. (2018).",tags:["meaningful-control","governance"]},

  {id:"ai_035",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",
    question:"Which psychological factor most consistently predicts individual differences in trust towards AI systems?",
    options:[
      "The user's height and physical appearance, which have been linked to technology confidence in some models",
      "The user's propensity to trust in general, combined with their prior experience with technology systems",
      "The user's favourite colour, which subconsciously influences their perception of all digital interfaces",
      "The user's birth order among siblings, which determines their general openness to novel experiences today"
    ],correct:1,explanation:"General propensity to trust and prior technology experience are among the most consistent predictors of individual differences in AI trust, alongside perceived system competence.",reference:"Hoff, K. A., & Bashir, M. (2015).",tags:["trust-predictors","individual-differences"]},

  {id:"ai_036",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The ELIZA effect in human-computer interaction describes which psychological tendency?",
    options:[
      "The tendency to perceive computer systems as increasingly unreliable after extended periods of interaction",
      "The tendency to attribute understanding and intelligence to computer programs despite their simplicity today",
      "The tendency to prefer typing-based interfaces over voice-based interfaces in all human-computer scenarios",
      "The tendency to experience motion sickness when interacting with virtual reality computing environments"
    ],correct:1,explanation:"The ELIZA effect describes the tendency to unconsciously attribute human-like understanding and intelligence to computer programs, named after Weizenbaum's simple chatbot.",reference:"Weizenbaum, J. (1976).",tags:["ELIZA-effect","anthropomorphism"]},

  {id:"ai_037",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",
    question:"The 'automation complacency' effect describes the tendency for users to reduce their monitoring of automated systems over time, potentially missing errors.",
    options:["True","False"],correct:0,explanation:"Automation complacency involves reduced vigilance and monitoring of automated systems over time, as users come to trust the system and reduce their oversight, increasing the risk of missed errors.",reference:"Parasuraman, R., & Manzey, D. H. (2010).",tags:["automation-complacency","vigilance"]},

  {id:"ai_038",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",
    question:"Research on 'fairness perceptions' of AI decision-making systems shows which key finding across studies?",
    options:[
      "Users universally agree on a single definition of algorithmic fairness that applies across all contexts",
      "Users hold different and sometimes conflicting fairness criteria that depend on the specific decision context",
      "Users do not care about fairness in AI decisions as long as the decisions are made quickly and efficiently",
      "Users only evaluate AI fairness when the decisions directly affect them but never when others are affected"
    ],correct:1,explanation:"Research reveals that people hold different, context-dependent fairness criteria (equality, equity, need-based) and these can conflict, making it impossible to satisfy all fairness conceptions simultaneously.",reference:"Saxena, N. A., et al. (2019).",tags:["fairness","context-dependent"]},

  {id:"ai_039",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'human-in-the-loop' AI systems is designed to address which specific concern about autonomous AI?",
    options:[
      "The concern that AI systems consume excessive electricity and need human operators to manage power usage",
      "The concern that fully autonomous AI systems may make consequential decisions without adequate human oversight",
      "The concern that AI systems are too slow at processing information and require humans to speed up output",
      "The concern that AI systems cannot communicate their results without a human translator intermediary person"
    ],correct:1,explanation:"Human-in-the-loop design ensures humans remain involved in consequential AI decisions, maintaining oversight, accountability, and the ability to override AI recommendations when appropriate.",reference:"Holzinger, A. (2016).",tags:["human-in-the-loop","oversight"]},

  {id:"ai_040",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",
    question:"The Turing test evaluates whether a machine can exhibit intelligent behaviour indistinguishable from that of a human in conversation.",
    options:["True","False"],correct:0,explanation:"The Turing test (Turing, 1950) proposes that a machine can be considered intelligent if a human interrogator cannot reliably distinguish its responses from those of a human.",reference:"Turing, A. M. (1950).",tags:["Turing-test","definition"]},

  {id:"ai_041",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"Research on AI in hiring and recruitment decisions reveals which primary psychological concern?",
    options:[
      "AI hiring tools are universally more accurate than human recruiters and therefore raise no valid concerns",
      "Applicants often perceive AI-driven hiring as less fair and less interpersonally sensitive than human-led processes",
      "AI hiring systems are only used for entry-level positions and are never applied to executive recruitment",
      "Applicants universally prefer AI-driven hiring because it eliminates all forms of human interviewer bias"
    ],correct:1,explanation:"Research shows applicants often perceive AI-driven hiring as less fair, less transparent, and less interpersonally sensitive than human-led processes, affecting organisational attractiveness.",reference:"Gonzalez, M. F., et al. (2022).",tags:["AI-hiring","fairness"]},

  {id:"ai_042",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of 'appropriate reliance' on AI systems differs from automation bias in which key respect?",
    options:[
      "Appropriate reliance involves using AI recommendations only when they align with the user's pre-existing views",
      "Appropriate reliance involves calibrating one's use of AI outputs based on the system's known capabilities",
      "Appropriate reliance requires completely ignoring AI recommendations and relying solely on human judgment",
      "Appropriate reliance means following AI recommendations in exactly fifty percent of all decision scenarios"
    ],correct:1,explanation:"Appropriate reliance involves calibrating one's use of AI outputs to match the system's known strengths and limitations, neither over-relying (automation bias) nor under-relying (algorithmic aversion).",reference:"Bansal, G., et al. (2021).",tags:["appropriate-reliance","calibration"]},

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH METHODS (expanded rm_016–rm_045)
  // ═══════════════════════════════════════════════════════════════

  {id:"rm_016",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"A Type I error in hypothesis testing occurs when a researcher makes which incorrect conclusion?",
    options:[
      "Correctly fails to reject the null hypothesis when the null hypothesis is actually true in the population",
      "Incorrectly rejects the null hypothesis when the null hypothesis is actually true in the population studied",
      "Correctly rejects the null hypothesis when the alternative hypothesis is actually true in the population",
      "Incorrectly fails to reject the null hypothesis when the alternative hypothesis is true in the population"
    ],correct:1,explanation:"A Type I error (false positive) occurs when the null hypothesis is true but the researcher incorrectly rejects it, concluding an effect exists when it does not.",reference:"Cohen, J. (1988).",tags:["Type-I-error","hypothesis-testing"]},

  {id:"rm_017",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"A Type II error in hypothesis testing occurs when a researcher makes which incorrect conclusion?",
    options:[
      "Incorrectly rejects the null hypothesis when it is actually true, concluding a false positive finding",
      "Correctly rejects the null hypothesis when the alternative hypothesis is true in the actual population",
      "Incorrectly fails to reject the null hypothesis when the alternative hypothesis is actually true here",
      "Correctly fails to reject the null hypothesis when no real effect exists in the studied population"
    ],correct:2,explanation:"A Type II error (false negative) occurs when the alternative hypothesis is true but the researcher fails to reject the null, missing a real effect.",reference:"Cohen, J. (1988).",tags:["Type-II-error","hypothesis-testing"]},

  {id:"rm_018",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Statistical power in research design refers to which specific probability?",
    options:[
      "The probability of finding a statistically significant result regardless of whether the effect truly exists",
      "The probability of correctly rejecting the null hypothesis when the alternative hypothesis is in fact true",
      "The probability of incorrectly rejecting the null hypothesis when it is actually true in the population",
      "The probability that the sample mean will exactly equal the population mean in a given research study"
    ],correct:1,explanation:"Statistical power (1 - β) is the probability of correctly rejecting a false null hypothesis — detecting a true effect when one actually exists in the population.",reference:"Cohen, J. (1988).",tags:["statistical-power","design"]},

  {id:"rm_019",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"Increasing sample size is one of the most effective ways to increase the statistical power of a research study.",
    options:["True","False"],correct:0,explanation:"Larger sample sizes reduce standard error, increase the precision of parameter estimates, and increase the probability of detecting true effects, thereby increasing statistical power.",reference:"Cohen, J. (1992).",tags:["sample-size","power"]},

  {id:"rm_020",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"The Variance Inflation Factor (VIF) is used to detect which specific problem in regression analysis?",
    options:[
      "Heteroscedasticity, where the variance of residuals is unequal across levels of the predictor variables",
      "Multicollinearity, where predictor variables are highly correlated with each other in the regression model",
      "Autocorrelation, where residuals in time-series data are correlated with each other across time points",
      "Non-normality, where the distribution of residuals deviates significantly from the normal distribution"
    ],correct:1,explanation:"VIF quantifies the severity of multicollinearity in regression analysis. A VIF above 10 (or above 5 by stricter standards) indicates problematic multicollinearity between predictors.",reference:"O'Brien, R. M. (2007).",tags:["VIF","multicollinearity"]},

  {id:"rm_021",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Convergent validity is demonstrated when a measure correlates strongly with which type of measure?",
    options:[
      "Measures of theoretically unrelated constructs that should have no meaningful relationship with each other",
      "Measures of the same or theoretically similar constructs that should be positively related to one another",
      "Measures administered at a different time point to assess test-retest reliability of the instrument used",
      "Measures that use an identical question format and identical response scale regardless of content measured"
    ],correct:1,explanation:"Convergent validity is established when a measure correlates highly with other measures of the same or theoretically similar constructs, supporting construct validity.",reference:"Campbell, D. T., & Fiske, D. W. (1959).",tags:["convergent-validity","construct"]},

  {id:"rm_022",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Discriminant validity is demonstrated when a measure shows which relationship with theoretically unrelated constructs?",
    options:[
      "Strong positive correlations with measures of constructs that are theoretically distinct and dissimilar",
      "No correlation or weak correlations with measures of constructs that are theoretically distinct and unrelated",
      "Perfect negative correlations with all other measures regardless of whether they measure similar constructs",
      "Identical correlation values with both related and unrelated measures showing no differentiation at all here"
    ],correct:1,explanation:"Discriminant validity requires that a measure shows low or no correlation with measures of theoretically distinct constructs, demonstrating it is measuring something unique.",reference:"Campbell, D. T., & Fiske, D. W. (1959).",tags:["discriminant-validity","construct"]},

  {id:"rm_023",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Random sampling differs from convenience sampling primarily in which respect?",
    options:[
      "Random sampling gives every member of the target population an equal chance of selection into the study",
      "Convenience sampling gives every member of the target population an equal chance of being selected here",
      "Random sampling always produces smaller sample sizes than convenience sampling in all research contexts",
      "Convenience sampling is more expensive and time-consuming to implement than random sampling typically is"
    ],correct:0,explanation:"Random sampling gives every population member an equal selection probability, supporting generalisability, while convenience sampling recruits readily available participants, limiting generalisability.",reference:"Bryman, A. (2016).",tags:["sampling","random-vs-convenience"]},

  {id:"rm_024",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"Eta-squared (η²) is an effect size measure used in ANOVA that represents the proportion of total variance explained by the independent variable.",
    options:["True","False"],correct:0,explanation:"Eta-squared represents the proportion of total variance in the dependent variable that is accounted for by the independent variable in an ANOVA model.",reference:"Cohen, J. (1988).",tags:["eta-squared","effect-size"]},

  {id:"rm_025",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"An odds ratio of 1.0 in logistic regression indicates which relationship between predictor and outcome?",
    options:[
      "The predictor is strongly positively associated with increased odds of the outcome occurring in the sample",
      "The predictor has no association with the odds of the outcome — the odds are equal across predictor levels",
      "The predictor is strongly negatively associated with decreased odds of the outcome occurring in the sample",
      "The predictor perfectly predicts the outcome with no error variance in the logistic regression model fitted"
    ],correct:1,explanation:"An odds ratio of 1.0 indicates no association — the odds of the outcome are equal regardless of the predictor value. Values above 1 indicate increased odds, below 1 indicate decreased odds.",reference:"Field, A. (2018).",tags:["odds-ratio","logistic-regression"]},

  {id:"rm_026",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The primary advantage of longitudinal research designs over cross-sectional designs is which capability?",
    options:[
      "Longitudinal designs are always cheaper and faster to conduct than cross-sectional research study designs",
      "Longitudinal designs can examine changes over time and provide stronger evidence for temporal relationships",
      "Longitudinal designs always have larger sample sizes than cross-sectional designs in every research field",
      "Longitudinal designs eliminate all threats to internal validity that affect cross-sectional research studies"
    ],correct:1,explanation:"Longitudinal designs collect data at multiple time points, enabling examination of changes over time, temporal ordering of variables, and stronger (though not conclusive) causal inference.",reference:"Shadish, W. R., et al. (2002).",tags:["longitudinal","design"]},

  {id:"rm_027",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A cross-sectional research design collects data from participants at a single point in time only.",
    options:["True","False"],correct:0,explanation:"Cross-sectional designs collect data at one time point, providing a snapshot of variables and their relationships, but limiting ability to infer causation or examine change over time.",reference:"Bryman, A. (2016).",tags:["cross-sectional","design"]},

  {id:"rm_028",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Content analysis as a research method is best described as which systematic approach?",
    options:[
      "A statistical technique for reducing large numbers of variables into smaller sets of underlying factors",
      "A systematic method for coding and categorising the content of texts, images, or other media artefacts",
      "A laboratory-based experimental method for measuring physiological responses to media content stimuli",
      "A qualitative interview technique focused on exploring participants' lived experiences in depth exclusively"
    ],correct:1,explanation:"Content analysis is a systematic research method for coding, categorising, and quantifying the manifest and latent content of communication materials including texts, images, and media.",reference:"Krippendorff, K. (2018).",tags:["content-analysis","method"]},

  {id:"rm_029",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Experience sampling method (ESM) is particularly valuable for studying online behaviour because of which advantage?",
    options:[
      "ESM eliminates all recall bias by collecting data in controlled laboratory environments during testing only",
      "ESM captures real-time experiences and behaviours in natural contexts, reducing retrospective recall bias",
      "ESM provides perfectly representative samples of the entire population for every study using the approach",
      "ESM is the only research method that can establish definitive causal relationships between two variables"
    ],correct:1,explanation:"ESM captures data in real-time or near-real-time in participants' natural environments, reducing retrospective recall bias and increasing ecological validity for studying daily digital experiences.",reference:"Csikszentmihalyi, M., & Larson, R. (1987).",tags:["ESM","ecological"]},

  {id:"rm_030",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Likert scales are most commonly used in survey research to measure which type of variable?",
    options:[
      "Nominal categorical variables such as gender identity, country of residence, or preferred social platform",
      "Attitudinal or opinion-based variables where respondents rate their level of agreement with statements",
      "Continuous ratio-scale variables such as exact reaction time in milliseconds during experimental trials",
      "Binary dichotomous variables that can only take two possible values such as yes or no response options"
    ],correct:1,explanation:"Likert scales measure attitudes, opinions, or perceptions by asking respondents to rate their agreement with statements on an ordinal scale (e.g., strongly disagree to strongly agree).",reference:"Likert, R. (1932).",tags:["Likert-scale","measurement"]},

  {id:"rm_031",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Exploratory factor analysis (EFA) is primarily used for which purpose in scale development?",
    options:[
      "Confirming a pre-specified factor structure derived from prior theory using a new independent sample",
      "Identifying the underlying latent factor structure of a set of observed variables without prior assumptions",
      "Testing whether a specific causal model adequately fits the observed data in a structural equation model",
      "Calculating the internal consistency reliability of a scale using Cronbach's alpha coefficient statistic"
    ],correct:1,explanation:"EFA is used to discover the underlying factor structure of a set of variables when the researcher does not have a strong a priori theoretical model of the expected structure.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["EFA","factor-analysis"]},

  {id:"rm_032",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Mediation analysis tests which type of relationship between variables in a research model?",
    options:[
      "Whether a third variable changes the strength or direction of the relationship between two other variables",
      "Whether the effect of an independent variable on a dependent variable operates through an intervening variable",
      "Whether two variables are simply correlated without testing any directional or causal pathway between them",
      "Whether a dependent variable can be predicted by a set of independent variables using multiple regression"
    ],correct:1,explanation:"Mediation analysis tests whether the effect of X on Y operates through an intervening variable M (the mediator), examining the indirect pathway X → M → Y.",reference:"Baron, R. M., & Kenny, D. A. (1986).",tags:["mediation","indirect-effect"]},

  {id:"rm_033",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Moderation analysis tests which type of relationship between variables in a research model?",
    options:[
      "Whether the effect of an independent variable on a dependent variable operates through an intervening pathway",
      "Whether a third variable changes the strength or direction of the relationship between two other variables",
      "Whether two predictor variables are too highly correlated to be included in the same regression model",
      "Whether the residuals in a regression model are normally distributed and meet the homoscedasticity standard"
    ],correct:1,explanation:"Moderation analysis tests whether a third variable (moderator) changes the strength or direction of the relationship between an independent and dependent variable (an interaction effect).",reference:"Baron, R. M., & Kenny, D. A. (1986).",tags:["moderation","interaction"]},

  {id:"rm_034",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"The Bonferroni correction adjusts the significance threshold when conducting multiple statistical tests to reduce the family-wise Type I error rate.",
    options:["True","False"],correct:0,explanation:"The Bonferroni correction divides the alpha level by the number of tests conducted, reducing the probability of Type I errors (false positives) when performing multiple comparisons.",reference:"Dunn, O. J. (1961).",tags:["Bonferroni","multiple-comparisons"]},

  {id:"rm_035",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Bootstrapping as a statistical technique is particularly useful in which research scenario?",
    options:[
      "When the researcher has an extremely large sample size and wants to reduce it for computational efficiency",
      "When distributional assumptions are violated or when testing indirect effects that lack normal distributions",
      "When the researcher needs to transform qualitative interview data into numerical variables for analysis",
      "When the researcher wants to ensure that their survey questions have high face validity for participants"
    ],correct:1,explanation:"Bootstrapping is a resampling technique particularly valuable when distributional assumptions are violated or for testing indirect effects (mediation), as it does not assume normality.",reference:"Efron, B., & Tibshirani, R. J. (1993).",tags:["bootstrapping","resampling"]},

  {id:"rm_036",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Internal consistency reliability, commonly measured by Cronbach's alpha, assesses which quality of a measurement instrument?",
    options:[
      "Whether the instrument produces the same scores when administered to the same participants at different times",
      "Whether the items on the instrument are measuring the same underlying construct and intercorrelate adequately",
      "Whether the instrument measures what it is intended to measure according to the established theoretical framework",
      "Whether the results obtained from the instrument can be generalised to populations beyond the study sample"
    ],correct:1,explanation:"Internal consistency reliability assesses whether items on a scale are measuring the same construct, indicated by adequate inter-item correlations. Cronbach's alpha ≥ .70 is generally acceptable.",reference:"Cronbach, L. J. (1951).",tags:["reliability","Cronbachs-alpha"]},

  {id:"rm_037",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Confirmatory factor analysis (CFA) differs from exploratory factor analysis (EFA) primarily in which respect?",
    options:[
      "CFA tests a pre-specified factor structure derived from theory, while EFA discovers structure from the data",
      "CFA is always conducted with smaller sample sizes than EFA due to its simpler computational requirements",
      "CFA produces factor loadings while EFA does not produce factor loadings for any of the observed variables",
      "CFA is used exclusively in qualitative research while EFA is only used in quantitative research approaches"
    ],correct:0,explanation:"CFA tests whether a pre-specified theoretical factor structure fits the observed data, while EFA explores data to discover the factor structure without prior theoretical specification.",reference:"Brown, T. A. (2015).",tags:["CFA","comparison"]},

  {id:"rm_038",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"A p-value of .05 means there is a 5% probability that the null hypothesis is true.",
    options:["True","False"],correct:1,explanation:"A p-value of .05 means there is a 5% probability of obtaining the observed results (or more extreme) IF the null hypothesis were true. It is not the probability that the null hypothesis is true.",reference:"Wasserstein, R. L., & Lazar, N. A. (2016).",tags:["p-value","misconception"]},

  {id:"rm_039",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Social desirability bias in survey research refers to which systematic distortion in participant responses?",
    options:[
      "The tendency for participants to randomly select response options without reading the survey questions first",
      "The tendency for participants to present themselves in a favourable light rather than responding honestly",
      "The tendency for researchers to design questions that lead participants toward preferred answer choices",
      "The tendency for participants to consistently select the middle option on all Likert scale items presented"
    ],correct:1,explanation:"Social desirability bias occurs when participants respond in ways they believe are socially acceptable rather than truthfully, particularly problematic for sensitive topics like cyber-aggression.",reference:"Paulhus, D. L. (1991).",tags:["social-desirability","bias"]},

  {id:"rm_040",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A correlation coefficient of r = .80 between two variables proves that one variable causes changes in the other variable.",
    options:["True","False"],correct:1,explanation:"Correlation does not imply causation. Even strong correlations cannot establish causal relationships; confounding variables and reverse causation remain alternative explanations.",reference:"Field, A. (2018).",tags:["correlation-causation","misconception"]},

  {id:"rm_041",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Structural equation modelling (SEM) combines which two statistical approaches into an integrated framework?",
    options:[
      "Content analysis and thematic analysis into a single unified qualitative-quantitative hybrid methodology",
      "Factor analysis and path analysis, testing both measurement models and structural relationships simultaneously",
      "Simple t-tests and chi-square tests into a more powerful combined statistical significance testing method",
      "Descriptive statistics and frequency distributions into a comprehensive data summary presentation format"
    ],correct:1,explanation:"SEM integrates factor analysis (measurement model) and path analysis (structural model), allowing simultaneous testing of measurement quality and hypothesised structural relationships.",reference:"Kline, R. B. (2016).",tags:["SEM","integrated"]},

  {id:"rm_042",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Cohen's guidelines for interpreting effect sizes (d = 0.2, 0.5, 0.8) represent which levels respectively?",
    options:[
      "Negligible, marginal, and moderate effect sizes for use across all research domains and populations studied",
      "Small, medium, and large effect sizes, though context-specific benchmarks may be more appropriate to use",
      "Weak, acceptable, and strong reliability coefficients for evaluating internal consistency of instruments",
      "Poor, adequate, and excellent model fit indices for evaluating structural equation modelling results today"
    ],correct:1,explanation:"Cohen's benchmarks of d = 0.2 (small), 0.5 (medium), and 0.8 (large) are widely used guidelines, though he himself noted that context-specific benchmarks are preferable.",reference:"Cohen, J. (1988).",tags:["effect-size","Cohens-d"]},

  {id:"rm_043",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"The problem of common method variance (CMV) in survey research arises from which methodological limitation?",
    options:[
      "Using different measurement instruments to assess different constructs in a multi-variable research model",
      "Measuring all variables using the same method (e.g., self-report), potentially inflating observed correlations",
      "Collecting data from multiple sources including self-report, peer-report, and observational assessments",
      "Using different response scale formats for different questions within the same survey instrument design"
    ],correct:1,explanation:"CMV arises when the same method (typically self-report) is used to measure all variables, potentially inflating correlations through shared method variance rather than true construct relationships.",reference:"Podsakoff, P. M., et al. (2003).",tags:["CMV","method-bias"]},

  {id:"rm_044",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Hierarchical regression analysis involves entering predictor variables into the model in which manner?",
    options:[
      "All predictor variables are entered simultaneously in a single step without any predetermined ordering",
      "Predictor variables are entered in theoretically determined sequential blocks to assess incremental variance",
      "Only the single strongest predictor is retained and all other predictors are removed from the final model",
      "Predictor variables are randomly assigned to different steps with no theoretical rationale for the order"
    ],correct:1,explanation:"Hierarchical regression enters predictors in theoretically determined sequential blocks, allowing researchers to assess the incremental variance explained by each block beyond preceding ones.",reference:"Field, A. (2018).",tags:["hierarchical-regression","blocks"]},

  {id:"rm_045",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Informed consent requires researchers to inform participants about the purpose, procedures, risks, and their right to withdraw before participation begins.",
    options:["True","False"],correct:0,explanation:"Informed consent is an ethical requirement ensuring participants understand what their participation involves, including purpose, procedures, risks, benefits, and the right to withdraw without penalty.",reference:"British Psychological Society (2021).",tags:["informed-consent","ethics"]},

  // ═══════════════════════════════════════════════════════════════
  // PERSONALITY (expanded pe_011–pe_040)
  // ═══════════════════════════════════════════════════════════════

  {id:"pe_011",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Narcissistic vulnerability differs from narcissistic grandiosity primarily in which characteristic pattern?",
    options:[
      "Vulnerable narcissism involves hypersensitivity, defensiveness, and fragile self-esteem beneath the surface",
      "Grandiose narcissism involves hypersensitivity, shame-proneness, and avoidance of social attention settings",
      "Vulnerable narcissism involves confident self-promotion, dominance, and exhibitionistic behaviour in public",
      "Grandiose narcissism involves social withdrawal, self-doubt, and chronic feelings of inadequacy and shame"
    ],correct:0,explanation:"Vulnerable narcissism is characterised by hypersensitivity, defensiveness, fragile self-esteem, and shame-proneness, contrasting with grandiose narcissism's confident self-enhancement.",reference:"Miller, J. D., et al. (2011).",tags:["narcissism","vulnerability-grandiosity"]},

  {id:"pe_012",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Sensation seeking as a personality trait is most consistently associated with which online behaviour pattern?",
    options:[
      "Avoidance of all novel online experiences and strict adherence to familiar and safe digital routines",
      "Greater engagement in risky online behaviours including aggressive interactions and content sharing",
      "Exclusive preference for text-based communication over visual or video-based digital platform content",
      "Reduced social media usage overall due to a preference for seeking stimulation in offline settings"
    ],correct:1,explanation:"Sensation seeking predicts greater engagement in risky online behaviours including aggressive content sharing, provocative posting, and risk-taking in digital environments.",reference:"Zuckerman, M. (1994).",tags:["sensation-seeking","risk"]},

  {id:"pe_013",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Gottfredson and Hirschi's self-control theory proposes that low self-control predicts deviant behaviour because of which characteristic pattern?",
    options:[
      "Low self-control individuals are systematically excluded from prosocial groups, forcing them into deviance",
      "Low self-control individuals prefer immediate gratification and are insensitive to long-term consequences",
      "Low self-control is caused by deviant behaviour rather than being a cause of it in a reverse causal path",
      "Low self-control only predicts offline deviance and has no relevance to digital or online misbehaviour"
    ],correct:1,explanation:"Gottfredson and Hirschi argue that low self-control — characterised by impulsivity, risk-seeking, and preference for immediate gratification — is the primary predictor of deviant behaviour including online.",reference:"Gottfredson, M. R., & Hirschi, T. (1990).",tags:["self-control","deviance"]},

  {id:"pe_014",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Hostile attribution bias is considered a cognitive-personality variable that consistently predicts aggressive behaviour both online and offline.",
    options:["True","False"],correct:0,explanation:"Hostile attribution bias — the tendency to interpret ambiguous cues as hostile — functions as a stable cognitive-personality variable predicting aggression across both online and offline contexts.",reference:"Crick, N. R., & Dodge, K. A. (1994).",tags:["hostile-attribution","cognitive-personality"]},

  {id:"pe_015",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Emotional intelligence in the context of online communication is most accurately defined as which capacity?",
    options:[
      "The ability to perceive, understand, manage, and use emotions effectively in oneself and in interactions",
      "The exclusive ability to suppress all emotional expression during digital communication with other people",
      "The intelligence quotient score specifically calculated from performance on emotion recognition tasks only",
      "The tendency to experience very intense emotions in response to all forms of online social media content"
    ],correct:0,explanation:"Emotional intelligence encompasses perceiving, understanding, managing, and using emotions effectively, relevant to navigating online social interactions and reducing aggressive responding.",reference:"Mayer, J. D., & Salovey, P. (1997).",tags:["emotional-intelligence","definition"]},

  {id:"pe_016",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Callous-unemotional (CU) traits in adolescents predict cyber-aggression through which primary psychological mechanism?",
    options:[
      "CU traits increase emotional sensitivity to others' distress, leading to avoidance of aggressive behaviours",
      "CU traits reduce empathic concern and guilt, lowering inhibitions against causing harm to other people online",
      "CU traits improve social skills and popularity, which indirectly leads to increased prosocial online behaviour",
      "CU traits are unrelated to online behaviour and only predict conduct problems in face-to-face school settings"
    ],correct:1,explanation:"CU traits — characterised by limited empathy, shallow affect, and reduced guilt — lower the psychological barriers to causing harm, predicting both online and offline aggression.",reference:"Frick, P. J., & White, S. F. (2008).",tags:["callous-unemotional","empathy"]},

  {id:"pe_017",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"In the Big Five personality model, openness to experience is most closely associated with which online behavioural tendency?",
    options:[
      "Strict avoidance of all unfamiliar online platforms and consistent use of only one social media application",
      "Greater tolerance of diverse viewpoints and willingness to engage with novel ideas and perspectives online",
      "Aggressive responding to disagreements and hostile confrontation with users who hold different opinions",
      "Compulsive checking of social media notifications driven by anxiety about missing important social updates"
    ],correct:1,explanation:"Openness to experience is associated with tolerance of diverse viewpoints, intellectual curiosity, and willingness to engage with novel perspectives, including in online environments.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["openness","Big-Five"]},

  {id:"pe_018",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Conscientiousness as a Big Five trait is most consistently associated with which pattern of online behaviour?",
    options:[
      "Greater engagement in impulsive and risky online behaviours including trolling and aggressive commenting",
      "Greater adherence to online rules, norms, and social expectations across various digital platform contexts",
      "Complete avoidance of all social media platforms due to concerns about productivity and time management",
      "Higher levels of online disinhibition and more frequent engagement in toxic online communication patterns"
    ],correct:1,explanation:"Conscientiousness is associated with rule-following, self-discipline, and adherence to social norms, predicting lower engagement in deviant online behaviour and greater platform rule compliance.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["conscientiousness","Big-Five"]},

  {id:"pe_019",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Neuroticism as a personality trait is most consistently associated with which pattern of reactivity online?",
    options:[
      "Reduced emotional reactivity to online events and a calm, measured response to provocative digital content",
      "Heightened emotional reactivity to negative online events and greater vulnerability to cyberbullying harm",
      "Increased likelihood of perpetrating cyber-aggression due to dominant and confrontational social tendencies",
      "Complete emotional indifference to all online social interactions regardless of their valence or intensity"
    ],correct:1,explanation:"Neuroticism is associated with heightened emotional reactivity, negative affect, and stress vulnerability, predicting greater psychological impact from negative online experiences and cyberbullying.",reference:"Kokkinos, C. M. (2007).",tags:["neuroticism","reactivity"]},

  {id:"pe_020",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Personality maturation research suggests that agreeableness and conscientiousness tend to increase from adolescence into adulthood, potentially reducing cyber-aggression risk.",
    options:["True","False"],correct:0,explanation:"The maturity principle of personality development shows increases in agreeableness and conscientiousness with age, which may contribute to declining cyber-aggression in adulthood.",reference:"Roberts, B. W., & Mroczek, D. (2008).",tags:["maturation","development"]},

  {id:"pe_021",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between psychopathy and online trolling behaviour is best characterised by which research finding?",
    options:[
      "Psychopathy has no measurable association with any form of online trolling behaviour in research studies",
      "Subclinical psychopathy significantly predicts online trolling enjoyment and trolling behaviour frequency",
      "Only clinical psychopathy predicts trolling while subclinical levels have no effect on online behaviour",
      "Psychopathy predicts reduced trolling because psychopathic individuals prefer direct confrontation instead"
    ],correct:1,explanation:"Research by Buckels et al. (2014) found subclinical psychopathy (alongside sadism) significantly predicted online trolling enjoyment and behaviour, even in non-clinical populations.",reference:"Buckels, E. E., et al. (2014).",tags:["psychopathy","trolling"]},

  {id:"pe_022",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Everyday sadism (the 'Dark Tetrad' addition) differs from the original Dark Triad traits in which specific respect?",
    options:[
      "Everyday sadism involves deriving pleasure specifically from causing suffering, uniquely predicting trolling",
      "Everyday sadism is simply a combination of the three existing Dark Triad traits without additional content",
      "Everyday sadism only manifests in clinical populations and has no relevance to normal personality variation",
      "Everyday sadism refers to enjoyment of violent media but has no connection to actual interpersonal cruelty"
    ],correct:0,explanation:"Everyday sadism — deriving intrinsic pleasure from causing others to suffer — uniquely predicts trolling behaviour beyond the Dark Triad, contributing to the 'Dark Tetrad' model.",reference:"Buckels, E. E., et al. (2014).",tags:["sadism","Dark-Tetrad"]},

  {id:"pe_023",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"The Big Five personality traits are extraversion, agreeableness, conscientiousness, neuroticism, and openness to experience.",
    options:["True","False"],correct:0,explanation:"The Big Five (Five-Factor Model) comprises extraversion, agreeableness, conscientiousness, neuroticism (vs. emotional stability), and openness to experience.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["Big-Five","definition"]},

  {id:"pe_024",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The relationship between low agreeableness and cyber-aggression is best explained by which psychological mechanism?",
    options:[
      "Low agreeableness predicts social withdrawal, reducing all forms of online interaction including aggression",
      "Low agreeableness involves antagonism, reduced empathy, and lower concern for others' welfare in interactions",
      "Low agreeableness increases anxiety about social evaluation, leading to defensive aggression online only",
      "Low agreeableness has no established relationship with any form of aggressive behaviour online or offline"
    ],correct:1,explanation:"Low agreeableness (antagonism) involves reduced empathy, trust, and concern for others' welfare, consistently predicting greater engagement in cyber-aggression across studies.",reference:"Kokkinos, C. M. (2007).",tags:["agreeableness","antagonism"]},

  {id:"pe_025",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Self-esteem's relationship with cyber-aggression perpetration shows which pattern in research literature?",
    options:[
      "High self-esteem is the strongest and most consistent predictor of cyber-aggression across all studies done",
      "The relationship is complex and inconsistent, with both low and threatened high self-esteem linked to aggression",
      "Self-esteem has absolutely no relationship with any form of online aggressive behaviour in any population",
      "Only extremely low self-esteem predicts cyber-aggression while moderate and high levels are entirely protective"
    ],correct:1,explanation:"The relationship between self-esteem and cyber-aggression is complex: both low self-esteem and threatened narcissistic self-esteem have been linked to aggression, with inconsistent findings across studies.",reference:"Patchin, J. W., & Hinduja, S. (2010).",tags:["self-esteem","complexity"]},

  {id:"pe_026",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Narcissistic rage — an intense anger response to perceived ego threats — has been linked to aggressive online behaviour following negative social media feedback.",
    options:["True","False"],correct:0,explanation:"Narcissistic rage, triggered by perceived ego threats or narcissistic injury, has been linked to retaliatory aggression online, particularly following negative feedback or social rejection on platforms.",reference:"Bushman, B. J., & Baumeister, R. F. (1998).",tags:["narcissistic-rage","ego-threat"]},

  {id:"pe_027",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'dark empathy' in personality research refers to which specific combination of traits?",
    options:[
      "The complete absence of both cognitive and affective empathy in individuals with antisocial tendencies",
      "The combination of high cognitive empathy with Dark Triad traits, enabling strategic manipulation of others",
      "The tendency to experience excessive empathy that leads to emotional burnout and compassion fatigue effects",
      "The exclusive use of empathy in therapeutic settings by clinical psychologists treating aggressive patients"
    ],correct:1,explanation:"Dark empathy describes individuals who possess high cognitive empathy alongside Dark Triad traits, using their understanding of others' emotions for strategic manipulation rather than prosocial purposes.",reference:"Heym, N., et al. (2021).",tags:["dark-empathy","cognitive"]},

  {id:"pe_028",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Impulsivity as a personality trait contributes to cyber-aggression primarily through which behavioural pathway?",
    options:[
      "Impulsive individuals carefully plan their aggressive actions online over extended periods before executing them",
      "Impulsive individuals react quickly to online provocations without adequately considering potential consequences",
      "Impulsive individuals avoid all online interactions because they fear losing control in digital environments",
      "Impulsive individuals exclusively engage in prosocial online behaviour due to their spontaneous generosity"
    ],correct:1,explanation:"Impulsivity contributes to cyber-aggression through rapid, unplanned reactions to online provocations without adequate consideration of consequences, amplified by online disinhibition.",reference:"Runions, K. C. (2013).",tags:["impulsivity","pathway"]},

  {id:"pe_029",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Machiavellianism is characterised by a cynical worldview, strategic manipulation of others, and a willingness to use deception to achieve personal goals.",
    options:["True","False"],correct:0,explanation:"Machiavellianism involves a cynical view of human nature, strategic and manipulative interpersonal style, and pragmatic morality prioritising self-interest over ethical principles.",reference:"Christie, R., & Geis, F. L. (1970).",tags:["Machiavellianism","definition"]},

  {id:"pe_030",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The 'dark personality' traits most consistently associated with online trolling behaviour include which specific combination?",
    options:[
      "High agreeableness, high conscientiousness, and high emotional stability in the Big Five personality model",
      "Subclinical sadism, psychopathy, and Machiavellianism, with sadism being the strongest unique predictor",
      "High openness to experience and high extraversion combined with average levels of neuroticism and agreeableness",
      "Clinical depression, generalised anxiety disorder, and social phobia as assessed by diagnostic criteria"
    ],correct:1,explanation:"Buckels et al. (2014) found sadism, psychopathy, and Machiavellianism predicted trolling, with everyday sadism emerging as the strongest unique predictor of trolling enjoyment.",reference:"Buckels, E. E., et al. (2014).",tags:["dark-personality","trolling"]},

  {id:"pe_031",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Attachment theory applied to online relationships suggests that anxious attachment style is associated with which digital behaviour pattern?",
    options:[
      "Minimal social media use and healthy boundaries in all online relationship and communication patterns",
      "Excessive monitoring of partners' online activities and heightened sensitivity to perceived digital rejection",
      "Complete avoidance of all online social interaction due to fear of rejection and abandonment experienced",
      "Calm and secure engagement with social media that is unaffected by relationship concerns or anxieties"
    ],correct:1,explanation:"Anxious attachment is associated with excessive monitoring of partners' online activity, jealousy triggered by social media, and heightened sensitivity to perceived digital rejection.",reference:"Drouin, M., & Landgraff, C. (2012).",tags:["attachment","anxious"]},

  {id:"pe_032",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Research suggests that personality traits interact with online environmental factors, meaning the same person may behave differently across various digital contexts.",
    options:["True","False"],correct:0,explanation:"Person-situation interaction models suggest personality traits interact with online environmental factors (platform norms, anonymity levels), producing variable behaviour across different digital contexts.",reference:"Mischel, W., & Shoda, Y. (1995).",tags:["person-situation","interaction"]},

  {id:"pe_033",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of 'vulnerable dark triad' refers to which specific personality configuration?",
    options:[
      "The standard Dark Triad traits measured using the most widely cited and validated assessment instrument",
      "The vulnerable variants of narcissism, psychopathy, and Machiavellianism characterised by emotional instability",
      "A clinical diagnosis requiring formal psychiatric assessment and meeting strict diagnostic criteria for each trait",
      "The Dark Triad traits measured exclusively in forensic populations with documented criminal conviction histories"
    ],correct:1,explanation:"The vulnerable dark triad captures the emotionally unstable, insecure variants of narcissism (vulnerable), psychopathy (secondary), and Machiavellianism (anxious), distinct from grandiose presentations.",reference:"Miller, J. D., et al. (2010).",tags:["vulnerable-dark-triad","variants"]},

  {id:"pe_034",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Which Big Five personality trait is most strongly and consistently associated with reduced cyber-aggression perpetration?",
    options:[
      "Extraversion, because outgoing individuals prefer positive face-to-face interaction over online conflict",
      "Agreeableness, because agreeable individuals are more empathic, cooperative, and concerned about others",
      "Openness, because open individuals are too intellectually curious to engage in aggressive behaviour online",
      "Neuroticism, because emotionally unstable individuals are too anxious to initiate aggressive interactions"
    ],correct:1,explanation:"Agreeableness is the Big Five trait most consistently negatively associated with cyber-aggression, as it encompasses empathy, cooperation, trust, and concern for others' welfare.",reference:"Kokkinos, C. M. (2007).",tags:["agreeableness","protective"]},

  {id:"pe_035",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The HEXACO model of personality adds which trait beyond the Big Five that is particularly relevant to understanding online deviance?",
    options:[
      "Honesty-Humility, which captures sincerity, fairness, greed avoidance, and modesty in social interactions",
      "Digital Literacy, which captures the ability to navigate and use technology platforms effectively and safely",
      "Social Dominance, which captures the desire to achieve and maintain hierarchical power over other people",
      "Emotional Granularity, which captures the ability to differentiate between closely related emotional states"
    ],correct:0,explanation:"The HEXACO model adds Honesty-Humility, which is negatively associated with exploitative behaviour, manipulation, and Dark Triad traits, predicting lower cyber-aggression and online deviance.",reference:"Ashton, M. C., & Lee, K. (2007).",tags:["HEXACO","Honesty-Humility"]},

  {id:"pe_036",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Research consistently shows that extraversion predicts greater social media use but does not reliably predict cyber-aggression perpetration.",
    options:["True","False"],correct:0,explanation:"Extraversion consistently predicts greater social media engagement and use, but its relationship with cyber-aggression perpetration is inconsistent and generally non-significant across studies.",reference:"Kokkinos, C. M. (2007).",tags:["extraversion","social-media"]},

  {id:"pe_037",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The 'personality-situation transaction' model suggests that aggressive individuals shape their online environments through which process?",
    options:[
      "Aggressive individuals passively receive whatever content algorithms happen to deliver to their feeds",
      "Aggressive individuals actively select, evoke, and create online environments that reinforce aggressive tendencies",
      "Aggressive individuals are randomly distributed across all online platforms with no selection bias operating",
      "Aggressive individuals exclusively use encrypted platforms to avoid detection of their aggressive behaviour"
    ],correct:1,explanation:"Personality-situation transaction models suggest aggressive individuals actively select hostile online environments, evoke aggressive reactions from others, and create conflict-prone interactions.",reference:"Buss, D. M. (1987).",tags:["person-situation","selection"]},

  {id:"pe_038",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Trait anger differs from state anger in which fundamental respect relevant to understanding cyber-aggression?",
    options:[
      "Trait anger refers to a stable disposition to experience anger frequently while state anger is a temporary emotion",
      "Trait anger only occurs in online contexts while state anger only occurs in face-to-face social interactions",
      "Trait anger is always more intense than state anger in every situation where the two are compared directly",
      "State anger is a personality dimension while trait anger is a momentary emotional response to provocation"
    ],correct:0,explanation:"Trait anger is a stable personality disposition reflecting the tendency to experience anger frequently and intensely; state anger is a temporary emotional response to specific situational provocations.",reference:"Spielberger, C. D. (1999).",tags:["trait-anger","state-trait"]},

  {id:"pe_039",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Moral identity as a personality variable predicts which pattern of online behaviour in research studies?",
    options:[
      "Moral identity has no measurable influence on any form of online behaviour in published research findings",
      "Stronger moral identity is associated with less cyber-aggression and greater likelihood of bystander intervention",
      "Stronger moral identity paradoxically predicts more cyber-aggression through moral licensing mechanisms only",
      "Moral identity only predicts offline prosocial behaviour and has no relevance to digital contexts or platforms"
    ],correct:1,explanation:"Stronger moral identity — where moral values are central to self-concept — predicts less cyber-aggression, greater moral courage online, and increased likelihood of intervening as a bystander.",reference:"Aquino, K., & Reed, A. (2002).",tags:["moral-identity","prosocial"]},

  {id:"pe_040",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"The Dark Triad of personality consists of narcissism, Machiavellianism, and psychopathy, all sharing a common core of callousness and manipulation.",
    options:["True","False"],correct:0,explanation:"The Dark Triad (Paulhus & Williams, 2002) comprises narcissism, Machiavellianism, and psychopathy, sharing a common core of callousness, disagreeableness, and manipulativeness.",reference:"Paulhus, D. L., & Williams, K. M. (2002).",tags:["Dark-Triad","definition"]},

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH METHODS (expanded rm_046–rm_139)
  // ═══════════════════════════════════════════════════════════════

  {id:"rm_046",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What is the primary purpose of a one-way ANOVA?",
    options:[
      "To compare the means of three or more independent groups on a single continuous dependent variable",
      "To examine the relationship between two categorical variables using observed and expected frequencies",
      "To predict a continuous outcome variable from two or more continuous predictor variables together",
      "To determine whether two paired sets of observations differ significantly over repeated time points"
    ],correct:0,explanation:"A one-way ANOVA tests whether three or more independent group means differ significantly on a single continuous dependent variable, using the F-ratio to compare between-group to within-group variance.",reference:"Field, A. (2018).",tags:["ANOVA","one-way"]},

  {id:"rm_047",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In a factorial ANOVA, what does a significant interaction effect indicate?",
    options:[
      "Both independent variables have significant main effects that operate entirely independently of each other",
      "The effect of one independent variable on the dependent variable changes depending on the level of another",
      "The dependent variable is normally distributed within each combination of the independent variable levels",
      "The overall model is statistically significant but none of the individual predictors reach significance"
    ],correct:1,explanation:"A significant interaction in factorial ANOVA means the effect of one IV on the DV is not constant across levels of the other IV — the factors combine in a non-additive way.",reference:"Field, A. (2018).",tags:["ANOVA","factorial","interaction"]},

  {id:"rm_048",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Which assumption is unique to repeated-measures ANOVA but not required in between-subjects ANOVA?",
    options:[
      "The dependent variable must be measured on at least an interval or ratio scale of measurement overall",
      "Sphericity — the variances of differences between all pairs of conditions must be approximately equal",
      "The residuals of the dependent variable must approximate a normal distribution within each group tested",
      "The observations within each group must be independent of one another and randomly sampled from the population"
    ],correct:1,explanation:"Sphericity (equal variances of differences between condition pairs) is specific to repeated-measures designs. Violations can be corrected with Greenhouse-Geisser or Huynh-Feldt adjustments.",reference:"Field, A. (2018).",tags:["ANOVA","repeated-measures","sphericity"]},

  {id:"rm_049",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"MANOVA is used when a study has two or more dependent variables measured simultaneously.",
    options:["True","False"],correct:0,explanation:"MANOVA (Multivariate Analysis of Variance) extends ANOVA to situations with multiple dependent variables, testing whether group means differ across the combined set of DVs.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["MANOVA","definition"]},

  {id:"rm_050",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the primary advantage of ANCOVA over standard ANOVA?",
    options:[
      "ANCOVA allows researchers to use categorical dependent variables instead of continuous ones in the model",
      "ANCOVA eliminates the need for random assignment by statistically controlling for confounding covariates",
      "ANCOVA reduces within-group error variance by statistically removing the influence of a covariate variable",
      "ANCOVA permits analysis of non-normal data without requiring any parametric distributional assumptions"
    ],correct:2,explanation:"ANCOVA statistically controls for covariates, reducing within-group error variance and increasing statistical power. However, it does not fully substitute for random assignment.",reference:"Field, A. (2018).",tags:["ANCOVA","covariate"]},

  {id:"rm_051",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Which test is the non-parametric alternative to an independent-samples t-test?",
    options:[
      "The Kruskal-Wallis H test comparing ranked scores across three or more independent groups of participants",
      "The Friedman test comparing ranked scores across three or more related repeated measurement conditions",
      "The Mann-Whitney U test comparing ranked scores between two independent groups of research participants",
      "The Wilcoxon signed-rank test comparing ranked scores between two related paired measurement conditions"
    ],correct:2,explanation:"The Mann-Whitney U test is the non-parametric equivalent of the independent-samples t-test, comparing the rank distributions of two independent groups.",reference:"Field, A. (2018).",tags:["non-parametric","Mann-Whitney"]},

  {id:"rm_052",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The Kruskal-Wallis test is the non-parametric equivalent of which parametric test?",
    options:[
      "The repeated-measures ANOVA comparing means across multiple related time-point measurement conditions",
      "The independent-samples t-test comparing means between exactly two independent groups of participants",
      "The one-way independent ANOVA comparing means across three or more independent groups of participants",
      "The paired-samples t-test comparing means between two related conditions for matched paired data sets"
    ],correct:2,explanation:"The Kruskal-Wallis H test is the non-parametric alternative to one-way independent ANOVA, using ranked data to compare three or more independent groups.",reference:"Field, A. (2018).",tags:["non-parametric","Kruskal-Wallis"]},

  {id:"rm_053",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"The Wilcoxon signed-rank test is used to compare two related samples when the data violate parametric assumptions.",
    options:["True","False"],correct:0,explanation:"The Wilcoxon signed-rank test is the non-parametric alternative to the paired-samples t-test, suitable when data violate normality assumptions in repeated or matched designs.",reference:"Field, A. (2018).",tags:["non-parametric","Wilcoxon"]},

  {id:"rm_054",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Which of the following correctly describes the chi-square test of independence?",
    options:[
      "It tests whether the mean ranks differ significantly between three or more independent participant groups",
      "It tests whether there is a significant association between two categorical variables using frequency data",
      "It tests whether a continuous outcome variable can be predicted from one or more categorical predictor variables",
      "It tests whether the variance of a continuous variable is equal across two or more comparison group samples"
    ],correct:1,explanation:"The chi-square test of independence examines whether two categorical variables are statistically associated by comparing observed cell frequencies to those expected under independence.",reference:"Field, A. (2018).",tags:["chi-square","categorical"]},

  {id:"rm_055",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does the Shapiro-Wilk test assess in the context of assumption checking?",
    options:[
      "Whether the variances of the dependent variable are equal across all levels of the independent variable",
      "Whether the relationship between the predictor and outcome variables follows a linear functional form",
      "Whether the residuals or scores in a sample significantly deviate from a normal distribution pattern",
      "Whether the observations in the dataset are statistically independent of one another across all cases"
    ],correct:2,explanation:"The Shapiro-Wilk test assesses whether data significantly depart from normality. A significant result (p < .05) indicates the distribution differs from normal.",reference:"Field, A. (2018).",tags:["normality","assumptions"]},

  {id:"rm_056",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Levene's test is used to assess which statistical assumption before conducting ANOVA?",
    options:[
      "That the dependent variable is measured on at least an interval level of measurement precision overall",
      "That the variance of the dependent variable is approximately equal across all comparison groups tested",
      "That each participant's score is independent of all other participants' scores in the full dataset sample",
      "That the relationship between the covariate and dependent variable is linear in form and direction overall"
    ],correct:1,explanation:"Levene's test evaluates homogeneity of variances — the assumption that group variances are approximately equal — which is required for valid F-tests in ANOVA.",reference:"Field, A. (2018).",tags:["homogeneity","assumptions","Levene"]},

  {id:"rm_057",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Homoscedasticity means that the spread of residuals is approximately constant across all levels of the predictor variable.",
    options:["True","False"],correct:0,explanation:"Homoscedasticity requires that residual variance remains roughly constant across predicted values. Its violation (heteroscedasticity) can bias standard errors in regression.",reference:"Field, A. (2018).",tags:["homoscedasticity","assumptions"]},

  {id:"rm_058",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What does the Durbin-Watson statistic test for in regression analysis?",
    options:[
      "Whether there is multicollinearity among the predictor variables included in the regression model overall",
      "Whether the residuals of the regression model are autocorrelated across sequential observation data points",
      "Whether the dependent variable follows a normal distribution in the overall sample population of interest",
      "Whether the effect sizes in the regression model are large enough to be practically meaningful in context"
    ],correct:1,explanation:"The Durbin-Watson statistic (range 0-4, ideal near 2) tests for autocorrelation in residuals. Values substantially below 2 indicate positive autocorrelation; above 2, negative.",reference:"Field, A. (2018).",tags:["Durbin-Watson","autocorrelation","regression"]},

  {id:"rm_059",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What does Mahalanobis distance measure in multivariate analysis?",
    options:[
      "The linear association between two continuous variables after controlling for measurement error variance",
      "The distance of an individual case from the centroid of all cases in multivariate space across variables",
      "The proportion of variance in the dependent variable explained by the full set of predictor variables",
      "The degree to which adding a single predictor changes the regression coefficients of other predictor variables"
    ],correct:1,explanation:"Mahalanobis distance measures how far a case lies from the multivariate centroid (mean of all variables), accounting for covariance. Large values indicate multivariate outliers.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["Mahalanobis","outliers","multivariate"]},

  {id:"rm_060",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Cook's distance in regression analysis is primarily used to identify which type of problem?",
    options:[
      "Cases that are multivariate outliers lying far from the centroid in the predictor variable data space",
      "Violations of the normality assumption in the distribution of the residuals of the full regression model",
      "Influential cases whose removal would substantially change the estimated regression coefficients overall",
      "Predictor variables that are highly correlated with each other producing multicollinearity problems"
    ],correct:2,explanation:"Cook's distance quantifies how much all regression coefficients would change if a particular case were removed. Values above 1 (or 4/n) suggest unduly influential cases.",reference:"Field, A. (2018).",tags:["Cooks-distance","influence","regression"]},

  {id:"rm_061",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"When data show heteroscedasticity in regression, which consequence is most likely?",
    options:[
      "The regression coefficients themselves become biased and no longer estimate the true population values",
      "The standard errors of the coefficients become unreliable, undermining significance tests and intervals",
      "The R-squared value is artificially inflated, making the model appear to explain more variance than it does",
      "The direction of the relationship between predictor and outcome reverses from positive to negative"
    ],correct:1,explanation:"Heteroscedasticity does not bias coefficient estimates but makes standard errors unreliable, potentially leading to incorrect significance tests. Robust standard errors can address this.",reference:"Field, A. (2018).",tags:["heteroscedasticity","regression","assumptions"]},

  {id:"rm_062",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Which data transformation is most commonly applied to positively skewed data to improve normality?",
    options:[
      "Applying a reflect-and-square-root transformation that reverses scores then takes the square root value",
      "Applying a logarithmic transformation that compresses the upper tail of the distribution substantially",
      "Applying a squaring transformation that exaggerates differences at the upper end of the distribution",
      "Applying a reflect-and-inverse transformation that reverses scores then takes the reciprocal of each"
    ],correct:1,explanation:"Log transformation is the most common remedy for positive skew, compressing the long upper tail. For moderate skew, square root may suffice; for severe skew, inverse transformation.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["transformation","normality","skewness"]},

  {id:"rm_063",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Outliers should always be removed from a dataset before conducting any statistical analysis.",
    options:["True","False"],correct:1,explanation:"Outliers should be investigated, not automatically removed. They may represent genuine extreme values, data entry errors, or different populations. Decisions should be principled and reported.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["outliers","data-cleaning"]},

  {id:"rm_064",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In structural equation modelling, what does the CFI (Comparative Fit Index) compare?",
    options:[
      "The chi-square of the hypothesised model against the chi-square of a baseline null independence model",
      "The root mean square of the residual differences between observed and model-implied covariance matrices",
      "The ratio of model parameters to sample size to determine whether the model is over-identified overall",
      "The proportion of total variance in endogenous variables explained by the full structural path model"
    ],correct:0,explanation:"CFI compares the chi-square of the target model to a null (independence) model. Values of .95 or above indicate good fit. It is relatively insensitive to sample size.",reference:"Hu, L., & Bentler, P. M. (1999).",tags:["SEM","CFI","fit-indices"]},

  {id:"rm_065",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What does an RMSEA value below .06 conventionally indicate in structural equation modelling?",
    options:[
      "That the model has poor fit and should be rejected in favour of an alternative specification entirely",
      "That the model demonstrates close fit to the observed data according to established cutoff guidelines",
      "That the model is exactly identified and therefore the fit index cannot be meaningfully interpreted",
      "That the sample size is too small for the complexity of the model being tested in the analysis"
    ],correct:1,explanation:"RMSEA below .06 indicates close fit (Hu & Bentler, 1999). Values below .08 suggest reasonable fit. RMSEA penalises model complexity and includes a confidence interval.",reference:"Hu, L., & Bentler, P. M. (1999).",tags:["SEM","RMSEA","fit-indices"]},

  {id:"rm_066",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does the SRMR (Standardised Root Mean Square Residual) represent in SEM?",
    options:[
      "The average standardised difference between the observed correlations and model-predicted correlations",
      "The probability that the model chi-square value occurred by chance under the null hypothesis of exact fit",
      "The proportion of variance in the latent variables that is explained by their measured indicator variables",
      "The ratio of free parameters to total possible parameters indicating the degree of model parsimony"
    ],correct:0,explanation:"SRMR is the average discrepancy between observed and model-implied correlations. Values of .08 or below suggest good fit. It is an absolute fit index not adjusted for complexity.",reference:"Hu, L., & Bentler, P. M. (1999).",tags:["SEM","SRMR","fit-indices"]},

  {id:"rm_067",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"The TLI (Tucker-Lewis Index) penalises model complexity, unlike the CFI which does not adjust for parsimony.",
    options:["True","False"],correct:0,explanation:"The TLI (also called NNFI) includes a parsimony correction, penalising complex models more than the CFI. Both compare to a null model, but TLI favours simpler solutions.",reference:"Hu, L., & Bentler, P. M. (1999).",tags:["SEM","TLI","fit-indices"]},

  {id:"rm_068",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In path analysis, what distinguishes it from full structural equation modelling?",
    options:[
      "Path analysis uses only observed variables whereas SEM incorporates latent variables with multiple indicators",
      "Path analysis can model bidirectional relationships whereas SEM only models unidirectional causal paths",
      "Path analysis requires no assumptions about variable distributions whereas SEM requires multivariate normality",
      "Path analysis is limited to two variables whereas SEM can include three or more variables simultaneously"
    ],correct:0,explanation:"Path analysis models causal relationships among observed variables only. Full SEM adds latent variables (measured by multiple indicators), allowing correction for measurement error.",reference:"Kline, R. B. (2016).",tags:["path-analysis","SEM"]},

  {id:"rm_069",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What does a latent variable represent in structural equation modelling?",
    options:[
      "A directly measured survey item that serves as the primary outcome variable in the structural model",
      "An unobserved construct inferred from the shared variance of multiple measured indicator variables",
      "A control variable included in the model to account for potential confounding demographic differences",
      "A moderating variable that changes the strength of the relationship between predictor and outcome"
    ],correct:1,explanation:"Latent variables are unobserved constructs inferred from common variance shared among multiple indicators. They are free from unique item-level measurement error.",reference:"Kline, R. B. (2016).",tags:["latent-variable","SEM"]},

  {id:"rm_070",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Measurement invariance testing in SEM progressively evaluates which sequence of constraints?",
    options:[
      "Configural invariance, then metric invariance, then scalar invariance, then strict factorial invariance",
      "Scalar invariance, then configural invariance, then strict invariance, then metric factor invariance",
      "Strict invariance, then scalar invariance, then metric invariance, then configural factor invariance",
      "Metric invariance, then strict invariance, then configural invariance, then scalar factor invariance"
    ],correct:0,explanation:"Measurement invariance is tested hierarchically: configural (same factor structure), metric (equal loadings), scalar (equal intercepts), and strict (equal residual variances).",reference:"Vandenberg, R. J., & Lance, C. E. (2000).",tags:["measurement-invariance","SEM"]},

  {id:"rm_071",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Harman's single-factor test is used to detect which methodological problem?",
    options:[
      "Whether predictor variables in regression are too highly correlated with each other creating multicollinearity",
      "Whether a single factor accounts for the majority of covariance indicating common method variance bias",
      "Whether the reliability of a scale is sufficient for research purposes based on internal consistency values",
      "Whether the sample size is adequate for the number of parameters estimated in the statistical model"
    ],correct:1,explanation:"Harman's single-factor test loads all items into one factor in exploratory factor analysis. If one factor explains more than 50% of variance, common method variance may be a concern.",reference:"Podsakoff, P. M., et al. (2003).",tags:["common-method-variance","Harman"]},

  {id:"rm_072",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"The common latent factor (CLF) method for assessing common method variance involves which procedure?",
    options:[
      "Running a confirmatory factor analysis with a single latent factor connected to all observed indicators",
      "Comparing standardised regression weights with and without a latent factor linked to all observed items",
      "Calculating the average variance extracted for each construct and comparing it to shared variance values",
      "Conducting a chi-square difference test between a one-factor model and the hypothesised measurement model"
    ],correct:1,explanation:"The CLF method adds a latent factor connected to all observed variables. Comparing standardised estimates with and without this factor reveals the extent of method bias.",reference:"Podsakoff, P. M., et al. (2003).",tags:["common-method-variance","CLF"]},

  {id:"rm_073",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Social desirability bias in survey research is best controlled by which approach?",
    options:[
      "Increasing the total number of items on the survey instrument to improve overall scale reliability values",
      "Using forced-choice items, anonymity assurances, and including a social desirability measure for checking",
      "Restricting the sample to participants who score above the median on intelligence screening measure tests",
      "Administering the survey exclusively in laboratory settings under direct researcher observation conditions"
    ],correct:1,explanation:"Social desirability bias is mitigated through anonymity assurances, forced-choice formats that reduce faking, and including scales like the Marlowe-Crowne to detect and control for it.",reference:"Paulhus, D. L. (1991).",tags:["social-desirability","survey-design"]},

  {id:"rm_074",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What is the recommended practice for ordering questions in a survey to minimise bias?",
    options:[
      "Always placing demographic questions first so that participants begin with easy and non-threatening items",
      "Grouping all reverse-coded items together at the end of the survey to maintain consistent response patterns",
      "Using counterbalancing or randomisation of item order to reduce order effects and priming across respondents",
      "Presenting the most sensitive and personal questions first to ensure participants answer before fatiguing"
    ],correct:2,explanation:"Counterbalancing or randomising item order prevents systematic order effects, priming, and anchoring that could bias responses across all participants in the same direction.",reference:"Krosnick, J. A., & Presser, S. (2010).",tags:["survey-design","order-effects"]},

  {id:"rm_075",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"A visual analogue scale (VAS) differs from a Likert scale primarily in which characteristic?",
    options:[
      "A VAS uses categorical response options whereas a Likert scale uses a continuous measurement dimension",
      "A VAS presents a continuous line with anchors at each end producing interval-level data without fixed points",
      "A VAS requires verbal labels at every point along the scale whereas a Likert scale uses only endpoint labels",
      "A VAS is exclusively used for pain measurement in clinical settings and cannot be applied in survey research"
    ],correct:1,explanation:"A VAS presents a continuous line (typically 100mm) with anchors at extremes. Respondents mark any point, yielding more granular data than fixed Likert categories.",reference:"Reips, U.-D., & Funke, F. (2008).",tags:["VAS","response-scales"]},

  {id:"rm_076",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"A semantic differential scale asks respondents to rate a concept between which type of anchors?",
    options:[
      "Numbered frequency categories such as never to always arranged along a fixed seven-point scale continuum",
      "Agreement statements from strongly disagree to strongly agree on a five-point or seven-point Likert format",
      "Bipolar adjective pairs such as good-bad or strong-weak placed at opposite ends of a rating continuum",
      "Binary forced-choice options requiring selection of one of two mutually exclusive descriptive statements"
    ],correct:2,explanation:"Semantic differential scales (Osgood, 1957) use bipolar adjective pairs as anchors, allowing respondents to rate concepts along dimensions such as evaluation, potency, and activity.",reference:"Osgood, C. E., Suci, G. J., & Tannenbaum, P. H. (1957).",tags:["semantic-differential","response-scales"]},

  {id:"rm_077",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In item response theory (IRT), item difficulty refers to which parameter?",
    options:[
      "The probability that any randomly selected respondent will answer the item correctly regardless of ability",
      "The point on the latent trait continuum at which the probability of a correct response is fifty percent",
      "The maximum discrimination power that the item achieves across all levels of the underlying latent trait",
      "The degree to which the item correlates with the total score on the scale after removing that specific item"
    ],correct:1,explanation:"In IRT, item difficulty (b parameter) is the trait level at which the probability of endorsing or answering correctly is .50. Items with higher b require more of the trait.",reference:"Embretson, S. E., & Reise, S. P. (2000).",tags:["IRT","item-difficulty"]},

  {id:"rm_078",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"How does item response theory (IRT) differ fundamentally from classical test theory (CTT)?",
    options:[
      "CTT models the probability of item responses as a function of a latent trait while IRT focuses on totals",
      "IRT models item responses as a function of latent traits yielding sample-independent item parameter estimates",
      "IRT requires smaller sample sizes than CTT to achieve stable and reliable parameter estimates for all items",
      "CTT provides item-level information functions that indicate measurement precision at each trait level exactly"
    ],correct:1,explanation:"IRT models the relationship between latent traits and item responses probabilistically, producing item parameters that are (theoretically) invariant across samples, unlike CTT's sample-dependent statistics.",reference:"Embretson, S. E., & Reise, S. P. (2000).",tags:["IRT","CTT","comparison"]},

  {id:"rm_079",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Test-retest reliability assesses the consistency of a measure across two different time points.",
    options:["True","False"],correct:0,explanation:"Test-retest reliability evaluates temporal stability by administering the same measure to the same participants at two time points and correlating the scores.",reference:"Field, A. (2018).",tags:["test-retest","reliability"]},

  {id:"rm_080",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Cohen's kappa is used to assess inter-rater reliability while correcting for which factor?",
    options:[
      "The overall sample size that could inflate the correlation coefficient between the two raters' scores",
      "The level of agreement between raters that would be expected to occur purely by random chance alone",
      "The systematic bias that occurs when one rater consistently scores higher than the other rater overall",
      "The restriction of range caused by measuring only a narrow subset of the full construct being assessed"
    ],correct:1,explanation:"Cohen's kappa adjusts observed agreement between two raters by subtracting the proportion of agreement expected by chance, providing a more conservative reliability estimate.",reference:"Cohen, J. (1960).",tags:["Cohens-kappa","inter-rater","reliability"]},

  {id:"rm_081",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The intraclass correlation coefficient (ICC) is preferred over Pearson's r for inter-rater reliability because of which advantage?",
    options:[
      "ICC accounts for both consistency and absolute agreement between raters not just relative rank ordering",
      "ICC can only be calculated with exactly two raters making it more precise than Pearson's r for pairs",
      "ICC automatically corrects for non-normal distributions in the ratings data without any transformation",
      "ICC does not require interval or ratio data and can be used with nominal categorical rating variables"
    ],correct:0,explanation:"ICC captures both rank-order consistency and absolute agreement between raters, whereas Pearson's r only assesses linear association and misses systematic level differences.",reference:"Shrout, P. E., & Fleiss, J. L. (1979).",tags:["ICC","inter-rater","reliability"]},

  {id:"rm_082",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In diagnostic testing, sensitivity refers to which specific performance characteristic?",
    options:[
      "The proportion of true negatives correctly identified by the test out of all actually negative individuals",
      "The proportion of true positives correctly identified by the test out of all actually positive individuals",
      "The proportion of positive test results that are true positives rather than false positive errors overall",
      "The proportion of negative test results that are true negatives rather than false negative errors overall"
    ],correct:1,explanation:"Sensitivity (true positive rate) is the proportion of actual positives correctly identified. High sensitivity means few true cases are missed (low false negative rate).",reference:"Altman, D. G., & Bland, J. M. (1994).",tags:["sensitivity","diagnostic"]},

  {id:"rm_083",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does a ROC curve plot in the evaluation of a diagnostic or classification test?",
    options:[
      "The positive predictive value against the negative predictive value across different prevalence rates",
      "The true positive rate against the false positive rate (1 minus specificity) at varying decision thresholds",
      "The test reliability coefficient against the number of items included in the scale at each scale length",
      "The observed frequencies against the expected frequencies for each category in a goodness-of-fit analysis"
    ],correct:1,explanation:"A ROC (Receiver Operating Characteristic) curve plots sensitivity against 1-specificity across all possible cut-off thresholds. The area under the curve (AUC) summarises overall discriminatory accuracy.",reference:"Fawcett, T. (2006).",tags:["ROC","diagnostic","classification"]},

  {id:"rm_084",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In logistic regression, what does the odds ratio represent?",
    options:[
      "The probability of the outcome occurring divided by the probability of the outcome not occurring overall",
      "The factor by which the odds of the outcome change for a one-unit increase in the predictor variable",
      "The proportion of total variance in the binary outcome explained by all predictors in the model together",
      "The standardised regression coefficient indicating the relative importance of each predictor in the model"
    ],correct:1,explanation:"The odds ratio in logistic regression indicates how much the odds of the outcome multiply for each one-unit increase in the predictor, holding other variables constant.",reference:"Field, A. (2018).",tags:["logistic-regression","odds-ratio"]},

  {id:"rm_085",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Logistic regression is appropriate when the outcome variable is binary or categorical rather than continuous.",
    options:["True","False"],correct:0,explanation:"Logistic regression models the probability of a categorical (typically binary) outcome as a function of predictor variables, using the logit link function.",reference:"Field, A. (2018).",tags:["logistic-regression","definition"]},

  {id:"rm_086",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"A hazard ratio in survival analysis represents which quantity?",
    options:[
      "The median time until an event occurs for the treatment group divided by the median for the control group",
      "The instantaneous rate of event occurrence in one group relative to the rate in the comparison group",
      "The cumulative probability of surviving past a specified time point for both study groups combined",
      "The absolute difference in proportions experiencing the event between the treatment and control groups"
    ],correct:1,explanation:"The hazard ratio compares the instantaneous event rate (hazard) in one group to another. HR above 1 means higher risk; HR below 1 means lower risk relative to the reference group.",reference:"Bland, J. M., & Altman, D. G. (2004).",tags:["hazard-ratio","survival-analysis"]},

  {id:"rm_087",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In survival analysis, what does the Kaplan-Meier estimator calculate?",
    options:[
      "The regression coefficient for each predictor in a proportional hazards model with multiple covariates",
      "The cumulative probability of surviving (not experiencing the event) beyond each observed time point",
      "The median hazard ratio comparing event rates between two or more treatment conditions simultaneously",
      "The total number of events expected under the null hypothesis of equal survival across all groups"
    ],correct:1,explanation:"The Kaplan-Meier method estimates the survival function — the probability of surviving past each time point — accounting for censored observations in a non-parametric manner.",reference:"Kaplan, E. L., & Meier, P. (1958).",tags:["Kaplan-Meier","survival-analysis"]},

  {id:"rm_088",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In meta-analysis, what is the key distinction between fixed-effects and random-effects models?",
    options:[
      "Fixed-effects models assume a common true effect across all studies while random-effects assume effects vary",
      "Random-effects models require larger samples per study while fixed-effects models work with any sample size",
      "Fixed-effects models weight all studies equally while random-effects weight studies by their sample size only",
      "Random-effects models can only combine experimental studies while fixed-effects can combine any study design"
    ],correct:0,explanation:"Fixed-effects models assume one true effect size that all studies estimate. Random-effects models assume effect sizes vary across studies due to real differences in populations, methods, etc.",reference:"Borenstein, M., et al. (2009).",tags:["meta-analysis","fixed-random"]},

  {id:"rm_089",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The I-squared statistic in meta-analysis quantifies which property of the combined studies?",
    options:[
      "The overall statistical significance of the pooled effect size across all included research study samples",
      "The percentage of total variability in effect sizes attributable to true heterogeneity rather than chance",
      "The number of additional null studies needed to reduce the overall effect to statistical non-significance",
      "The average methodological quality rating of the primary studies included in the systematic review process"
    ],correct:1,explanation:"I-squared indicates the proportion of observed variance in effects that reflects real heterogeneity rather than sampling error. Values of 25%, 50%, and 75% represent low, moderate, and high heterogeneity.",reference:"Higgins, J. P., et al. (2003).",tags:["meta-analysis","heterogeneity","I-squared"]},

  {id:"rm_090",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does a forest plot display in the context of meta-analysis?",
    options:[
      "The funnel-shaped distribution of effect sizes plotted against precision to detect publication bias visually",
      "The individual effect sizes and confidence intervals from each study alongside the pooled summary estimate",
      "The cumulative change in the pooled effect size as each study is sequentially added to the overall analysis",
      "The correlation matrix among all predictor variables used in a meta-regression of study-level moderators"
    ],correct:1,explanation:"A forest plot displays each study's effect size (point estimate) with its confidence interval, plus the overall pooled estimate, allowing visual assessment of consistency and precision.",reference:"Borenstein, M., et al. (2009).",tags:["meta-analysis","forest-plot"]},

  {id:"rm_091",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"A funnel plot in meta-analysis is used primarily to assess which potential threat?",
    options:[
      "Whether the effect sizes from individual studies are homogeneous and reflect one true population effect",
      "Whether there is publication bias as indicated by asymmetry in the plot of effects against precision",
      "Whether the meta-analytic model specification is correct by examining the distribution of residual values",
      "Whether the included studies used sufficiently rigorous methodology based on quality assessment criteria"
    ],correct:1,explanation:"Funnel plots display effect sizes against precision (often standard error). Asymmetry suggests publication bias — small studies with non-significant results may be missing.",reference:"Sterne, J. A., et al. (2011).",tags:["meta-analysis","funnel-plot","publication-bias"]},

  {id:"rm_092",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Publication bias occurs when studies with statistically significant results are more likely to be published than those with null findings.",
    options:["True","False"],correct:0,explanation:"Publication bias is the systematic over-representation of significant results in the published literature, leading to inflated effect sizes in meta-analyses and a distorted evidence base.",reference:"Rothstein, H. R., et al. (2005).",tags:["publication-bias","meta-analysis"]},

  {id:"rm_093",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The PRISMA guidelines for systematic reviews primarily specify which aspect of the review process?",
    options:[
      "The statistical methods required for calculating pooled effect sizes in quantitative meta-analytic syntheses",
      "The transparent reporting of search strategy, study selection, data extraction, and synthesis methodology",
      "The minimum sample size needed for each primary study to be included in the systematic review process",
      "The quality assessment tool that must be used to evaluate the risk of bias in every single included study"
    ],correct:1,explanation:"PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) provides a checklist and flow diagram for transparent, complete reporting of review methodology and findings.",reference:"Page, M. J., et al. (2021).",tags:["PRISMA","systematic-review"]},

  {id:"rm_094",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In Braun and Clarke's thematic analysis, what is the purpose of the generating initial codes phase?",
    options:[
      "Identifying overarching themes that capture the broadest patterns found across the entire dataset overall",
      "Systematically labelling interesting features of the data in a manner relevant to the research question",
      "Writing the final narrative report that weaves together all themes with illustrative data extract examples",
      "Reviewing and refining themes by checking them against the coded extracts and the complete full dataset"
    ],correct:1,explanation:"Generating initial codes involves systematically working through the dataset, labelling features of interest. Codes are the smallest units of analysis, later organised into broader themes.",reference:"Braun, V., & Clarke, V. (2006).",tags:["thematic-analysis","qualitative","coding"]},

  {id:"rm_095",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"IPA is distinguished from other qualitative methods by its focus on which aspect?",
    options:[
      "Developing a substantive theory grounded in the systematic collection and analysis of data from the field",
      "Understanding how individual participants make sense of their personal lived experience of a phenomenon",
      "Identifying the frequency and distribution of themes across a large and representative qualitative sample",
      "Analysing the structure and function of language use in naturally occurring social discourse and interaction"
    ],correct:1,explanation:"IPA focuses on the detailed examination of how individuals perceive and make sense of significant life experiences, using a double hermeneutic (participant's sense-making interpreted by the researcher).",reference:"Smith, J. A., Flowers, P., & Larkin, M. (2009).",tags:["IPA","qualitative","phenomenology"]},

  {id:"rm_096",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Grounded theory methodology aims to achieve which primary research objective?",
    options:[
      "Testing pre-specified hypotheses derived from existing theory using qualitative data from interview sessions",
      "Generating a substantive theory that is systematically developed from and grounded in collected data",
      "Providing a thick description of cultural practices through prolonged ethnographic field observation work",
      "Measuring the frequency of linguistic patterns in naturally occurring text and conversation data samples"
    ],correct:1,explanation:"Grounded theory aims to generate theory from data through iterative collection, coding, and constant comparison, rather than testing pre-existing hypotheses.",reference:"Charmaz, K. (2014).",tags:["grounded-theory","qualitative"]},

  {id:"rm_097",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Which mixed methods design collects qualitative and quantitative data simultaneously?",
    options:[
      "An exploratory sequential design that begins with qualitative data before collecting quantitative data",
      "An explanatory sequential design that begins with quantitative data before collecting qualitative data",
      "A convergent parallel design that collects both types of data at the same time and integrates results",
      "A transformative design that uses only one data type but interprets it through both analytical lenses"
    ],correct:2,explanation:"A convergent (or concurrent) parallel design collects quantitative and qualitative data simultaneously, then merges the results to provide a comprehensive understanding of the research problem.",reference:"Creswell, J. W., & Plano Clark, V. L. (2018).",tags:["mixed-methods","convergent"]},

  {id:"rm_098",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"Which ethical principle requires researchers to tell participants about the study before they agree to take part?",
    options:[
      "Debriefing, which involves providing full information about the study after participation is fully completed",
      "Confidentiality, which involves protecting participants' personal data from unauthorised access or disclosure",
      "Informed consent, which involves providing sufficient information for a voluntary and knowledgeable decision",
      "Beneficence, which involves ensuring that the research produces meaningful benefits for society at large"
    ],correct:2,explanation:"Informed consent requires researchers to provide clear information about the study's purpose, procedures, risks, and the right to withdraw, enabling a voluntary, informed participation decision.",reference:"British Psychological Society (2021).",tags:["ethics","informed-consent"]},

  {id:"rm_099",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"When is deception considered ethically justifiable in psychological research?",
    options:[
      "Whenever the researcher believes the scientific value of the study outweighs any potential for harm",
      "Only when no alternative non-deceptive method exists, the study has scientific merit, and debriefing follows",
      "When participants have given blanket consent to being deceived in any study they participate in that year",
      "Deception is never considered ethically justifiable under any circumstances in modern psychological research"
    ],correct:1,explanation:"Deception is permitted only when necessary, when the study has clear scientific value, when participants are not at risk of harm, and when thorough debriefing is provided afterwards.",reference:"British Psychological Society (2021).",tags:["ethics","deception"]},

  {id:"rm_100",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Debriefing is the process of informing participants about the true nature and purpose of the study after their participation has ended.",
    options:["True","False"],correct:0,explanation:"Debriefing occurs after participation and involves explaining the study's true purpose, addressing any deception used, answering questions, and ensuring no lasting harm.",reference:"British Psychological Society (2021).",tags:["ethics","debriefing"]},

  {id:"rm_101",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Research involving vulnerable populations requires additional ethical safeguards primarily because participants may have which characteristic?",
    options:[
      "Greater statistical power to detect effects making their data disproportionately influential in analyses",
      "Reduced capacity to provide fully informed consent or increased susceptibility to coercion or harm overall",
      "Higher levels of education and research literacy that make them more critical and sceptical of procedures",
      "Less availability for participation requiring researchers to offer larger financial incentives for recruitment"
    ],correct:1,explanation:"Vulnerable populations (children, prisoners, those with cognitive impairments) may have diminished capacity for informed consent or face greater risk, requiring enhanced protections.",reference:"British Psychological Society (2021).",tags:["ethics","vulnerable-populations"]},

  {id:"rm_102",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the primary purpose of pre-registering a study before data collection begins?",
    options:[
      "To ensure the study receives funding by demonstrating its feasibility to grant awarding agencies and bodies",
      "To publicly commit to hypotheses, methods, and analysis plans reducing risk of post-hoc modifications",
      "To gain ethical approval from the institutional review board before recruiting any research participants",
      "To reserve a specific journal publication slot for the completed study before the data have been collected"
    ],correct:1,explanation:"Pre-registration involves publicly recording hypotheses, design, and analysis plans before data collection, reducing HARKing (hypothesising after results are known) and p-hacking.",reference:"Nosek, B. A., et al. (2018).",tags:["pre-registration","open-science"]},

  {id:"rm_103",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Open science practices include making data, materials, and analysis code publicly available to allow independent verification of results.",
    options:["True","False"],correct:0,explanation:"Open science encompasses sharing data, materials, code, and pre-prints to enable transparency, reproducibility, and independent verification of research findings.",reference:"Nosek, B. A., et al. (2015).",tags:["open-science","transparency"]},

  {id:"rm_104",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The replication crisis in psychology refers to which widespread finding?",
    options:[
      "That most published studies use sample sizes too large to detect practically meaningful effect sizes",
      "That a substantial proportion of published findings fail to replicate when studies are repeated rigorously",
      "That qualitative research methods are inherently more reliable than quantitative approaches in psychology",
      "That replication studies are published at higher rates than original studies in major psychology journals"
    ],correct:1,explanation:"The replication crisis emerged from findings that many published psychological effects could not be reproduced (e.g., Open Science Collaboration, 2015, replicated only 36% of 100 studies).",reference:"Open Science Collaboration (2015).",tags:["replication-crisis","open-science"]},

  {id:"rm_105",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Which assumption violation is most problematic for the chi-square test of independence?",
    options:[
      "Non-normal distribution of the continuous outcome variable across the levels of the grouping variable",
      "Having expected cell frequencies below five in more than twenty percent of cells in the contingency table",
      "Unequal group sizes between the row variable categories and the column variable categories in the table",
      "The presence of a monotonic rather than linear relationship between the two categorical variables tested"
    ],correct:1,explanation:"Chi-square tests require adequate expected frequencies. With small expected counts, Fisher's exact test or likelihood ratio test should be used instead.",reference:"Field, A. (2018).",tags:["chi-square","assumptions"]},

  {id:"rm_106",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In a two-way factorial ANOVA, how many F-tests are conducted?",
    options:[
      "One F-test for the overall model fit without separately testing any individual main or interaction effects",
      "Two F-tests one for each main effect with no separate test conducted for the interaction between factors",
      "Three F-tests: one for each main effect plus one for the interaction between the two independent variables",
      "Four F-tests: one for each main effect, one for the interaction, and one for overall model significance"
    ],correct:2,explanation:"A two-way factorial ANOVA produces three F-tests: one for main effect of factor A, one for main effect of factor B, and one for the A x B interaction.",reference:"Field, A. (2018).",tags:["ANOVA","factorial"]},

  {id:"rm_107",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A repeated-measures ANOVA is appropriate when the same participants are measured under two or more conditions.",
    options:["True","False"],correct:0,explanation:"Repeated-measures ANOVA is designed for within-subjects designs where the same participants provide data across multiple conditions or time points, accounting for individual differences.",reference:"Field, A. (2018).",tags:["ANOVA","repeated-measures"]},

  {id:"rm_108",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"When sphericity is violated in repeated-measures ANOVA, which correction is typically applied?",
    options:[
      "Bonferroni correction applied to the p-values associated with all pairwise post-hoc comparison tests",
      "Greenhouse-Geisser or Huynh-Feldt correction applied to the degrees of freedom of the F-test statistic",
      "Winsorising the data at the fifth and ninety-fifth percentiles to reduce the influence of extreme scores",
      "Switching to a between-subjects ANOVA design to eliminate the dependency between repeated observations"
    ],correct:1,explanation:"Greenhouse-Geisser (conservative) and Huynh-Feldt (liberal) corrections adjust degrees of freedom to compensate for sphericity violations, producing more accurate p-values.",reference:"Field, A. (2018).",tags:["sphericity","Greenhouse-Geisser","repeated-measures"]},

  {id:"rm_109",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"MANOVA uses which test statistics to evaluate the overall multivariate effect of group membership?",
    options:[
      "Chi-square, likelihood ratio, Fisher's exact, and Cramer's V used for categorical outcome variable tests",
      "Pillai's Trace, Wilks' Lambda, Hotelling's Trace, and Roy's Largest Root for multivariate F approximations",
      "Cohen's d, Hedges' g, Glass's delta, and eta-squared used for estimating standardised effect size values",
      "Durbin-Watson, Breusch-Pagan, Goldfeld-Quandt, and White's test for regression assumption diagnostics"
    ],correct:1,explanation:"MANOVA produces four multivariate test statistics. Pillai's Trace is most robust to violations; Wilks' Lambda is most common; Roy's Largest Root is most powerful but least robust.",reference:"Tabachnick, B. G., & Fidell, L. S. (2019).",tags:["MANOVA","test-statistics"]},

  {id:"rm_110",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"ANCOVA assumes that the relationship between the covariate and the dependent variable is the same across all groups (homogeneity of regression slopes).",
    options:["True","False"],correct:0,explanation:"Homogeneity of regression slopes is a critical ANCOVA assumption — the covariate must relate to the DV equally in all groups. Violation means the covariate adjustment differs by group, invalidating results.",reference:"Field, A. (2018).",tags:["ANCOVA","assumptions","homogeneity-regression-slopes"]},

  {id:"rm_111",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"The linearity assumption in regression requires which relationship between variables?",
    options:[
      "That predictor variables are uncorrelated with each other to avoid multicollinearity in the model design",
      "That the relationship between each predictor and the outcome is linear when others are held constant",
      "That the residuals of the model follow a perfectly uniform distribution across all predicted values",
      "That the dependent variable increases monotonically with every predictor variable in the model together"
    ],correct:1,explanation:"Linearity assumes a straight-line relationship between each predictor and the outcome (holding others constant). Non-linearity can be detected via residual plots and corrected with transformations.",reference:"Field, A. (2018).",tags:["linearity","assumptions","regression"]},

  {id:"rm_112",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"The independence assumption in statistical tests requires which condition to be met?",
    options:[
      "That each participant's response is unrelated to and not influenced by any other participant's response",
      "That the predictor and outcome variables are not correlated with each other in the population of interest",
      "That the sample size is large enough to ensure the central limit theorem applies to the sampling distribution",
      "That data are collected using probability sampling methods rather than convenience sampling procedures"
    ],correct:0,explanation:"Independence requires that one observation does not influence another. Violations (e.g., clustered data, repeated measures without modelling) inflate Type I error rates.",reference:"Field, A. (2018).",tags:["independence","assumptions"]},

  {id:"rm_113",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"When data severely violate the normality assumption and transformation fails, which approach is most appropriate?",
    options:[
      "Proceeding with the parametric test anyway because ANOVA is robust to all levels of normality violation",
      "Using bootstrapping methods that estimate sampling distributions empirically without distributional assumptions",
      "Doubling the sample size which automatically corrects any normality violation through data accumulation",
      "Removing all cases that contribute to the non-normality until remaining data pass the Shapiro-Wilk test"
    ],correct:1,explanation:"Bootstrapping resamples with replacement from the observed data to build empirical sampling distributions, providing valid inference without requiring normality or other distributional assumptions.",reference:"Field, A. (2018).",tags:["bootstrapping","normality","non-parametric"]},

  {id:"rm_114",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does Cronbach's alpha measure in the context of scale development?",
    options:[
      "The degree to which a scale measures the construct it was designed to measure rather than other constructs",
      "The internal consistency of a scale based on the average inter-item correlation and the number of items",
      "The temporal stability of a scale when administered to the same participants on two separate occasions",
      "The extent to which two independent raters agree when scoring the same set of participant responses"
    ],correct:1,explanation:"Cronbach's alpha estimates internal consistency — how closely related items are as a group. It is a function of the number of items and their average inter-correlation.",reference:"Field, A. (2018).",tags:["Cronbachs-alpha","reliability","internal-consistency"]},

  {id:"rm_115",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In SEM, what does a significant chi-square test of model fit indicate?",
    options:[
      "That the model fits the data well and should be retained as an adequate representation of the data",
      "That there is a significant discrepancy between the model-implied and observed covariance matrices",
      "That all individual path coefficients in the model are statistically significant at the chosen alpha level",
      "That the latent variables explain a significant proportion of variance in their measured indicators"
    ],correct:1,explanation:"A significant chi-square in SEM indicates the model-implied covariance matrix significantly differs from the observed matrix — suggesting poor fit. However, chi-square is sensitive to sample size.",reference:"Kline, R. B. (2016).",tags:["SEM","chi-square","model-fit"]},

  {id:"rm_116",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"In meta-analysis, a random-effects model typically produces wider confidence intervals than a fixed-effects model for the same data.",
    options:["True","False"],correct:0,explanation:"Random-effects models incorporate both within-study and between-study variance, resulting in wider confidence intervals that reflect the additional uncertainty from heterogeneity.",reference:"Borenstein, M., et al. (2009).",tags:["meta-analysis","random-effects","confidence-intervals"]},

  {id:"rm_117",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"What is the purpose of post-hoc tests following a significant omnibus ANOVA?",
    options:[
      "To check whether the assumptions of ANOVA have been met before interpreting the main F-test result",
      "To determine which specific group means differ significantly after the overall F-test is significant",
      "To calculate the overall effect size for the model and determine whether it is practically meaningful",
      "To verify that the sample sizes in each group are sufficient for the statistical power of the analysis"
    ],correct:1,explanation:"Post-hoc tests (e.g., Tukey, Bonferroni, Games-Howell) identify which specific pairs of groups differ significantly after ANOVA reveals an overall significant difference.",reference:"Field, A. (2018).",tags:["ANOVA","post-hoc"]},

  {id:"rm_118",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the primary purpose of effect size reporting in addition to p-values?",
    options:[
      "Effect sizes indicate the direction of the relationship which p-values cannot determine on their own",
      "Effect sizes quantify the magnitude of an effect providing practical significance beyond statistical significance",
      "Effect sizes replace the need for confidence intervals by providing a single summary of uncertainty",
      "Effect sizes determine whether the assumptions of the statistical test have been adequately satisfied"
    ],correct:1,explanation:"P-values indicate whether an effect exists but not how large it is. Effect sizes (e.g., Cohen's d, eta-squared, r) quantify magnitude, enabling practical significance judgments.",reference:"Cohen, J. (1988).",tags:["effect-size","p-values","reporting"]},

  {id:"rm_119",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In thematic analysis, what distinguishes a theme from a code according to Braun and Clarke?",
    options:[
      "A code captures a single data item whereas a theme is a label applied to an entire participant transcript",
      "A theme captures a broader pattern of meaning across the dataset while a code labels a specific data feature",
      "Codes are generated deductively from theory whereas themes are always generated inductively from raw data",
      "Themes are identified during data collection whereas codes are only applied during the writing-up phase"
    ],correct:1,explanation:"Codes label specific features of interest at a granular level. Themes are broader patterns of shared meaning that organise multiple codes into a coherent, interpretive narrative.",reference:"Braun, V., & Clarke, V. (2006).",tags:["thematic-analysis","qualitative","themes-codes"]},

  {id:"rm_120",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In mixed methods research, triangulation refers to which strategy?",
    options:[
      "Using three different statistical tests on the same dataset to confirm that the results are consistent",
      "Combining data from three separate studies into a single meta-analytic synthesis of effect size estimates",
      "Using multiple data sources or methods to cross-check and corroborate findings for enhanced validity",
      "Recruiting participants from exactly three different demographic groups to ensure full sample diversity"
    ],correct:2,explanation:"Triangulation involves using multiple methods, data sources, or analysts to cross-validate findings. It enhances credibility by showing convergence from different approaches.",reference:"Creswell, J. W., & Plano Clark, V. L. (2018).",tags:["mixed-methods","triangulation"]},

  {id:"rm_121",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"HARKing (Hypothesising After Results are Known) is considered a questionable research practice that undermines scientific integrity.",
    options:["True","False"],correct:0,explanation:"HARKing involves presenting post-hoc hypotheses as if they were a priori, inflating false positive rates and undermining the hypothetico-deductive process. Pre-registration helps prevent it.",reference:"Kerr, N. L. (1998).",tags:["HARKing","questionable-research-practices"]},

  {id:"rm_122",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does p-hacking refer to in the context of research methodology?",
    options:[
      "Using extremely large sample sizes that make trivially small effects statistically significant at p < .05",
      "Manipulating analyses, variables, or subgroups until a statistically significant result is obtained post hoc",
      "Setting the alpha level to a value more conservative than .05 such as .01 or .001 before data collection",
      "Publishing only the studies that yield significant p-values while filing away non-significant findings"
    ],correct:1,explanation:"P-hacking involves exploiting analytic flexibility (selective reporting, optional stopping, variable transformation) to achieve p < .05, inflating false positive rates.",reference:"Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011).",tags:["p-hacking","questionable-research-practices"]},

  {id:"rm_123",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the Friedman test used for in non-parametric statistics?",
    options:[
      "Comparing the distributions of two independent groups when data violate normality assumptions overall",
      "Comparing the distributions of three or more related groups measured on ordinal or non-normal data",
      "Testing the association between two categorical variables using a contingency table of frequencies",
      "Assessing whether a sample distribution significantly differs from a specified theoretical distribution"
    ],correct:1,explanation:"The Friedman test is the non-parametric alternative to one-way repeated-measures ANOVA, comparing ranked data across three or more related conditions or time points.",reference:"Field, A. (2018).",tags:["Friedman","non-parametric","repeated-measures"]},

  {id:"rm_124",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"What is the Breusch-Pagan test used to detect in regression diagnostics?",
    options:[
      "Autocorrelation among residuals in time-series or longitudinal regression model specifications overall",
      "Heteroscedasticity — non-constant variance of the residuals across levels of the predicted values",
      "Multicollinearity among predictor variables as indicated by inflated variance inflation factor values",
      "Non-linearity in the functional form of the relationship between the predictors and outcome variable"
    ],correct:1,explanation:"The Breusch-Pagan test assesses whether residual variance is constant (homoscedastic). A significant result indicates heteroscedasticity, suggesting standard errors may be biased.",reference:"Field, A. (2018).",tags:["Breusch-Pagan","heteroscedasticity","regression"]},

  {id:"rm_125",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Variance Inflation Factor (VIF) values above 10 typically indicate which problem in regression?",
    options:[
      "Heteroscedasticity in the residuals causing biased standard error estimates for regression coefficients",
      "Problematic multicollinearity where predictor variables are too highly intercorrelated with each other",
      "Autocorrelation among the residuals suggesting the independence assumption has been seriously violated",
      "Non-normality of the residual distribution requiring data transformation before further model estimation"
    ],correct:1,explanation:"VIF measures how much the variance of a regression coefficient is inflated by multicollinearity. VIF above 10 (or tolerance below 0.1) suggests problematic collinearity requiring remediation.",reference:"Field, A. (2018).",tags:["VIF","multicollinearity","regression"]},

  {id:"rm_126",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A Type I error occurs when a researcher rejects a true null hypothesis, concluding there is an effect when there is none.",
    options:["True","False"],correct:0,explanation:"Type I error (false positive) is rejecting H0 when it is true — concluding an effect exists when it does not. The alpha level (typically .05) sets the maximum acceptable probability of this error.",reference:"Field, A. (2018).",tags:["Type-I-error","hypothesis-testing"]},

  {id:"rm_127",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Statistical power is defined as which probability in hypothesis testing?",
    options:[
      "The probability of correctly rejecting a false null hypothesis when a true effect actually exists",
      "The probability of incorrectly rejecting a true null hypothesis when there is no real effect present",
      "The probability that the observed effect size precisely estimates the true population effect size value",
      "The probability that the confidence interval for the effect contains the true population parameter"
    ],correct:0,explanation:"Power (1 minus beta) is the probability of detecting a true effect — correctly rejecting H0 when it is false. Conventional minimum power is .80, meaning a 20% chance of Type II error.",reference:"Cohen, J. (1988).",tags:["power","hypothesis-testing"]},

  {id:"rm_128",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In IPA research, the concept of the double hermeneutic refers to which interpretive process?",
    options:[
      "The researcher analyses two separate datasets and compares the interpretations for triangulation purposes",
      "Participants make sense of their experience and the researcher makes sense of participants' sense-making",
      "Two independent researchers code the same data to establish inter-rater reliability of thematic analysis",
      "The same data are analysed using both inductive and deductive coding approaches and then combined together"
    ],correct:1,explanation:"IPA's double hermeneutic means the researcher is trying to make sense of the participant trying to make sense of their experience — interpretation layered upon interpretation.",reference:"Smith, J. A., Flowers, P., & Larkin, M. (2009).",tags:["IPA","double-hermeneutic","qualitative"]},

  {id:"rm_129",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"In grounded theory, theoretical saturation is reached when which condition is met?",
    options:[
      "The sample size exceeds the minimum threshold recommended by established power analysis calculations",
      "New data no longer generate new codes, categories, or theoretical insights beyond what is established",
      "All participants have been interviewed at least twice for follow-up member checking purposes overall",
      "The researcher has reviewed all existing published literature on the topic before beginning collection"
    ],correct:1,explanation:"Theoretical saturation occurs when additional data collection yields no new theoretical insights — categories are well-developed, variations are accounted for, and relationships are validated.",reference:"Charmaz, K. (2014).",tags:["grounded-theory","saturation","qualitative"]},

  {id:"rm_130",category:"research-methods",difficulty:1,mode:"public",type:"mcq",
    question:"An explanatory sequential mixed methods design follows which order of data collection?",
    options:[
      "Qualitative data are collected first followed by quantitative data to test emergent qualitative findings",
      "Quantitative and qualitative data are collected simultaneously and then merged during the analysis phase",
      "Quantitative data are collected first followed by qualitative data to help explain quantitative results",
      "Neither method takes priority and data collection alternates between qualitative and quantitative phases"
    ],correct:2,explanation:"An explanatory sequential design collects quantitative data first, analyses them, and then uses qualitative data to explain, elaborate, or contextualise the quantitative findings.",reference:"Creswell, J. W., & Plano Clark, V. L. (2018).",tags:["mixed-methods","explanatory-sequential"]},

  {id:"rm_131",category:"research-methods",difficulty:2,mode:"public",type:"truefalse",
    question:"Eta-squared in ANOVA represents the proportion of total variance in the dependent variable that is explained by the independent variable.",
    options:["True","False"],correct:0,explanation:"Eta-squared is the ratio of between-group sum of squares to total sum of squares, representing the proportion of total DV variance accounted for by group membership.",reference:"Field, A. (2018).",tags:["eta-squared","effect-size","ANOVA"]},

  {id:"rm_132",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"Which fit index in SEM is classified as an absolute fit index rather than an incremental fit index?",
    options:[
      "The Comparative Fit Index (CFI) which compares the target model to a null baseline independence model",
      "The Tucker-Lewis Index (TLI) which compares the target model to a null model with parsimony correction",
      "The SRMR which assesses the average discrepancy between observed and model-predicted correlation values",
      "The Normed Fit Index (NFI) which compares the target model chi-square to the null model chi-square"
    ],correct:2,explanation:"SRMR is an absolute fit index — it evaluates how well the model reproduces observed data without comparing to a baseline model. CFI, TLI, and NFI are incremental (comparative) indices.",reference:"Kline, R. B. (2016).",tags:["SEM","SRMR","fit-indices","absolute-incremental"]},

  {id:"rm_133",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the trim-and-fill method used for in meta-analysis?",
    options:[
      "Removing studies with the largest effect sizes and replacing them with studies reporting null results",
      "Estimating the number of missing studies due to publication bias and imputing them to adjust estimates",
      "Trimming outlier effect sizes from the forest plot and filling gaps with interpolated average values",
      "Selecting only studies within the confidence interval of the pooled effect for a sensitivity check"
    ],correct:1,explanation:"Trim-and-fill is a non-parametric method that estimates the number of missing studies causing funnel plot asymmetry and imputes them to produce an adjusted pooled estimate.",reference:"Duval, S., & Tweedie, R. (2000).",tags:["meta-analysis","trim-and-fill","publication-bias"]},

  {id:"rm_134",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"Convenience sampling is a form of non-probability sampling where participants are selected based on their easy accessibility.",
    options:["True","False"],correct:0,explanation:"Convenience sampling recruits readily available participants (e.g., university students). While practical, it limits generalisability because the sample may not represent the target population.",reference:"Bryman, A. (2016).",tags:["sampling","convenience"]},

  {id:"rm_135",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What is the primary advantage of using a Likert-type scale with five or more response options rather than fewer?",
    options:[
      "Fewer options increase the reliability of the scale by reducing measurement error in each individual item",
      "More options improve discriminative capacity and produce data more closely approximating interval measurement",
      "Fewer options reduce response fatigue which consistently improves the validity of collected survey data",
      "More options ensure that every respondent can find their exact opinion represented among choices provided"
    ],correct:1,explanation:"Scales with five or more points allow greater differentiation, increase variance, and tend to produce more reliable and valid data that better approximate continuous measurement.",reference:"Krosnick, J. A., & Presser, S. (2010).",tags:["Likert","response-scales","survey-design"]},

  {id:"rm_136",category:"research-methods",difficulty:3,mode:"public",type:"mcq",
    question:"In classical test theory, the observed score is conceptualised as comprising which two components?",
    options:[
      "The latent trait score plus the item difficulty parameter for that particular measurement instrument",
      "The true score on the construct plus random measurement error that varies across testing occasions",
      "The factor loading multiplied by the latent variable score plus the unique variance for each indicator",
      "The population mean of the construct plus the individual's standardised deviation from that mean value"
    ],correct:1,explanation:"CTT posits X = T + E: observed score equals the true score plus random error. Reliability is the proportion of observed score variance attributable to true score variance.",reference:"Furr, R. M. (2018).",tags:["CTT","classical-test-theory","reliability"]},

  {id:"rm_137",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"What does the fail-safe N (Rosenthal's method) estimate in meta-analysis?",
    options:[
      "The minimum sample size required for each study to achieve adequate power for detecting the pooled effect",
      "The number of unpublished null-result studies needed to reduce the pooled effect to non-significance",
      "The maximum number of studies that can be included before heterogeneity becomes statistically unmanageable",
      "The number of additional moderator variables needed to explain the observed heterogeneity across studies"
    ],correct:1,explanation:"Rosenthal's fail-safe N estimates how many unpublished studies with null results would be needed to make the meta-analytic effect non-significant, providing a robustness check against publication bias.",reference:"Rosenthal, R. (1979).",tags:["meta-analysis","fail-safe-N","publication-bias"]},

  {id:"rm_138",category:"research-methods",difficulty:2,mode:"public",type:"mcq",
    question:"Which measure of effect size is most appropriate for reporting a chi-square test with a 2x2 contingency table?",
    options:[
      "Cohen's d which measures the standardised mean difference between two groups on a continuous variable",
      "Eta-squared which measures the proportion of variance in a continuous DV explained by a categorical IV",
      "Phi coefficient which measures the strength of association between two binary categorical variables",
      "Hedges' g which corrects Cohen's d for small sample bias in studies with fewer than twenty participants"
    ],correct:2,explanation:"Phi is the effect size for 2x2 chi-square tests, equivalent to Pearson's r for two dichotomous variables. For larger tables, Cramer's V is used.",reference:"Field, A. (2018).",tags:["phi","effect-size","chi-square"]},

  {id:"rm_139",category:"research-methods",difficulty:1,mode:"public",type:"truefalse",
    question:"A confidence interval provides a range of plausible values for the population parameter based on sample data and a chosen confidence level.",
    options:["True","False"],correct:0,explanation:"A 95% confidence interval means that if sampling were repeated many times, 95% of such intervals would contain the true population parameter. It conveys precision of the estimate.",reference:"Field, A. (2018).",tags:["confidence-interval","estimation"]},

  // ═══════════════════════════════════════════════════════════════
  // PERSONALITY (expanded pe_041–pe_134)
  // ═══════════════════════════════════════════════════════════════

  {id:"pe_041",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"What additional dimension does the HEXACO model include beyond the Big Five personality traits?",
    options:[
      "Openness to experience, reconceptualised as intellect and measured with different item content overall",
      "Honesty-Humility, capturing sincerity, fairness, greed avoidance, and modesty as a distinct sixth factor",
      "Dominance, capturing leadership, assertiveness, competitiveness, and social status seeking as a factor",
      "Spirituality, capturing religiosity, meaning-making, transcendence, and existential reflection as a factor"
    ],correct:1,explanation:"HEXACO adds Honesty-Humility (H) to the Big Five, comprising sincerity, fairness, greed avoidance, and modesty. It better predicts unethical behaviour than the Five Factor Model alone.",reference:"Ashton, M. C., & Lee, K. (2007).",tags:["HEXACO","Honesty-Humility"]},

  {id:"pe_042",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Low Honesty-Humility in the HEXACO model is most strongly associated with which behavioural pattern?",
    options:[
      "Social withdrawal, introversion, and preference for solitary activities over group social interactions",
      "Emotional instability, anxiety, and heightened reactivity to stressful events in daily life situations",
      "Manipulative, exploitative, and self-interested behaviour including willingness to bend rules for gain",
      "Rigid adherence to rules, excessive conscientiousness, and perfectionistic standards in all life domains"
    ],correct:2,explanation:"Low Honesty-Humility predicts exploitation, rule-breaking, deception, and self-interested behaviour. It overlaps substantially with the Dark Triad traits of personality.",reference:"Ashton, M. C., & Lee, K. (2007).",tags:["HEXACO","Honesty-Humility","dark-traits"]},

  {id:"pe_043",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The Dark Tetrad extends the Dark Triad by adding which fourth personality trait?",
    options:[
      "Borderline personality features including emotional instability and intense interpersonal relationships",
      "Everyday sadism, characterised by enjoyment derived from inflicting pain or suffering on other people",
      "Schizotypy, characterised by magical thinking, unusual perceptual experiences, and social eccentricity",
      "Histrionic tendencies, characterised by excessive emotionality and attention-seeking public behaviour"
    ],correct:1,explanation:"The Dark Tetrad adds everyday sadism to narcissism, Machiavellianism, and psychopathy. Sadism uniquely predicts enjoyment of cruelty, including online trolling behaviour.",reference:"Buckels, E. E., et al. (2014).",tags:["Dark-Tetrad","sadism"]},

  {id:"pe_044",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Everyday sadism in the Dark Tetrad is most uniquely predictive of which specific online behaviour?",
    options:[
      "Excessive social media posting motivated by narcissistic self-promotion and public image management",
      "Strategic manipulation of others through carefully crafted deceptive messages sent in private channels",
      "Internet trolling behaviour motivated by the pleasure derived from causing distress and disruption",
      "Impulsive aggressive outbursts triggered by perceived provocation in heated online argument threads"
    ],correct:2,explanation:"Buckels et al. (2014) found that everyday sadism was the strongest predictor of trolling, even beyond the original Dark Triad, because trolling provides sadistic entertainment.",reference:"Buckels, E. E., et al. (2014).",tags:["Dark-Tetrad","sadism","trolling"]},

  {id:"pe_045",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality disorder is most associated with impulsive aggressive online behaviour including cyberstalking?",
    options:[
      "Obsessive-compulsive personality disorder characterised by perfectionism, orderliness, and rigid control",
      "Avoidant personality disorder characterised by social inhibition, feelings of inadequacy, and sensitivity",
      "Borderline personality disorder characterised by emotional dysregulation, impulsivity, and instability",
      "Schizoid personality disorder characterised by emotional detachment and preference for solitary activities"
    ],correct:2,explanation:"Borderline personality features — emotional instability, impulsivity, fear of abandonment — predict impulsive online aggression, cyberstalking, and volatile digital interactions.",reference:"Gamez-Guadix, M. (2014).",tags:["personality-disorders","BPD","online-behaviour"]},

  {id:"pe_046",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Antisocial personality features are associated with increased likelihood of engaging in cyberbullying and online fraud.",
    options:["True","False"],correct:0,explanation:"Antisocial personality traits — disregard for others' rights, deceitfulness, impulsivity — predict various online antisocial behaviours including cyberbullying, fraud, and hacking.",reference:"McBride, M. (2020).",tags:["personality-disorders","antisocial","online-behaviour"]},

  {id:"pe_047",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"According to attachment theory, which attachment style is characterised by positive self-view and negative view of others?",
    options:[
      "Secure attachment, characterised by comfort with intimacy and confidence in relationship availability",
      "Anxious-preoccupied attachment, characterised by self-doubt and excessive need for partner validation",
      "Dismissive-avoidant attachment, characterised by self-sufficiency and emotional distance from others",
      "Fearful-avoidant attachment, characterised by desire for closeness combined with fear of rejection"
    ],correct:2,explanation:"Dismissive-avoidant individuals have a positive self-model but negative other-model, leading to emotional independence, discomfort with closeness, and downplaying relationship importance.",reference:"Bartholomew, K., & Horowitz, L. M. (1991).",tags:["attachment","dismissive-avoidant"]},

  {id:"pe_048",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does anxious attachment style typically manifest in online relationship behaviour?",
    options:[
      "Minimal social media use and avoidance of online self-disclosure to maintain emotional distance overall",
      "Excessive monitoring of partners' online activity, frequent messaging, and heightened jealousy responses",
      "Preference for anonymous online forums over identifiable social networking platforms for all interactions",
      "Balanced and secure use of online communication with comfortable boundaries and low relationship anxiety"
    ],correct:1,explanation:"Anxiously attached individuals show hyperactivation strategies online — partner surveillance, excessive contact-seeking, jealousy over social media interactions, and reassurance-seeking.",reference:"Fox, J., & Warber, K. M. (2014).",tags:["attachment","anxious","online-relationships"]},

  {id:"pe_049",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Disorganised (fearful-avoidant) attachment is associated with which paradoxical online interaction pattern?",
    options:[
      "Consistently seeking deep and emotionally intimate online relationships with a wide network of contacts",
      "Complete avoidance of all digital communication platforms due to fear of any form of social interaction",
      "Simultaneous desire for online connection and withdrawal from it, creating unstable digital relationships",
      "Exclusive use of professional networking platforms while avoiding all personal social media engagement"
    ],correct:2,explanation:"Disorganised attachment produces an approach-avoidance conflict: craving online connection while fearing rejection, leading to erratic patterns of engagement and withdrawal in digital relationships.",reference:"Bartholomew, K., & Horowitz, L. M. (1991).",tags:["attachment","disorganised","online-behaviour"]},

  {id:"pe_050",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"What is the key distinction between temperament and personality in psychological theory?",
    options:[
      "Temperament refers to biologically-based individual differences apparent early in life; personality develops through experience",
      "Personality is observable in infancy whereas temperament only becomes measurable during late adolescence onwards",
      "Temperament only includes cognitive traits whereas personality encompasses emotional and behavioural dispositions",
      "Personality is entirely genetically determined whereas temperament is shaped exclusively by environmental learning"
    ],correct:0,explanation:"Temperament refers to innate, biologically-based dispositions (reactivity, self-regulation) visible in infancy. Personality is the broader construct that develops as temperament interacts with environment over time.",reference:"Rothbart, M. K. (2007).",tags:["temperament","personality","distinction"]},

  {id:"pe_051",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Research on personality across cultures has most consistently found which pattern regarding the Big Five?",
    options:[
      "The Big Five structure replicates across most cultures though mean levels on traits vary significantly",
      "The Big Five structure is unique to Western educated industrialised rich and democratic populations only",
      "Collectivist cultures consistently show a three-factor rather than five-factor personality structure",
      "The Big Five traits are only measurable in cultures that have developed formal psychological testing"
    ],correct:0,explanation:"The Big Five structure has replicated across many cultures, supporting its near-universality. However, mean trait levels differ — e.g., East Asian samples often score lower on extraversion.",reference:"McCrae, R. R., & Terracciano, A. (2005).",tags:["Big-Five","cross-cultural","personality"]},

  {id:"pe_052",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which Big Five trait most consistently predicts preference for visually-oriented social media platforms?",
    options:[
      "Conscientiousness, because organised individuals prefer platforms with structured content presentation",
      "Extraversion, because sociable individuals are drawn to platforms emphasising social display and interaction",
      "Neuroticism, because emotionally unstable individuals seek visual platforms for emotional expression",
      "Agreeableness, because cooperative individuals prefer platforms that emphasise positive image sharing"
    ],correct:1,explanation:"Extraversion consistently predicts preference for visual, social display platforms like Instagram. Extraverts seek social attention, self-presentation opportunities, and broader audience engagement.",reference:"Correa, T., et al. (2010).",tags:["Big-Five","extraversion","social-media","platform-choice"]},

  {id:"pe_053",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Self-monitoring theory (Snyder) suggests that high self-monitors differ in online behaviour by showing which pattern?",
    options:[
      "Reduced online activity overall because they prefer face-to-face interactions allowing real-time control",
      "Greater strategic management of their online persona, curating self-presentation to match audience expectations",
      "Less concern with audience reactions because they maintain a consistent authentic identity across platforms",
      "More honest and transparent online self-disclosure because they are skilled at reading social norms accurately"
    ],correct:1,explanation:"High self-monitors closely attend to situational cues and adjust self-presentation accordingly. Online, they curate different personas for different platforms and audiences.",reference:"Snyder, M. (1974).",tags:["self-monitoring","impression-management","online"]},

  {id:"pe_054",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Impression management online is always a form of deception that involves deliberately misrepresenting one's true self.",
    options:["True","False"],correct:1,explanation:"Impression management is a normal social process (Goffman, 1959). Online, people selectively present aspects of their genuine self — this is strategic self-presentation, not necessarily deception.",reference:"Goffman, E. (1959).",tags:["impression-management","self-presentation"]},

  {id:"pe_055",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Need for cognition (NFC) as a personality variable predicts which pattern of online information behaviour?",
    options:[
      "Preference for quick shallow scanning of headline information without reading full articles or reports",
      "Greater engagement with complex detailed content and more effortful evaluation of online information quality",
      "Avoidance of online information entirely due to a preference for learning through direct personal experience",
      "Higher susceptibility to misinformation because intellectual engagement creates overconfidence in judgement"
    ],correct:1,explanation:"High NFC individuals enjoy effortful thinking, leading them to engage more deeply with online content, evaluate sources more carefully, and seek complex rather than simplified information.",reference:"Cacioppo, J. T., & Petty, R. E. (1982).",tags:["need-for-cognition","information-processing"]},

  {id:"pe_056",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Internal locus of control is associated with which pattern of online behaviour compared to external locus?",
    options:[
      "Greater passivity in online interactions because internally-oriented individuals prefer observing to participating",
      "Greater proactive engagement with digital tools, stronger privacy behaviours, and more adaptive coping online",
      "Higher susceptibility to online scams because internally-oriented individuals overestimate their control online",
      "Less frequent internet use overall because internally-oriented individuals prefer offline activities exclusively"
    ],correct:1,explanation:"Individuals with internal locus of control believe they influence outcomes, leading to more proactive digital engagement, stronger cybersecurity behaviours, and greater self-efficacy online.",reference:"Rotter, J. B. (1966).",tags:["locus-of-control","online-behaviour"]},

  {id:"pe_057",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Self-efficacy in the digital context refers to which specific type of confidence?",
    options:[
      "General confidence in one's overall intelligence and academic ability across all life domains and situations",
      "Confidence in one's ability to perform specific digital tasks and navigate online environments effectively",
      "Confidence that technology will function correctly without errors or system failures during any usage",
      "Confidence that online information is generally accurate and trustworthy for making important decisions"
    ],correct:1,explanation:"Digital self-efficacy is belief in one's ability to use digital tools effectively. It predicts technology adoption, online learning success, and cybersecurity behaviour.",reference:"Bandura, A. (1997).",tags:["self-efficacy","digital-competence"]},

  {id:"pe_058",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Psychological resilience is considered a stable personality trait that cannot be developed or strengthened through intervention.",
    options:["True","False"],correct:1,explanation:"While resilience has trait-like stability, it is also malleable. Interventions targeting cognitive appraisal, coping skills, and social support can enhance resilience across the lifespan.",reference:"Masten, A. S. (2001).",tags:["resilience","personality-factor"]},

  {id:"pe_059",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Grit, as defined by Duckworth, differs from conscientiousness primarily in its emphasis on which characteristic?",
    options:[
      "Short-term task completion and attention to detail in routine daily activities and work assignments overall",
      "Long-term perseverance and sustained passion toward specific goals despite setbacks and difficulties",
      "Social compliance and cooperativeness in group settings that require coordination with other people",
      "Intellectual curiosity and openness to novel ideas that challenge existing beliefs and assumptions"
    ],correct:1,explanation:"Grit emphasises perseverance of effort and consistency of interest over long time periods toward a single high-level goal, distinguishing it from broader conscientiousness.",reference:"Duckworth, A. L., et al. (2007).",tags:["grit","perseverance"]},

  {id:"pe_060",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does perfectionism relate to social media use according to research findings?",
    options:[
      "Perfectionists avoid social media entirely because they fear producing content below their own standards",
      "Socially prescribed perfectionism predicts greater social comparison, body dissatisfaction, and negative affect",
      "Self-oriented perfectionism eliminates social comparison because perfectionists focus on personal improvement",
      "Perfectionism has no relationship with social media behaviour because it only affects academic and work domains"
    ],correct:1,explanation:"Socially prescribed perfectionism (believing others demand perfection) predicts upward social comparison on social media, body image concerns, and increased negative affect from browsing.",reference:"Hewitt, P. L., & Flett, G. L. (1991).",tags:["perfectionism","social-media","social-comparison"]},

  {id:"pe_061",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Rejection sensitivity predicts which characteristic pattern of behaviour in online social interactions?",
    options:[
      "Calm and measured responses to ambiguous online messages with careful consideration before replying",
      "Heightened vigilance for rejection cues, hostile interpretation of ambiguous messages, and withdrawal",
      "Increased willingness to accept constructive criticism shared by others in public online discussion forums",
      "Greater tendency to initiate new online social connections due to motivation to overcome anticipated rejection"
    ],correct:1,explanation:"Rejection-sensitive individuals anxiously expect, readily perceive, and intensely react to rejection. Online, ambiguous cues (e.g., delayed replies) trigger hostile interpretations and emotional reactions.",reference:"Downey, G., & Feldman, S. I. (1996).",tags:["rejection-sensitivity","online-interaction"]},

  {id:"pe_062",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Social comparison orientation refers to which individual difference in online behaviour?",
    options:[
      "The tendency to evaluate one's own abilities and opinions by comparing them to those of other people",
      "The tendency to compete aggressively with others for social status and dominance in online group settings",
      "The tendency to avoid all social media platforms to prevent exposure to others' achievements and successes",
      "The tendency to share personal accomplishments online specifically to elicit comparison from followers"
    ],correct:0,explanation:"Social comparison orientation is the dispositional tendency to compare oneself to others. High SCO predicts more negative affect from social media browsing.",reference:"Gibbons, F. X., & Buunk, B. P. (1999).",tags:["social-comparison","individual-differences"]},

  {id:"pe_063",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Fear of missing out (FOMO) is best defined as which psychological experience?",
    options:[
      "A clinical anxiety disorder requiring formal diagnosis and pharmaceutical treatment by professionals",
      "A pervasive apprehension that others are having rewarding experiences from which one is absent currently",
      "A rational and adaptive concern about missing important professional or educational opportunities online",
      "A temporary emotional state that occurs only immediately after logging off social media applications"
    ],correct:1,explanation:"FOMO is a pervasive apprehension that others are having rewarding experiences from which one is absent. It drives compulsive social media checking and reduces well-being.",reference:"Przybylski, A. K., et al. (2013).",tags:["FOMO","social-media"]},

  {id:"pe_064",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Phubbing (phone snubbing) has been linked to which negative interpersonal outcome?",
    options:[
      "Improved relationship satisfaction because phone use during conversations signals trust and comfort",
      "Reduced perceived conversation quality, lower relationship satisfaction, and increased partner conflict",
      "Enhanced multitasking ability that ultimately benefits both personal and professional relationships",
      "No measurable interpersonal effects because most people have become accustomed to smartphone use"
    ],correct:1,explanation:"Phubbing — using one's phone during face-to-face interactions — reduces perceived conversation quality, threatens fundamental needs (belonging, self-esteem), and predicts lower relationship satisfaction.",reference:"Roberts, J. A., & David, M. E. (2016).",tags:["phubbing","relationships"]},

  {id:"pe_065",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Nomophobia refers to the fear or anxiety experienced when separated from one's mobile phone or unable to use it.",
    options:["True","False"],correct:0,explanation:"Nomophobia (no-mobile-phone phobia) is the anxiety associated with being unable to use or being separated from one's mobile device. It relates to problematic smartphone use and dependency.",reference:"Yildirim, C., & Correia, A.-P. (2015).",tags:["nomophobia","smartphone-dependency"]},

  {id:"pe_066",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality traits are most consistently associated with problematic internet use?",
    options:[
      "High conscientiousness and high agreeableness because dutiful individuals feel obligated to stay connected",
      "High neuroticism and low conscientiousness reflecting emotional vulnerability and poor self-regulation",
      "High openness and high extraversion because curious and sociable individuals overuse the internet",
      "Low neuroticism and high conscientiousness because emotionally stable organised individuals use it most"
    ],correct:1,explanation:"High neuroticism and low conscientiousness are the most consistent Big Five predictors of problematic internet use.",reference:"Kayis, A. R., et al. (2016).",tags:["problematic-internet-use","Big-Five"]},

  {id:"pe_067",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Internet gaming disorder has been most consistently linked to which personality profile?",
    options:[
      "High extraversion, high agreeableness, and high openness reflecting socially engaged gaming motivation",
      "High neuroticism, low conscientiousness, and introversion reflecting escapist and compensatory motivations",
      "High conscientiousness and low neuroticism reflecting a disciplined and goal-oriented gaming approach",
      "High agreeableness and high openness reflecting cooperative and exploratory motivation for gaming"
    ],correct:1,explanation:"Internet gaming disorder is associated with high neuroticism (using gaming to cope with negative emotions), low conscientiousness (poor self-regulation), and introversion (compensating for social deficits).",reference:"Muller, K. W., et al. (2014).",tags:["gaming-disorder","personality-profile"]},

  {id:"pe_068",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Social anxiety and preference for online over face-to-face interaction is best explained by which hypothesis?",
    options:[
      "The rich-get-richer hypothesis proposing that socially skilled individuals benefit most from online tools",
      "The social compensation hypothesis proposing that socially anxious individuals use online settings to cope",
      "The displacement hypothesis proposing that online interaction replaces offline interaction for all users",
      "The stimulation hypothesis proposing that extraverts seek additional stimulation through online platforms"
    ],correct:1,explanation:"The social compensation hypothesis suggests that socially anxious individuals prefer online communication because reduced cues lower self-consciousness and provide greater perceived control.",reference:"McKenna, K. Y. A., & Bargh, J. A. (2000).",tags:["social-anxiety","social-compensation","online-preference"]},

  {id:"pe_069",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"How do introverts and extraverts typically differ in social media platform preferences?",
    options:[
      "Introverts prefer platforms allowing selective text-based interaction; extraverts prefer highly social visual ones",
      "Introverts use social media significantly more than extraverts because they find online interaction less demanding",
      "Extraverts avoid social media altogether because they find it a poor substitute for face-to-face interaction",
      "There is no evidence of any personality-based differences in social media platform preferences among users"
    ],correct:0,explanation:"Introverts tend to favour platforms allowing controlled, asynchronous, text-based interaction. Extraverts prefer visually rich, highly social platforms.",reference:"Correa, T., et al. (2010).",tags:["introversion","extraversion","platform-choice"]},

  {id:"pe_070",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Research on personality measurement equivalence has found which pattern comparing online and paper-based assessments?",
    options:[
      "Online personality measures are consistently less reliable than paper-based versions across all studies",
      "Online and paper-based personality measures generally show psychometric equivalence in reliability and validity",
      "Paper-based measures always produce higher scores on socially desirable traits than online versions do",
      "Online measures are only equivalent to paper measures for cognitive ability tests not personality measures"
    ],correct:1,explanation:"Meta-analyses indicate that online and paper personality measures are generally equivalent in factor structure, reliability, and validity, supporting their interchangeable use in research.",reference:"Weigold, A., et al. (2013).",tags:["online-measurement","equivalence","psychometrics"]},

  {id:"pe_071",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Acquiescence bias in personality measurement refers to which response tendency?",
    options:[
      "The tendency to choose the middle option on all rating scales regardless of the item content measured",
      "The tendency to agree with statements regardless of their content inflating scores on positively-keyed items",
      "The tendency to select extreme response options (strongly agree or strongly disagree) on all survey items",
      "The tendency to answer all items very quickly without carefully reading the full question stem and options"
    ],correct:1,explanation:"Acquiescence (yea-saying) is the tendency to endorse statements regardless of content. It is controlled by including balanced numbers of positively and negatively-keyed items.",reference:"Paulhus, D. L. (1991).",tags:["acquiescence","response-styles","measurement"]},

  {id:"pe_072",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Extreme response style (ERS) in survey research involves which pattern of responding?",
    options:[
      "Consistently selecting the midpoint response option on all Likert-type scale items across the questionnaire",
      "Disproportionately selecting endpoint response options such as strongly agree or strongly disagree on items",
      "Skipping items randomly throughout the survey resulting in incomplete data for the personality assessment",
      "Responding to all items in the opposite direction from what the question content would normally elicit"
    ],correct:1,explanation:"Extreme response style involves disproportionate use of scale endpoints. It varies across cultures and can distort personality scores if not controlled through item design or statistical methods.",reference:"Paulhus, D. L. (1991).",tags:["extreme-responding","response-styles"]},

  {id:"pe_073",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Big Five facets differ from domains in that facets provide which additional level of measurement?",
    options:[
      "Broader more abstract trait descriptions that are more reliable but less behaviourally specific than domains",
      "Narrower more specific trait components within each domain that improve prediction of specific behaviours",
      "Entirely independent personality dimensions that are unrelated to and uncorrelated with the five broad domains",
      "Cultural adaptations of the five broad domains that apply specifically to non-Western population samples"
    ],correct:1,explanation:"Big Five facets (e.g., assertiveness and warmth within extraversion) are narrower sub-components that capture specific trait variance, often predicting specific behaviours better than broad domains.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["Big-Five","facets","measurement"]},

  {id:"pe_074",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which Big Five trait is most strongly associated with susceptibility to phishing attacks?",
    options:[
      "High conscientiousness because highly organised individuals follow instructions in emails too readily",
      "High agreeableness because trusting and cooperative individuals are less suspicious of fraudulent messages",
      "High openness because intellectually curious individuals click on novel or unfamiliar links more frequently",
      "Low extraversion because introverted individuals spend more time online and encounter more phishing attempts"
    ],correct:1,explanation:"High agreeableness — characterised by trust, cooperativeness, and compliance — predicts greater susceptibility to phishing because agreeable individuals are less likely to question requests.",reference:"Halevi, T., et al. (2015).",tags:["phishing","agreeableness","cybersecurity"]},

  {id:"pe_075",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality trait most consistently predicts poor cybersecurity behaviour such as weak passwords?",
    options:[
      "High openness to experience because curiosity leads individuals to click on unfamiliar interesting links",
      "Low conscientiousness because individuals lacking self-discipline neglect security practices and precautions",
      "High extraversion because sociable individuals share personal information broadly across many online platforms",
      "Low neuroticism because emotionally stable individuals underestimate online threats due to low anxiety levels"
    ],correct:1,explanation:"Low conscientiousness consistently predicts poor cybersecurity behaviours — weak passwords, ignoring updates, risky clicking — reflecting poor self-regulation and inattention to detail.",reference:"McCormac, A., et al. (2017).",tags:["cybersecurity","conscientiousness","personality"]},

  {id:"pe_076",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Trait mindfulness is associated with which pattern regarding online aggression?",
    options:[
      "Higher rates of online aggression because mindful individuals are more aware of provocation opportunities",
      "No relationship with online aggression because mindfulness only affects offline interpersonal behaviour",
      "Lower online aggression because mindful individuals show greater emotional regulation and less impulsivity",
      "Increased passive-aggressive behaviour online because mindful individuals suppress direct anger expression"
    ],correct:2,explanation:"Trait mindfulness — present-moment awareness and non-judgmental acceptance — is associated with better emotional regulation, reduced impulsivity, and consequently lower online aggression.",reference:"Heppner, W. L., et al. (2008).",tags:["mindfulness","online-aggression"]},

  {id:"pe_077",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Secure attachment style is associated with healthier online relationship behaviours and lower rates of cyberstalking perpetration.",
    options:["True","False"],correct:0,explanation:"Securely attached individuals have positive models of self and others, leading to trusting, balanced online relationships with lower jealousy monitoring and cyberstalking behaviours.",reference:"Spitzberg, B. H., & Hoobler, G. (2002).",tags:["attachment","secure","online-relationships"]},

  {id:"pe_078",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of online self-presentation is most directly grounded in which theoretical framework?",
    options:[
      "Bandura's social cognitive theory emphasising observational learning and self-efficacy in digital environments",
      "Goffman's dramaturgical theory viewing social interaction as performance with front-stage and back-stage selves",
      "Festinger's cognitive dissonance theory explaining how conflicting beliefs drive online behaviour change",
      "Maslow's hierarchy of needs suggesting self-presentation serves the need for esteem and self-actualisation"
    ],correct:1,explanation:"Goffman's dramaturgical approach frames social life as performance. Online, users manage front-stage presentations (curated profiles) while maintaining back-stage private selves.",reference:"Goffman, E. (1959).",tags:["self-presentation","Goffman","dramaturgical"]},

  {id:"pe_079",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does narcissism relate to social media selfie-posting behaviour according to research?",
    options:[
      "Narcissism is unrelated to selfie-posting because selfies are equally common across all personality profiles",
      "Grandiose narcissism predicts more frequent selfie-posting and greater use of editing and filtering tools",
      "Narcissistic individuals avoid posting selfies because they fear negative evaluation of their appearance",
      "Only vulnerable narcissism predicts selfie-posting; grandiose narcissism predicts text-based status updates"
    ],correct:1,explanation:"Grandiose narcissism predicts more selfie-posting, greater editing effort, and more positive self-presentation on social media, serving narcissistic self-enhancement and attention-seeking needs.",reference:"McCain, J. L., & Campbell, W. K. (2018).",tags:["narcissism","selfies","social-media"]},

  {id:"pe_080",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"The Big Five personality traits are conscientiousness, agreeableness, neuroticism, openness to experience, and extraversion.",
    options:["True","False"],correct:0,explanation:"The Big Five (OCEAN/CANOE) are Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism — the most widely validated dimensional model of personality structure.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["Big-Five","definition"]},

  {id:"pe_081",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The HEXACO model reconceptualises the Big Five agreeableness and emotionality factors in which manner?",
    options:[
      "It merges agreeableness and emotionality into a single broad factor capturing all interpersonal tendencies",
      "It rotates variance so that anger is part of agreeableness and sentimentality is part of emotionality",
      "It eliminates both factors entirely replacing them with honesty-humility and dominance as alternatives",
      "It splits agreeableness into two sub-factors of cooperation and competitiveness for more precise assessment"
    ],correct:1,explanation:"HEXACO rotates Big Five variance: anger/irritability moves from neuroticism to (low) agreeableness, while sentimentality moves from agreeableness to emotionality, changing both factors' content.",reference:"Ashton, M. C., & Lee, K. (2007).",tags:["HEXACO","agreeableness","emotionality"]},

  {id:"pe_082",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which Dark Triad trait is most strongly characterised by strategic long-term manipulation of others?",
    options:[
      "Narcissism which involves grandiose self-enhancement entitlement and need for admiration from other people",
      "Psychopathy which involves impulsive antisocial behaviour callousness and disregard for others' wellbeing",
      "Machiavellianism which involves cynical worldview emotional detachment and calculated interpersonal exploitation",
      "Sadism which involves deriving pleasure from others' suffering and deliberately causing pain or humiliation"
    ],correct:2,explanation:"Machiavellianism is distinguished by cold, strategic, long-term manipulation — unlike psychopathy's impulsive antisociality or narcissism's focus on self-enhancement.",reference:"Jones, D. N., & Paulhus, D. L. (2014).",tags:["Dark-Triad","Machiavellianism"]},

  {id:"pe_083",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does avoidant attachment style typically manifest in online dating behaviour?",
    options:[
      "Enthusiastic engagement with multiple dating platforms and rapid progression toward committed relationships",
      "Preference for casual low-commitment online interactions with resistance to deepening digital relationships",
      "Complete avoidance of all online dating platforms due to overwhelming fear of interpersonal rejection",
      "Exclusive use of video-based dating platforms because avoidant individuals prefer face-to-face communication"
    ],correct:1,explanation:"Avoidantly attached individuals use online dating for casual connections, maintaining emotional distance, preferring text-based interaction, and resisting escalation to deeper commitment.",reference:"Chin, K., et al. (2019).",tags:["attachment","avoidant","online-dating"]},

  {id:"pe_084",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Locus of control is a personality construct describing whether individuals attribute outcomes to internal factors or external factors.",
    options:["True","False"],correct:0,explanation:"Rotter's (1966) locus of control distinguishes internal (outcomes result from own actions) from external (outcomes result from luck, fate, or powerful others) attribution styles.",reference:"Rotter, J. B. (1966).",tags:["locus-of-control","definition"]},

  {id:"pe_085",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Grit is most accurately distinguished from general persistence by which additional component?",
    options:[
      "The ability to switch flexibly between different goals depending on which is most achievable at any time",
      "Consistency of interest — maintaining passion for the same long-term goal rather than frequently shifting",
      "High intelligence that enables efficient problem-solving and reduces the need for sustained effort overall",
      "Social support from peers and mentors that sustains motivation during difficult periods of goal pursuit"
    ],correct:1,explanation:"Grit has two components: perseverance of effort (persistence) and consistency of interest (sustained passion). The interest consistency component distinguishes grit from mere persistence.",reference:"Duckworth, A. L., et al. (2007).",tags:["grit","consistency-of-interest"]},

  {id:"pe_086",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Research on FOMO has found it is most strongly predicted by which psychological need deficiency?",
    options:[
      "Deficiency in the need for safety and security as described in Maslow's motivational hierarchy of needs",
      "Deficiency in basic psychological needs for competence autonomy and relatedness from self-determination theory",
      "Deficiency in the need for cognitive closure leading to persistent uncertainty about social events",
      "Deficiency in the need for power and dominance leading to concerns about losing social influence"
    ],correct:1,explanation:"FOMO is driven by unsatisfied basic psychological needs (self-determination theory). Low competence, autonomy, and especially relatedness satisfaction predict greater FOMO.",reference:"Przybylski, A. K., et al. (2013).",tags:["FOMO","self-determination-theory","needs"]},

  {id:"pe_087",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Research on nomophobia has identified which factor as the strongest predictor of the condition?",
    options:[
      "Age with older adults showing significantly higher nomophobia scores than younger adults consistently",
      "Smartphone usage intensity and emotional attachment to the device rather than demographic variables",
      "Gender with males showing significantly higher nomophobia scores than females across all studied samples",
      "Socioeconomic status with higher-income individuals showing greater anxiety about phone separation"
    ],correct:1,explanation:"Nomophobia is best predicted by the intensity and emotional quality of smartphone use — hours of use, emotional attachment, and reliance for social connection — rather than demographics.",reference:"Yildirim, C., & Correia, A.-P. (2015).",tags:["nomophobia","smartphone-use"]},

  {id:"pe_088",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Self-oriented perfectionism and socially prescribed perfectionism differ primarily in which feature?",
    options:[
      "Self-oriented perfectionism involves setting high standards for oneself; socially prescribed involves perceiving others' demands",
      "Socially prescribed perfectionism is always adaptive and healthy while self-oriented perfectionism is always maladaptive",
      "Self-oriented perfectionism only affects academic domains while socially prescribed perfectionism affects social domains",
      "Both types are identical in their psychological effects and are distinguished only by their measurement instruments"
    ],correct:0,explanation:"Self-oriented perfectionism involves internally imposed high standards. Socially prescribed perfectionism involves believing others demand perfection — the latter is more strongly linked to distress.",reference:"Hewitt, P. L., & Flett, G. L. (1991).",tags:["perfectionism","self-oriented","socially-prescribed"]},

  {id:"pe_089",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Problematic internet use shares features with behavioural addictions including salience, mood modification, tolerance, withdrawal, conflict, and relapse.",
    options:["True","False"],correct:0,explanation:"Griffiths' (2005) component model identifies six addiction criteria — salience, mood modification, tolerance, withdrawal, conflict, relapse — applicable to problematic internet use.",reference:"Griffiths, M. D. (2005).",tags:["problematic-internet-use","behavioural-addiction"]},

  {id:"pe_090",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality variable most consistently moderates the relationship between social media use and depression?",
    options:[
      "Openness to experience which determines whether social media content is perceived as stimulating or boring",
      "Social comparison orientation which determines whether browsing triggers upward comparison and negative affect",
      "Agreeableness which determines whether online interactions are experienced as cooperative or competitive",
      "Conscientiousness which determines how much time individuals allocate to social media use each day overall"
    ],correct:1,explanation:"Social comparison orientation moderates social media's impact: high SCO individuals are more likely to engage in upward comparison during browsing, leading to greater depressive symptoms.",reference:"Vogel, E. A., et al. (2014).",tags:["social-comparison","depression","social-media"]},

  {id:"pe_091",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Which term describes the tendency to present an idealised version of oneself on social media?",
    options:[
      "Self-handicapping which involves creating obstacles to explain potential failure before it even occurs",
      "Self-enhancement which involves presenting oneself in a more positive light than objective reality warrants",
      "Self-verification which involves seeking feedback that confirms one's pre-existing self-concept accurately",
      "Self-deprecation which involves deliberately minimising one's achievements to appear modest and approachable"
    ],correct:1,explanation:"Self-enhancement on social media involves curating an idealised self-presentation — selectively sharing positive experiences, editing photos, and emphasising desirable traits.",reference:"Gonzales, A. L., & Hancock, J. T. (2011).",tags:["self-enhancement","social-media","self-presentation"]},

  {id:"pe_092",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of personality-situation interaction implies which fundamental principle?",
    options:[
      "Personality traits are entirely irrelevant because behaviour is determined solely by situational forces",
      "Behaviour results from the dynamic interplay between stable personality traits and specific situational features",
      "Situations have no influence on behaviour because personality traits alone determine all behavioural responses",
      "Personality and situations are identical constructs measured at different levels of the same analysis framework"
    ],correct:1,explanation:"Interactionism holds that behaviour arises from the dynamic interplay of person and situation. Online environments create unique situations that interact with personality to shape digital behaviour.",reference:"Mischel, W. (1968).",tags:["person-situation","interactionism"]},

  {id:"pe_093",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Emotional stability (low neuroticism) is associated with which pattern of cybersecurity behaviour?",
    options:[
      "More careless cybersecurity practices because emotionally stable individuals underestimate digital threats",
      "Better compliance with security protocols because emotionally stable individuals make more rational decisions",
      "No measurable difference in cybersecurity behaviour because neuroticism only affects emotional domains",
      "Greater susceptibility to social engineering attacks because emotionally stable individuals are more trusting"
    ],correct:1,explanation:"Emotionally stable individuals tend to respond more rationally to security threats, comply better with protocols, and are less susceptible to fear-based social engineering tactics.",reference:"McCormac, A., et al. (2017).",tags:["neuroticism","cybersecurity"]},

  {id:"pe_094",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does the extended self concept (Belk) apply to online identity and digital possessions?",
    options:[
      "Digital possessions and online profiles form part of one's extended self contributing to identity and self-concept",
      "The extended self concept applies only to physical material possessions and has no relevance to digital contexts",
      "Online identities are entirely separate from the real self and cannot be incorporated into the extended self",
      "The extended self in digital contexts only includes professionally-created content not personal social media posts"
    ],correct:0,explanation:"Belk's extended self theory has been updated to include digital possessions — social media profiles, digital music, virtual goods — as integral parts of modern identity construction.",reference:"Belk, R. W. (2013).",tags:["extended-self","digital-identity"]},

  {id:"pe_095",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Extraversion is the strongest Big Five predictor of the total number of social media friends or followers a person has.",
    options:["True","False"],correct:0,explanation:"Extraversion consistently predicts larger social media networks. Extraverts' sociability, warmth, and assertiveness translate to more online connections across platforms.",reference:"Gosling, S. D., et al. (2011).",tags:["extraversion","social-media","network-size"]},

  {id:"pe_096",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The poor-get-poorer model of online social interaction proposes which pattern?",
    options:[
      "Individuals who are already socially rich gain even more social capital through strategic online engagement",
      "Socially anxious or isolated individuals may experience worsened outcomes from problematic online use patterns",
      "All internet users experience declining social skills over time regardless of their initial social competence",
      "Economically disadvantaged individuals face greater harm from social media use than wealthier individuals do"
    ],correct:1,explanation:"The poor-get-poorer model suggests that for some socially anxious/isolated individuals, internet use may exacerbate problems through avoidance of offline social skill development.",reference:"Valkenburg, P. M., & Peter, J. (2009).",tags:["poor-get-poorer","social-outcomes"]},

  {id:"pe_097",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality trait is most associated with the tendency to engage in online virtue signalling?",
    options:[
      "Agreeableness because cooperative individuals genuinely want to promote prosocial values in communities",
      "Narcissism because self-enhancing individuals use moral displays to project a favourable public image",
      "Conscientiousness because dutiful individuals feel morally obligated to share their values with others",
      "Openness because intellectually curious individuals enjoy exploring moral questions in public forums"
    ],correct:1,explanation:"Narcissistic individuals are more likely to engage in virtue signalling — publicly expressing moral values for self-enhancement and social image rather than genuine moral commitment.",reference:"Ok, E., et al. (2021).",tags:["narcissism","virtue-signalling","moral-display"]},

  {id:"pe_098",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The online disinhibition effect interacts with personality such that which individuals show the greatest disinhibited behaviour?",
    options:[
      "Individuals high in conscientiousness who relax their usual self-discipline in anonymous online environments",
      "Individuals high in agreeableness who become more assertive and confrontational without face-to-face accountability",
      "Individuals high in neuroticism and low in agreeableness who have pre-existing tendencies amplified by anonymity",
      "Individuals low in openness who become more exploratory and experimental when freed from offline social norms"
    ],correct:2,explanation:"Online disinhibition amplifies pre-existing tendencies. Those high in neuroticism and low in agreeableness show the greatest increase in toxic disinhibition (aggression, hostility) online.",reference:"Suler, J. (2004).",tags:["online-disinhibition","personality-interaction"]},

  {id:"pe_099",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Machiavellianism is characterised by a cynical worldview, emotional detachment, and a focus on self-interest and strategic manipulation.",
    options:["True","False"],correct:0,explanation:"Machiavellianism involves a cynical, pragmatic worldview, emotional coldness, strategic manipulation, and prioritisation of self-interest over others' welfare.",reference:"Christie, R., & Geis, F. L. (1970).",tags:["Machiavellianism","definition"]},

  {id:"pe_100",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does psychopathy differ from Machiavellianism in predicting online aggression?",
    options:[
      "Psychopathy predicts more impulsive reactive online aggression; Machiavellianism predicts strategic planned aggression",
      "Machiavellianism predicts impulsive online aggression; psychopathy predicts carefully calculated strategic harm",
      "Both traits predict identical patterns of online aggression with no distinguishable differences in presentation",
      "Neither trait predicts online aggression; only narcissism is associated with aggressive behaviour in digital settings"
    ],correct:0,explanation:"Psychopathy's impulsivity and callousness drive reactive, hot-headed online aggression. Machiavellianism's strategic orientation leads to calculated, instrumental use of aggression for personal gain.",reference:"Jones, D. N., & Paulhus, D. L. (2014).",tags:["psychopathy","Machiavellianism","online-aggression"]},

  {id:"pe_101",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Attachment theory predicts that individuals with anxious attachment show which social media monitoring pattern?",
    options:[
      "Minimal engagement with partners' social media profiles due to trust and confidence in the relationship",
      "Excessive partner surveillance, frequent profile checking, and heightened emotional reactions to activity",
      "Complete avoidance of their partner's social media to maintain healthy emotional boundaries and independence",
      "Balanced moderate checking of partner activity with low emotional reactivity to ambiguous online signals"
    ],correct:1,explanation:"Anxiously attached individuals engage in hypervigilant partner monitoring on social media, driven by fear of abandonment and need for reassurance, leading to jealousy and relationship conflict.",reference:"Fox, J., & Warber, K. M. (2014).",tags:["attachment","anxious","partner-surveillance"]},

  {id:"pe_102",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Need for cognition (NFC) relates to susceptibility to online misinformation in which manner?",
    options:[
      "High NFC individuals are more susceptible because they overthink and second-guess accurate information",
      "High NFC individuals are less susceptible because they engage in more analytical evaluation of information",
      "NFC has no relationship with misinformation susceptibility because belief formation is entirely emotional",
      "Low NFC individuals are less susceptible because they rely on trusted authority figures for information"
    ],correct:1,explanation:"High NFC individuals process information more carefully, evaluate evidence quality, and consider alternative explanations, making them less susceptible to online misinformation.",reference:"Pennycook, G., & Rand, D. G. (2019).",tags:["need-for-cognition","misinformation"]},

  {id:"pe_103",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Self-efficacy theory predicts that individuals with higher digital self-efficacy are more likely to adopt new technologies and persist when encountering technical difficulties.",
    options:["True","False"],correct:0,explanation:"Higher digital self-efficacy predicts greater willingness to adopt new technologies, more persistence when facing difficulties, and better learning outcomes in digital environments.",reference:"Bandura, A. (1997).",tags:["self-efficacy","technology-adoption"]},

  {id:"pe_104",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Resilience as a personality factor predicts which pattern of response to cyberbullying victimisation?",
    options:[
      "Greater long-term psychological harm because resilient individuals do not seek help from others after it",
      "Faster psychological recovery, more adaptive coping strategies, and reduced long-term negative health effects",
      "No difference in outcomes because resilience only protects against offline adversity not digital harm",
      "Increased retaliatory aggression because resilient individuals feel empowered to fight back aggressively"
    ],correct:1,explanation:"Psychological resilience buffers against cyberbullying's negative effects through adaptive coping, cognitive reappraisal, help-seeking, and faster emotional recovery.",reference:"Hinduja, S., & Patchin, J. W. (2017).",tags:["resilience","cyberbullying","coping"]},

  {id:"pe_105",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The relationship between personality traits and online behaviour is best described by which model?",
    options:[
      "A direct effects model where traits determine behaviour with no moderating or mediating influences at all",
      "A mediated model where cognitive and motivational processes translate trait dispositions into specific behaviours",
      "A fully situational model where online behaviour is entirely determined by platform features not personality",
      "A random effects model where personality and behaviour are unrelated and any associations are due to chance"
    ],correct:1,explanation:"Personality traits influence behaviour through mediating processes — motivations, cognitions, emotional reactions, self-regulation — that translate dispositions into context-specific actions online.",reference:"Ajzen, I. (1991).",tags:["personality-behaviour","mediation","theory"]},

  {id:"pe_106",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Phubbing is most strongly associated with which underlying personality and motivational factor?",
    options:[
      "High conscientiousness driving a need to respond promptly to all work-related messages and notifications",
      "Fear of missing out (FOMO) combined with smartphone dependency and low self-control over device checking",
      "High extraversion driving a need to maintain simultaneous conversations across multiple social platforms",
      "High openness to experience driving curiosity about incoming notifications and new digital content updates"
    ],correct:1,explanation:"Phubbing is most strongly driven by FOMO, smartphone dependency, and low self-control. The compulsion to check one's phone overrides awareness of its social costs.",reference:"Chotpitayasunondh, V., & Douglas, K. M. (2016).",tags:["phubbing","FOMO","self-control"]},

  {id:"pe_107",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does openness to experience relate to social media content creation versus consumption?",
    options:[
      "High openness predicts more content creation (posting original ideas art and opinions) rather than passive consumption",
      "High openness predicts exclusively passive content consumption because open individuals prefer absorbing information",
      "Openness has no relationship with either content creation or consumption on social media platforms in any research",
      "Low openness predicts more content creation because less imaginative individuals compensate by posting frequently"
    ],correct:0,explanation:"Openness predicts creative content production — sharing original ideas, artistic work, and diverse opinions. Open individuals use social media as an expressive outlet rather than passively consuming.",reference:"Correa, T., et al. (2010).",tags:["openness","content-creation","social-media"]},

  {id:"pe_108",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"The Dark Triad traits are entirely distinct constructs with no shared variance or common underlying core.",
    options:["True","False"],correct:1,explanation:"The Dark Triad traits share a common core of callousness, disagreeableness, and social manipulation, though each has unique features.",reference:"Paulhus, D. L., & Williams, K. M. (2002).",tags:["Dark-Triad","shared-core"]},

  {id:"pe_109",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Attachment anxiety in the context of social media use is most strongly associated with which behaviour?",
    options:[
      "Posting infrequently and maintaining minimal social media presence to avoid potential rejection from others",
      "Frequent status updates, attention-seeking posts, and anxiety about receiving insufficient likes and comments",
      "Using social media exclusively for professional networking and avoiding personal relationship-related content",
      "Posting only curated and carefully edited content to maintain a flawless impression for romantic partners"
    ],correct:1,explanation:"Attachment anxiety drives feedback-seeking behaviours on social media: frequent posting, attention-seeking content, distress about low engagement, and using likes as reassurance.",reference:"Hart, J., et al. (2015).",tags:["attachment","anxiety","social-media"]},

  {id:"pe_110",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Personality variability across situations (within-person variability) is conceptualised in which framework?",
    options:[
      "The Big Five trait model which assumes perfect cross-situational consistency in personality expression always",
      "Mischel's Cognitive-Affective Processing System (CAPS) which models stable if-then personality signatures",
      "Classical test theory which treats all behavioural variability as random measurement error to be eliminated",
      "Evolutionary psychology which explains personality differences solely through reproductive fitness advantages"
    ],correct:1,explanation:"Mischel's CAPS model explains how stable personality produces variable behaviour: individuals have consistent patterns of if-then contingencies — stable signatures, not rigid consistency.",reference:"Mischel, W., & Shoda, Y. (1995).",tags:["CAPS","within-person-variability","personality-theory"]},

  {id:"pe_111",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Which personality trait is most strongly associated with frequent social media status updates and photo sharing?",
    options:[
      "Neuroticism because emotionally unstable individuals use social media to vent negative emotions publicly",
      "Extraversion because sociable individuals use platforms to maintain connections and share life experiences",
      "Conscientiousness because organised individuals systematically document and share their daily activities",
      "Agreeableness because warm individuals post frequently to maintain harmonious relationships with followers"
    ],correct:1,explanation:"Extraversion is the most consistent predictor of active social media use — posting updates, sharing photos, commenting, and engaging with others' content across platforms.",reference:"Gosling, S. D., et al. (2011).",tags:["extraversion","social-media","posting"]},

  {id:"pe_112",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does neuroticism influence online shopping behaviour according to personality research?",
    options:[
      "High neuroticism predicts more impulsive online purchasing driven by negative mood regulation motives",
      "High neuroticism predicts less online shopping because anxious individuals distrust online payment systems",
      "Neuroticism has no relationship with online shopping because purchasing decisions are purely rational choices",
      "High neuroticism predicts exclusively budget-conscious shopping because anxious individuals worry about finances"
    ],correct:0,explanation:"Neuroticism predicts impulsive and compulsive online buying as a mood regulation strategy — shopping to alleviate negative affect, anxiety, and low mood, often with subsequent regret.",reference:"Shahjehan, A. (2012).",tags:["neuroticism","online-shopping","impulse-buying"]},

  {id:"pe_113",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"The Honesty-Humility dimension of HEXACO is a stronger predictor of unethical behaviour than any single Big Five trait.",
    options:["True","False"],correct:0,explanation:"Honesty-Humility predicts unethical behaviour (cheating, exploitation, deception) more strongly than any Big Five trait because it directly captures the tendency to exploit others.",reference:"Ashton, M. C., & Lee, K. (2008).",tags:["HEXACO","Honesty-Humility","ethics"]},

  {id:"pe_114",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Social identity theory predicts that online group membership affects personality expression in which way?",
    options:[
      "Group membership has no effect on personality expression because traits are entirely stable across all contexts",
      "Individuals suppress their personality traits entirely and adopt the group's collective personality characteristics",
      "Group identification amplifies trait-consistent behaviour when the trait aligns with the group's norms and values",
      "Only extraverted individuals are influenced by group membership; introverted individuals remain fully consistent"
    ],correct:2,explanation:"Social identity theory suggests group membership can amplify or constrain personality expression. Traits consistent with group norms are expressed more freely; inconsistent traits are suppressed.",reference:"Tajfel, H., & Turner, J. C. (1979).",tags:["social-identity","group-membership","personality-expression"]},

  {id:"pe_115",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Psychopathy in the Dark Triad is characterised by callous affect, impulsivity, and disregard for others' rights and feelings.",
    options:["True","False"],correct:0,explanation:"Subclinical psychopathy features callousness, shallow affect, impulsivity, and disregard for others' welfare. It predicts impulsive online aggression and antisocial digital behaviours.",reference:"Hare, R. D. (1991).",tags:["psychopathy","definition","Dark-Triad"]},

  {id:"pe_116",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The concept of context collapse on social media challenges personality self-presentation because of which factor?",
    options:[
      "Multiple distinct audiences (friends family colleagues) are merged into a single undifferentiated online audience",
      "Social media platforms restrict the number of words users can include in their profile descriptions and posts",
      "Users can only present one photograph on their profile limiting the visual aspects of their self-presentation",
      "Social media algorithms filter content before it reaches audiences removing any personality-revealing elements"
    ],correct:0,explanation:"Context collapse occurs when diverse audiences converge on one platform. This complicates self-presentation because behaviours appropriate for one audience may not suit another.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["context-collapse","self-presentation"]},

  {id:"pe_117",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which factor of the HEXACO model overlaps most with the Dark Triad personality traits?",
    options:[
      "Emotionality because the Dark Triad traits all involve heightened emotional reactivity and instability",
      "Honesty-Humility because low scores on this factor capture the exploitative core of Dark Triad personalities",
      "Conscientiousness because all Dark Triad traits involve impulsivity and poor self-regulation in behaviour",
      "Openness to experience because Dark Triad individuals show distinctive patterns of creativity and curiosity"
    ],correct:1,explanation:"Low Honesty-Humility is the HEXACO factor most strongly associated with all three Dark Triad traits, capturing their shared core of exploitation, manipulation, and self-serving behaviour.",reference:"Lee, K., & Ashton, M. C. (2005).",tags:["HEXACO","Honesty-Humility","Dark-Triad"]},

  {id:"pe_118",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"Personality traits measured through digital footprints have shown which level of predictive accuracy?",
    options:[
      "Digital footprint predictions are always less accurate than self-report questionnaires across all traits",
      "Machine learning models using digital footprints can predict personality at levels comparable to peer ratings",
      "Digital footprints can only predict extraversion and openness but not the other three Big Five traits",
      "Digital footprint analysis is entirely unreliable and produces no valid predictions of personality standing"
    ],correct:1,explanation:"Youyou et al. (2015) showed that computer models using Facebook likes predicted personality traits more accurately than friends and family, approaching the accuracy of spouses.",reference:"Youyou, W., et al. (2015).",tags:["digital-footprints","personality-prediction","machine-learning"]},

  {id:"pe_119",category:"personality",difficulty:1,mode:"public",type:"mcq",
    question:"Which attachment style is characterised by comfort with intimacy, effective communication, and trust?",
    options:[
      "Anxious-preoccupied attachment marked by constant reassurance-seeking and fear of partner abandonment",
      "Dismissive-avoidant attachment marked by emotional self-sufficiency and discomfort with close intimacy",
      "Fearful-avoidant attachment marked by simultaneous desire for and fear of close emotional connection",
      "Secure attachment marked by positive views of both self and others and comfort with interdependence"
    ],correct:3,explanation:"Secure attachment features positive internal working models of self and others, enabling comfortable intimacy, effective communication, trust, and balanced relationship interdependence.",reference:"Bartholomew, K., & Horowitz, L. M. (1991).",tags:["attachment","secure","definition"]},

  {id:"pe_120",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Research on personality and cybersecurity training effectiveness has found which pattern?",
    options:[
      "All personality types benefit equally from cybersecurity training with no individual differences at all",
      "Highly conscientious individuals show the greatest improvement; low conscientiousness benefits least",
      "Only extraverted individuals benefit from training because they engage more actively in learning sessions",
      "Neurotic individuals benefit most from training because their anxiety motivates them to learn security"
    ],correct:1,explanation:"Conscientiousness predicts better training outcomes — conscientious individuals are more attentive, follow instructions, and translate security training into sustained behavioural change.",reference:"McCormac, A., et al. (2017).",tags:["cybersecurity","training","conscientiousness"]},

  {id:"pe_121",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"The proteus effect in virtual environments demonstrates which personality-relevant phenomenon?",
    options:[
      "Users' online behaviour and attitudes change to match the characteristics of their avatar representation",
      "Users always choose avatars that perfectly match their offline physical appearance and personality traits",
      "Virtual environment exposure permanently changes users' personality traits across all real-world contexts",
      "Users are unable to adopt different behavioural styles in virtual environments regardless of avatar choice"
    ],correct:0,explanation:"The proteus effect shows that avatar characteristics influence users' behaviour — e.g., taller avatars increase confidence, attractive avatars increase self-disclosure.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["proteus-effect","avatars","virtual-environments"]},

  {id:"pe_122",category:"personality",difficulty:2,mode:"public",type:"truefalse",
    question:"Everyday sadism predicts enjoyment of violent video games above and beyond the other Dark Triad traits of narcissism, Machiavellianism, and psychopathy.",
    options:["True","False"],correct:0,explanation:"Everyday sadism uniquely predicts enjoyment of cruelty and violent media, including violent video games, beyond what narcissism, Machiavellianism, and psychopathy predict.",reference:"Buckels, E. E., et al. (2014).",tags:["sadism","violent-games","Dark-Tetrad"]},

  {id:"pe_123",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How does agreeableness relate to online conflict resolution behaviour?",
    options:[
      "High agreeableness predicts more aggressive responses in online conflicts due to frustration with disagreement",
      "High agreeableness predicts greater use of constructive conflict resolution strategies and reduced hostility",
      "Agreeableness has no relationship with conflict behaviour because online anonymity overrides personality",
      "Low agreeableness predicts avoidance of all online conflicts because disagreeable individuals disengage"
    ],correct:1,explanation:"Agreeable individuals bring cooperativeness, empathy, and conflict-aversion online, using constructive strategies (compromise, accommodation) and showing less hostile communication.",reference:"Graziano, W. G., & Tobin, R. M. (2002).",tags:["agreeableness","conflict-resolution","online"]},

  {id:"pe_124",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The narcissistic admiration and rivalry concept (NARC) distinguishes which two pathways of narcissistic behaviour?",
    options:[
      "Admiration-seeking through positive self-presentation versus rivalry through aggressive self-defence and devaluation",
      "Private admiration of others' content versus public rivalry expressed through competitive posting frequency",
      "Admiration of authoritative content creators versus rivalry with peer-level content creators on the platform",
      "Self-admiration measured through selfie frequency versus rivalry measured through follower count comparison"
    ],correct:0,explanation:"The NARC model identifies two narcissistic strategies: admiration (assertive self-enhancement, charming) and rivalry (antagonistic self-protection, devaluing others).",reference:"Back, M. D., et al. (2013).",tags:["narcissism","NARC","admiration-rivalry"]},

  {id:"pe_125",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"The Big Five trait of openness to experience includes facets such as imagination, aesthetic sensitivity, and intellectual curiosity.",
    options:["True","False"],correct:0,explanation:"Openness encompasses facets including fantasy/imagination, aesthetics, feelings, actions, ideas (intellectual curiosity), and values (willingness to re-examine).",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["Big-Five","openness","facets"]},

  {id:"pe_126",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Research on personality and online privacy behaviour has found which consistent pattern?",
    options:[
      "Extraverts disclose more personal information online due to their sociable nature and lower privacy concerns",
      "Agreeable individuals share the least information online because they are cautious about others' motives",
      "Neurotic individuals share the most information because anxiety drives them to seek social support online",
      "Conscientious individuals disclose the most because they believe in transparent and honest communication"
    ],correct:0,explanation:"Extraverts consistently show greater online self-disclosure and lower privacy concern, driven by sociability and comfort with social attention.",reference:"Kramer, N. C., & Winter, S. (2008).",tags:["extraversion","privacy","self-disclosure"]},

  {id:"pe_127",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which personality framework specifically captures the tendency to exploit and manipulate others for gain?",
    options:[
      "The Big Five model through its agreeableness dimension where low agreeableness indicates antagonistic tendencies",
      "The HEXACO model through its Honesty-Humility dimension which directly assesses exploitation and manipulation",
      "The temperament model through its reactivity dimension which measures emotional responses to social situations",
      "The attachment model through its avoidance dimension which captures discomfort with interpersonal closeness"
    ],correct:1,explanation:"HEXACO's Honesty-Humility directly captures sincerity vs. deception, fairness vs. exploitation, and modesty vs. grandiosity — more specifically than Big Five agreeableness.",reference:"Ashton, M. C., & Lee, K. (2007).",tags:["HEXACO","Honesty-Humility","exploitation"]},

  {id:"pe_128",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Social anxiety disorder predicts which specific pattern of social media use?",
    options:[
      "Complete avoidance of all social media platforms due to overwhelming fear of any online social evaluation",
      "Passive consumption (browsing lurking) rather than active posting due to fear of negative evaluation",
      "Exclusively active use with frequent posting because anonymity eliminates all social anxiety symptoms",
      "Identical patterns of social media use compared to non-anxious individuals with no measurable differences"
    ],correct:1,explanation:"Socially anxious individuals tend toward passive social media use — observing others' content without posting — driven by fear of negative evaluation, which paradoxically can increase social comparison.",reference:"Erwin, B. A., et al. (2004).",tags:["social-anxiety","passive-use","social-media"]},

  {id:"pe_129",category:"personality",difficulty:3,mode:"public",type:"mcq",
    question:"The concept of personality-environment transactions in the online context suggests which dynamic process?",
    options:[
      "Individuals passively absorb online environmental influences with no active role in shaping their environment",
      "Individuals actively select, evoke responses from, and manipulate their online environments matching their traits",
      "Online environments uniformly shape all users' personalities in the same direction regardless of trait levels",
      "Personality traits are entirely fixed before individuals encounter online environments and never change after"
    ],correct:1,explanation:"Personality-environment transactions involve selection (choosing trait-congruent platforms), evocation (eliciting trait-consistent reactions), and manipulation (shaping environments).",reference:"Caspi, A., & Roberts, B. W. (2001).",tags:["personality-environment","transactions","selection"]},

  {id:"pe_130",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Narcissistic individuals tend to have larger online social networks but shallower relationship quality within those networks.",
    options:["True","False"],correct:0,explanation:"Narcissists accumulate large online networks (serving admiration needs) but their relationships tend to be superficial, characterised by self-promotion rather than genuine reciprocal connection.",reference:"Buffardi, L. E., & Campbell, W. K. (2008).",tags:["narcissism","social-networks","relationship-quality"]},

  {id:"pe_131",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Internal locus of control predicts which pattern regarding online health information seeking?",
    options:[
      "Less health information seeking because internally-oriented individuals trust their own bodily signals only",
      "More proactive online health information seeking and greater critical evaluation of the sources consulted",
      "Exclusive reliance on physician advice with no engagement in personal online health information research",
      "Greater acceptance of unverified health claims because internally-oriented individuals trust own judgement"
    ],correct:1,explanation:"Internal locus of control predicts more proactive health information seeking online, greater source evaluation, and more active health management.",reference:"Rotter, J. B. (1966).",tags:["locus-of-control","health-information","online"]},

  {id:"pe_132",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"How do the Big Five facets of assertiveness and warmth (both within extraversion) differentially predict online behaviour?",
    options:[
      "Assertiveness predicts dominant communication styles online; warmth predicts affiliative supportive interactions",
      "Both facets predict identical online behaviours with no differentiation at the facet level of measurement",
      "Assertiveness predicts passive lurking behaviour; warmth predicts active posting and content creation",
      "Warmth predicts aggressive online behaviour; assertiveness predicts conflict avoidance in online discussions"
    ],correct:0,explanation:"Extraversion facets differentially predict online behaviour: assertiveness relates to leadership and dominant communication, while warmth relates to supportive, friendly interaction patterns.",reference:"Costa, P. T., & McCrae, R. R. (1992).",tags:["Big-Five","facets","assertiveness","warmth"]},

  {id:"pe_133",category:"personality",difficulty:2,mode:"public",type:"mcq",
    question:"Which individual difference best explains why some people are more susceptible to social engineering cyberattacks?",
    options:[
      "High intelligence because intelligent individuals overthink social engineering attempts and become confused",
      "High compliance and trust combined with low critical evaluation of unexpected requests from unknown sources",
      "High extraversion because sociable individuals interact with more people and encounter more attack attempts",
      "Low openness because individuals closed to new experiences do not recognise novel social engineering tactics"
    ],correct:1,explanation:"Susceptibility to social engineering relies on individual differences in trust, compliance, and critical evaluation. High trust combined with low analytical thinking increases vulnerability.",reference:"Workman, M. (2008).",tags:["social-engineering","personality","cybersecurity"]},

  {id:"pe_134",category:"personality",difficulty:1,mode:"public",type:"truefalse",
    question:"Trait mindfulness involves paying attention to the present moment in a non-judgmental way, which is associated with reduced impulsive online behaviour.",
    options:["True","False"],correct:0,explanation:"Trait mindfulness — present-moment awareness with non-judgmental acceptance — predicts reduced impulsivity, better emotional regulation, and consequently less reactive and aggressive online behaviour.",reference:"Heppner, W. L., et al. (2008).",tags:["mindfulness","impulsivity","online-behaviour"]},

  // ═══════════════════════════════════════════════════════════════
  // ONLINE DISINHIBITION (expanded od_046–od_145)
  // ═══════════════════════════════════════════════════════════════

  {id:"od_046",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"How does Suler's concept of 'dissociative anonymity' manifest differently on TikTok compared to traditional text-based forums?",options:["TikTok eliminates dissociative anonymity entirely because users always show their faces on camera in videos","TikTok users can achieve partial anonymity through filters, duets, and curated personas despite video format","Dissociative anonymity applies identically on TikTok and text forums since both involve screen-mediated interaction","TikTok's algorithm prevents any form of disinhibition by restricting content visibility to known followers only"],correct:1,explanation:"TikTok allows partial anonymity through filters, voice effects, and persona curation, creating a modified form of dissociative anonymity even in a video-centric platform.",reference:"Suler, J. (2004); Kaye et al. (2021).",tags:["TikTok","dissociative-anonymity","platforms"]},

  {id:"od_047",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Discord servers facilitate disinhibition through which combination of Suler's factors most prominently?",options:["Minimisation of authority and asynchronicity, because Discord lacks any hierarchical role structure entirely","Dissociative anonymity and invisibility, because usernames are pseudonymous and text chat hides physical cues","Solipsistic introjection only, because Discord users always imagine server members as fictional game characters","Dissociative imagination exclusively, because Discord is used only for role-playing games and fantasy scenarios"],correct:1,explanation:"Discord's pseudonymous usernames, avatar-based identity, and text-heavy channels combine dissociative anonymity and invisibility, facilitating both benign and toxic disinhibition.",reference:"Suler, J. (2004); Kowert, R. (2020).",tags:["Discord","platforms","Suler-factors"]},

  {id:"od_048",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Reddit's upvote/downvote system has been shown to reduce toxic disinhibition by making social consequences visible.",options:["True","False"],correct:1,explanation:"Research suggests that Reddit's voting system can actually amplify disinhibition through bandwagon effects and mob dynamics, and downvoted users may escalate rather than moderate their behaviour.",reference:"Cheng, J., et al. (2017).",tags:["Reddit","moderation","platforms"]},

  {id:"od_049",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"On dating apps, disinhibited self-disclosure is most accurately characterised by which behavioural pattern?",options:["Users consistently present highly accurate and unembellished versions of themselves on dating profiles","Users may overshare intimate details prematurely due to perceived privacy and the stranger-on-a-train effect","Users exhibit less self-disclosure on dating apps than in equivalent face-to-face dating conversations","Users restrict all personal information sharing until after meeting a potential partner in a physical setting"],correct:1,explanation:"Dating apps combine perceived privacy, anonymity, and the stranger-on-a-train effect, leading to accelerated and sometimes excessive intimate self-disclosure.",reference:"Suler, J. (2004); Hallam et al. (2018).",tags:["dating-apps","self-disclosure","oversharing"]},

  {id:"od_050",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"In telehealth therapy contexts, online disinhibition can produce which paradoxical clinical outcome?",options:["Clients always disclose less in telehealth sessions because the technology creates an additional barrier","Clients may disclose traumatic material more rapidly than clinically advisable due to reduced face-to-face cues","Therapists become entirely unable to build therapeutic alliance through any screen-mediated communication format","Telehealth eliminates all disinhibition effects because the therapeutic relationship overrides online factors"],correct:1,explanation:"The disinhibition effect in telehealth can accelerate disclosure of sensitive material beyond what the therapeutic relationship can safely contain, requiring clinicians to manage pacing carefully.",reference:"Suler, J. (2004); Simpson & Reid (2014).",tags:["telehealth","therapy","self-disclosure"]},

  {id:"od_051",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"How does disinhibition in online education environments most commonly affect student participation?",options:["Students universally participate less online because disinhibition only produces negative antisocial behaviours","Students who are reticent in face-to-face classrooms may contribute more freely in online discussion forums","Online education completely eliminates all forms of social anxiety through its inherent technological design","Disinhibition in online education exclusively manifests as academic dishonesty and plagiarism behaviours only"],correct:1,explanation:"Benign disinhibition in online education can encourage participation from students who experience social anxiety in face-to-face settings, though toxic disinhibition also occurs.",reference:"Joinson, A. N. (2001); Clark-Gordon et al. (2019).",tags:["online-education","participation","benign"]},

  {id:"od_052",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Research on VR/metaverse environments suggests that avatar embodiment affects disinhibition through which mechanism?",options:["VR avatars eliminate disinhibition entirely because users feel physically present and therefore fully inhibited","The Proteus effect means avatar appearance can shift behaviour, with disinhibition varying by avatar characteristics","VR environments produce identical disinhibition levels to text-based chat regardless of avatar customisation used","Avatar embodiment only affects motor behaviour in virtual environments and has no relationship to social inhibition"],correct:1,explanation:"The Proteus effect (Yee & Bailenson, 2007) demonstrates that avatar characteristics influence user behaviour, with avatar-mediated identity creating variable disinhibition depending on avatar design.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["VR","metaverse","Proteus-effect"]},

  {id:"od_053",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Voice chat in online gaming environments tends to produce which pattern of disinhibition compared to text chat?",options:["Voice chat produces significantly less disinhibition than text because vocal cues restore social presence fully","Voice chat reduces anonymity but can increase disinhibition through real-time emotional contagion and impulsivity","Text chat and voice chat produce identical levels and types of disinhibited behaviour in all gaming contexts","Voice chat eliminates all toxic behaviour because users are always identifiable by their unique vocal patterns"],correct:1,explanation:"Voice chat partially reduces anonymity but introduces real-time interaction dynamics including emotional contagion, reduced asynchronicity, and impulsive responding that can fuel disinhibition.",reference:"Wadley et al. (2015); Kowert, R. (2020).",tags:["voice-chat","text-chat","gaming"]},

  {id:"od_054",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Alcohol and substance use have been shown to interact with online disinhibition, amplifying both benign and toxic forms of disinhibited behaviour online.",options:["True","False"],correct:0,explanation:"Substance use lowers general inhibition, and when combined with the disinhibiting features of online environments, the effects can be additive, increasing both self-disclosure and aggressive behaviour.",reference:"Nicol, S. (2012); Kuss & Griffiths (2017).",tags:["substance-use","interaction","amplification"]},

  {id:"od_055",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Adolescents typically show greater online disinhibition than adults primarily because of which developmental factor?",options:["Adolescents have more advanced digital literacy skills than adults, enabling them to exploit platform anonymity","Adolescent prefrontal cortex development is incomplete, reducing impulse control in already disinhibiting environments","Adults are entirely immune to all forms of online disinhibition due to their more mature cognitive capacities","Adolescents spend less time online than adults, making their limited exposure more psychologically impactful"],correct:1,explanation:"Incomplete prefrontal cortex development in adolescence means reduced impulse control and risk assessment, which compounds with the disinhibiting features of online environments.",reference:"Steinberg, L. (2008); Suler, J. (2004).",tags:["adolescents","development","impulse-control"]},

  {id:"od_056",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Cross-cultural research on online disinhibition has found which pattern regarding collectivist versus individualist societies?",options:["Collectivist cultures show no online disinhibition because cultural norms completely override technological affordances","Individualist cultures show no online disinhibition because their members are already disinhibited in offline contexts","Collectivist cultures may show stronger disinhibition effects online as anonymity releases stronger normative constraints","Online disinhibition is culturally universal with identical manifestation patterns across all societies studied globally"],correct:2,explanation:"In collectivist cultures where face-to-face behaviour is more tightly regulated by social norms, the release from those constraints online can produce proportionally larger disinhibition effects.",reference:"Kim, Y., et al. (2011); Bargh et al. (2002).",tags:["culture","collectivism","cross-cultural"]},

  {id:"od_057",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"In professional communication platforms like Slack and Microsoft Teams, disinhibition most commonly manifests as which behaviour?",options:["Employees adopting more informal and emotionally expressive communication than equivalent face-to-face workplace talk","Employees refusing to use any digital communication tools and insisting exclusively on in-person meetings","Complete elimination of workplace hierarchies resulting in equal participation from all organisational levels","Professional platforms being entirely immune to disinhibition effects due to their enterprise design features"],correct:0,explanation:"Workplace messaging platforms can foster informality, blurred professional boundaries, and emotionally charged exchanges that would be less likely in face-to-face professional settings.",reference:"Anders, A. (2016); Byron, K. (2008).",tags:["workplace","Slack","professional"]},

  {id:"od_058",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Content moderation systems can only reduce toxic disinhibition and have no effect on benign disinhibition.",options:["True","False"],correct:1,explanation:"Moderation systems can inadvertently suppress benign disinhibition (e.g., open self-disclosure, creative expression) alongside toxic behaviour, creating a chilling effect on positive communication.",reference:"Gillespie, T. (2018).",tags:["moderation","benign","chilling-effect"]},

  {id:"od_059",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Design interventions using 'friction' to reduce toxic disinhibition work primarily through which psychological mechanism?",options:["Friction completely blocks users from posting any content until a moderator has pre-approved each individual message","Friction introduces deliberate pauses or prompts that activate reflective processing before a user submits content","Friction makes internet connections slower so that users become too frustrated to post aggressive content online","Friction refers to increasing the financial cost of posting online so only serious contributors will participate"],correct:1,explanation:"Friction-based design (e.g., 'Are you sure?' prompts, mandatory delays) interrupts impulsive responding and activates System 2 reflective processing, counteracting disinhibited posting.",reference:"Thaler, R. H., & Sunstein, C. R. (2008); Matias, J. N. (2019).",tags:["friction","design","nudges"]},

  {id:"od_060",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Nudge-based interventions such as empathy prompts before posting have been found to produce which outcome?",options:["A permanent elimination of all toxic behaviour on platforms that implement empathy prompts for all users","A modest but significant short-term reduction in hostile comments, though effects may diminish over time with habituation","No measurable effect on user behaviour because online disinhibition is entirely resistant to design interventions","An increase in toxic behaviour because empathy prompts make aggressive users feel patronised and more hostile"],correct:1,explanation:"Empathy nudges show modest short-term effectiveness in reducing hostile comments, but habituation effects and user workarounds can diminish their impact over time.",reference:"Katsaros, M., et al. (2022).",tags:["nudges","empathy","design-interventions"]},

  {id:"od_061",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Empirical research on real-name policies (e.g., Facebook's policy vs. pseudonymous platforms) has found which pattern?",options:["Real-name policies consistently and dramatically eliminate all forms of toxic disinhibited behaviour on platforms","Real-name policies show mixed results, reducing some incivility but also suppressing minority group participation","Pseudonymous platforms always produce more toxic behaviour than real-name platforms without any exceptions found","Real-name policies have never been empirically studied because platforms refuse to share data with researchers"],correct:1,explanation:"Research (e.g., Cho & Kwon, 2015) shows real-name policies have mixed effects: they may reduce some incivility but also suppress participation from marginalised groups who need anonymity for safety.",reference:"Cho, D., & Kwon, K. H. (2015).",tags:["real-name","pseudonym","policy"]},

  {id:"od_062",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"In therapeutic contexts, disinhibited self-disclosure online differs from face-to-face disclosure primarily in which dimension?",options:["Online therapeutic self-disclosure is always superficial and never reaches the depth of face-to-face conversation","Online therapeutic self-disclosure may occur more rapidly and with less emotional regulation than in-person sessions","Face-to-face therapeutic self-disclosure is always slower because therapists deliberately withhold empathic responses","There are no meaningful differences between online and face-to-face therapeutic self-disclosure in any research"],correct:1,explanation:"The disinhibition effect can accelerate therapeutic self-disclosure online, sometimes before adequate therapeutic alliance or emotional regulation strategies are established.",reference:"Suler, J. (2004); Barak, A., & Gluck-Ofri, O. (2007).",tags:["therapy","self-disclosure","pacing"]},

  {id:"od_063",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Online political discourse shows stronger disinhibition effects compared to other topics primarily because of which factor?",options:["Political discussions are always conducted anonymously while other online discussions always use real identities","Political topics activate strong moral convictions and group identities that amplify emotionally driven responding","Political discourse only occurs on specific platforms designed to maximise disinhibition for commercial purposes","People who discuss politics online are fundamentally different personality types from other internet user populations"],correct:1,explanation:"Political topics activate moral convictions, social identity, and intergroup dynamics that amplify emotional responding and compound with the general disinhibition effects of online environments.",reference:"Brady, W. J., et al. (2017); Crockett, M. J. (2017).",tags:["political-discourse","polarisation","hostility"]},

  {id:"od_064",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Benign disinhibition can positively facilitate creativity online through which primary mechanism?",options:["The removal of evaluative apprehension allows freer idea generation and willingness to share unconventional work","Online environments automatically enhance cognitive ability and creative thinking capacity in all individuals","Benign disinhibition eliminates all critical feedback, ensuring every creative contribution is positively received","Creativity online is entirely unrelated to disinhibition and depends solely on individual artistic talent levels"],correct:0,explanation:"Reduced evaluative apprehension through benign disinhibition lowers the social risk of sharing novel or unconventional ideas, facilitating creative expression in online communities.",reference:"Joinson, A. N. (2001); Suler, J. (2004).",tags:["creativity","benign","positive-outcomes"]},

  {id:"od_065",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Benign disinhibition is always positive and never produces any harmful consequences for the individual.",options:["True","False"],correct:1,explanation:"The 'dark side' of benign disinhibition includes oversharing personal information, premature self-disclosure that leads to regret, and vulnerability to exploitation by malicious actors.",reference:"Joinson, A. N. (2001); Suler, J. (2004).",tags:["benign","oversharing","dark-side"]},

  {id:"od_066",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Oversharing as a consequence of benign disinhibition differs from healthy self-disclosure primarily in which respect?",options:["Oversharing always involves sharing false information while healthy self-disclosure involves only truthful content","Oversharing involves disclosure that exceeds contextual norms and may produce regret, vulnerability, or social costs","Healthy self-disclosure only occurs in face-to-face settings while oversharing only occurs in online environments","Oversharing is a clinically defined disorder requiring formal diagnosis while self-disclosure is a normal behaviour"],correct:1,explanation:"Oversharing exceeds contextual appropriateness norms and can lead to regret, social consequences, privacy violations, or vulnerability to exploitation, distinguishing it from adaptive self-disclosure.",reference:"Bazarova, N. N. (2012); Suler, J. (2004).",tags:["oversharing","self-disclosure","norms"]},

  {id:"od_067",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'disinhibition fatigue' refers to which phenomenon in long-term internet users?",options:["The gradual increase in disinhibited behaviour as users become more comfortable with digital environments","The progressive desensitisation to disinhibition cues, leading to a normalisation of previously uninhibited behaviour","The complete disappearance of all disinhibition effects after exactly one year of continuous internet usage","The physical exhaustion caused by spending excessive time engaging in online arguments and hostile exchanges"],correct:1,explanation:"Disinhibition fatigue describes how prolonged internet use can normalise disinhibited behaviour, raising the threshold for what feels transgressive and potentially escalating behaviour over time.",reference:"Suler, J. (2004); Joinson, A. N. (2007).",tags:["disinhibition-fatigue","desensitisation","longitudinal"]},

  {id:"od_068",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Re-inhibition strategies designed to counteract online disinhibition most effectively target which of Suler's factors?",options:["Solipsistic introjection, by ensuring users imagine all online interlocutors as powerful authority figures always","Invisibility and dissociative anonymity, by introducing visual cues, profile photos, and identity verification steps","Dissociative imagination, by completely banning all fictional content and role-playing from online platforms entirely","Asynchronicity, by forcing all online communication to occur in strict real-time with no delays ever permitted"],correct:1,explanation:"Re-inhibition strategies often target invisibility and anonymity through profile photos, video calls, identity verification, and social presence cues that restore interpersonal accountability.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["re-inhibition","strategies","Suler-factors"]},

  {id:"od_069",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Research has demonstrated that disinhibited behaviour online frequently transfers to offline contexts, making individuals more aggressive in face-to-face interactions.",options:["True","False"],correct:1,explanation:"Evidence for direct online-to-offline transfer of disinhibited aggression is limited; most research suggests context-dependent activation rather than permanent trait changes.",reference:"Wright, M. F. (2014); Barlett, C. P. (2015).",tags:["transfer","online-offline","spillover"]},

  {id:"od_070",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Longitudinal research on disinhibition and internet experience suggests which developmental trajectory?",options:["Disinhibition effects permanently increase with each year of internet experience without any plateau or reversal","Experienced users may develop re-inhibition skills, but novel platform features can re-trigger disinhibition effects","Internet experience has absolutely no relationship to disinhibition levels at any point across the lifespan","All disinhibition effects completely disappear after a user has five or more years of internet experience"],correct:1,explanation:"Experienced users may learn self-regulation strategies, but new platforms, features, or contexts can re-trigger disinhibition, suggesting a dynamic rather than linear relationship with experience.",reference:"Suler, J. (2004); Joinson, A. N. (2007).",tags:["longitudinal","experience","development"]},

  {id:"od_071",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which of Suler's six factors is most relevant to understanding disinhibition in asynchronous online forums?",options:["Asynchronicity, because the delay between composing and receiving responses removes real-time social pressure","Invisibility, because asynchronous forums always require users to post without any username or identifying text","Minimisation of authority, because forum moderators have no ability to remove content or ban disruptive users","Dissociative imagination, because forum users always believe that their posts exist in a separate fantasy world"],correct:0,explanation:"Asynchronicity is central to forum disinhibition: the time lag removes real-time social pressure, allowing users to craft messages without immediate interpersonal feedback.",reference:"Suler, J. (2004).",tags:["asynchronicity","forums","Suler-factors"]},

  {id:"od_072",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Suler's 'minimisation of authority' factor operates most strongly on which type of platform?",options:["Enterprise software platforms where rigid organisational hierarchies are always perfectly replicated digitally","Platforms with flat hierarchical structures where status markers like job titles and credentials are absent","Platforms that assign permanent authority roles to all users equally upon their initial account registration","Physical office environments where authority figures are always present to monitor employee conversations"],correct:1,explanation:"Minimisation of authority is strongest on platforms where traditional status markers (titles, uniforms, office size) are absent and interactions feel more egalitarian.",reference:"Suler, J. (2004).",tags:["minimisation-authority","hierarchy","platforms"]},

  {id:"od_073",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Suler's 'solipsistic introjection' refers to users projecting their own internal voice and characteristics onto the people they interact with online.",options:["True","False"],correct:0,explanation:"Solipsistic introjection occurs when users assign imagined characteristics, voices, and appearances to online interlocutors, constructing them as internal characters in their own mental narrative.",reference:"Suler, J. (2004).",tags:["solipsistic-introjection","Suler-factors","definition"]},

  {id:"od_074",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Which design feature of TikTok's comment section most directly facilitates toxic disinhibition among users?",options:["The character limit on comments that forces users to express complex ideas in very brief hostile statements","The combination of pseudonymous profiles, rapid scrolling, and the ephemerality of content reducing accountability","TikTok's requirement that all commenters verify their identity using government-issued identification documents","The platform's policy of permanently banning any user who receives more than three negative comment reports"],correct:1,explanation:"TikTok's combination of pseudonymous accounts, fast-scrolling interface, and ephemeral content perception reduces felt accountability, facilitating toxic disinhibition in comment sections.",reference:"Kaye, L. K., et al. (2021).",tags:["TikTok","design","accountability"]},

  {id:"od_075",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Reddit's subreddit-specific norms affect disinhibition by creating which environment for users?",options:["Identical behavioural norms across all subreddits, ensuring consistent levels of disinhibition site-wide always","Context-dependent disinhibition where behaviour acceptable in one community may be sanctioned in another community","Complete absence of any community norms, resulting in uniformly high levels of disinhibited behaviour everywhere","Permanent reduction of all disinhibition through Reddit's universal site-wide content moderation policy exclusively"],correct:1,explanation:"Reddit's subreddit system creates micro-communities with distinct norms, meaning disinhibition is context-dependent: behaviour tolerated in one subreddit may violate norms in another.",reference:"Chandrasekharan, E., et al. (2018).",tags:["Reddit","norms","context-dependent"]},

  {id:"od_076",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"In telehealth contexts, the 'invisibility' factor of disinhibition presents which unique clinical challenge?",options:["Therapists can always see clients perfectly through video, making invisibility completely irrelevant to telehealth","Clients using audio-only sessions may disclose more but therapists lose access to nonverbal clinical information","Invisibility in telehealth exclusively benefits the therapeutic process and never presents any clinical challenges","Telehealth platforms automatically compensate for invisibility by providing AI-generated nonverbal cue analyses"],correct:1,explanation:"Audio-only telehealth sessions increase the invisibility factor, potentially facilitating disclosure but depriving clinicians of crucial nonverbal cues needed for clinical assessment.",reference:"Simpson, S., & Reid, C. (2014); Suler, J. (2004).",tags:["telehealth","invisibility","clinical"]},

  {id:"od_077",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which statement best describes how online disinhibition affects student behaviour in virtual classroom breakout rooms?",options:["Students in breakout rooms behave identically to students in physical classroom small-group discussions always","Students may engage in more off-topic conversation and social loafing when instructor presence is reduced","Breakout rooms completely eliminate social anxiety and guarantee full participation from all students equally","Students in breakout rooms are always more focused than in physical classrooms due to technological novelty"],correct:1,explanation:"Reduced instructor presence in breakout rooms can trigger minimisation of authority and invisibility effects, leading to off-topic behaviour, social loafing, or alternatively, freer discussion.",reference:"Clark-Gordon, C. V., et al. (2019).",tags:["online-education","breakout-rooms","authority"]},

  {id:"od_078",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"The Proteus effect demonstrates that users with aggressive-looking avatars in virtual reality environments tend to behave more aggressively regardless of their baseline personality.",options:["True","False"],correct:0,explanation:"The Proteus effect (Yee & Bailenson, 2007) shows that avatar appearance influences behaviour: users with taller, more attractive, or more aggressive avatars tend to exhibit corresponding behavioural shifts.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["Proteus-effect","VR","avatars"]},

  {id:"od_079",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Voice-based social media platforms like Clubhouse affect disinhibition differently from text platforms because they alter which factor?",options:["Asynchronicity is increased because voice messages can be paused, edited, and revised before being broadcast","Invisibility is partially reduced because vocal paralinguistic cues convey emotional tone and social presence","Dissociative anonymity is completely eliminated because every human voice is uniquely identifiable by listeners","Minimisation of authority is enhanced because speakers cannot display any professional credentials on the platform"],correct:1,explanation:"Voice platforms partially reduce invisibility by conveying paralinguistic cues (tone, pace, emotion), increasing social presence and modifying disinhibition patterns compared to text-only platforms.",reference:"Short, J., et al. (1976); Suler, J. (2004).",tags:["voice-platforms","Clubhouse","social-presence"]},

  {id:"od_080",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Research on disinhibition and substance use in online contexts indicates which interaction pattern?",options:["Substance use during online activity creates a double disinhibition effect, compounding pharmacological and situational factors","Substance use has no effect on online behaviour because digital environments require sustained cognitive attention","Online environments actually reduce the disinhibiting effects of alcohol by requiring users to read and type text","Substance use only affects online disinhibition in multiplayer gaming contexts and no other digital environments"],correct:0,explanation:"Substance use (especially alcohol) creates a double disinhibition effect: pharmacological disinhibition compounds with the situational disinhibition of online environments.",reference:"Nicol, S. (2012); Kuss, D. J., & Griffiths, M. D. (2017).",tags:["substance-use","double-disinhibition","alcohol"]},

  {id:"od_081",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Developmental research comparing adolescent and adult online disinhibition reveals which key finding?",options:["Adults and adolescents show identical patterns of online disinhibition with no developmental differences observed","Adolescents show heightened sensitivity to peer approval online, amplifying both benign and toxic disinhibition forms","Adults show greater online disinhibition than adolescents because they have more content to disclose to others","Adolescents are immune to toxic disinhibition online because digital natives intuitively understand online social norms"],correct:1,explanation:"Adolescents' heightened sensitivity to peer influence interacts with disinhibition factors, amplifying both positive (self-expression) and negative (risk-taking, aggression) online behaviours.",reference:"Steinberg, L. (2008); Valkenburg, P. M., & Peter, J. (2011).",tags:["adolescents","adults","peer-influence"]},

  {id:"od_082",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which cultural factor most significantly moderates the strength of online disinhibition effects?",options:["The average internet connection speed available in a given country's telecommunications infrastructure","The degree of social norm regulation in offline life, with tighter cultures showing stronger disinhibition online","The primary language spoken in a country, since disinhibition only occurs in English-language online environments","The geographical size of a country, since larger countries always produce higher levels of online disinhibition"],correct:1,explanation:"Tight cultures with strong offline social norms may show stronger disinhibition effects online because the gap between constrained offline behaviour and freed online behaviour is larger.",reference:"Gelfand, M. J., et al. (2011); Kim, Y., et al. (2011).",tags:["culture","tight-loose","moderation"]},

  {id:"od_083",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Disinhibition on workplace platforms like Microsoft Teams creates which specific organisational risk?",options:["Employees always become more productive when they communicate in a disinhibited manner on workplace platforms","Informal messaging norms may lead to inappropriate boundary-crossing, microaggressions, or documented misconduct","Workplace platforms are completely immune to disinhibition because enterprise software enforces professional conduct","Disinhibition on workplace platforms exclusively affects junior employees and never impacts senior management"],correct:1,explanation:"Workplace platform disinhibition risks include inappropriate informality, boundary violations, microaggressions, and the creation of permanent records of misconduct.",reference:"Anders, A. (2016); Byron, K. (2008).",tags:["workplace","Teams","organisational-risk"]},

  {id:"od_084",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Automated content moderation using AI is equally effective at reducing both toxic disinhibition in text-based posts and toxic disinhibition expressed through images and memes.",options:["True","False"],correct:1,explanation:"AI content moderation is currently more effective with text than with images, memes, and multimodal content, where context-dependent meaning, irony, and cultural references make detection significantly harder.",reference:"Gillespie, T. (2018); Gorwa, R., et al. (2020).",tags:["AI-moderation","multimodal","effectiveness"]},

  {id:"od_085",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The 'think before you post' design intervention exemplifies which broader approach to reducing online disinhibition?",options:["Punitive deterrence that threatens severe legal consequences for any form of negative online communication","Cognitive friction that disrupts automatic processing and prompts reflective evaluation before action is taken","Platform censorship that removes all user-generated content before it can be viewed by any other platform users","Digital literacy education delivered through multi-week formal classroom courses in secondary school settings"],correct:1,explanation:"'Think before you post' prompts are cognitive friction interventions that interrupt impulsive responding by activating deliberate, reflective processing (System 2).",reference:"Thaler, R. H., & Sunstein, C. R. (2008).",tags:["friction","design","System-2"]},

  {id:"od_086",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"South Korea's real-name verification policy for online comments was eventually repealed primarily because of which finding?",options:["The policy dramatically increased online civility and was no longer necessary as behaviour had permanently improved","The policy showed minimal effect on reducing malicious comments while creating significant privacy and security risks","The policy was too expensive to implement and maintain for the South Korean government's technology budget","The policy was only applied to a single website and was never expanded to include other digital communication platforms"],correct:1,explanation:"South Korea's real-name policy (2007-2012) was repealed after research showed only a 0.9% reduction in malicious comments while creating substantial privacy risks and data breach vulnerabilities.",reference:"Cho, D., & Kwon, K. H. (2015).",tags:["real-name","South-Korea","policy-evaluation"]},

  {id:"od_087",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"The 'stranger on a train' phenomenon in online self-disclosure refers to which behavioural tendency?",options:["The tendency to withhold all personal information from people encountered in transient online social situations","The tendency to share intimate personal details with strangers online due to perceived impermanence of the interaction","The clinical compulsion to travel by train while simultaneously engaging in social media use on mobile devices","The tendency to form deep and lasting friendships exclusively with people first encountered in online environments"],correct:1,explanation:"The stranger-on-a-train effect describes how perceived impermanence and the low probability of future interaction with online strangers facilitates intimate self-disclosure.",reference:"Rubin, Z. (1975); Joinson, A. N. (2001).",tags:["stranger-on-a-train","self-disclosure","impermanence"]},

  {id:"od_088",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Online political discourse shows stronger disinhibition effects compared to other topics primarily because of which additional factor?",options:["Political discussions are always conducted anonymously while other online discussions always use real identities","Moral conviction and social identity salience combine with platform disinhibition to escalate intergroup hostility","Political discourse only occurs on specific platforms designed to maximise disinhibition for commercial purposes","People who discuss politics online are fundamentally different personality types from other internet user populations"],correct:1,explanation:"Political topics activate moral convictions, social identity, and intergroup dynamics that amplify emotional responding and compound with the general disinhibition effects of online environments.",reference:"Brady, W. J., et al. (2017); Crockett, M. J. (2017).",tags:["political-discourse","moral-outrage","identity"]},

  {id:"od_089",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Disinhibition in creative online communities such as fan fiction platforms is exclusively a form of benign disinhibition with no toxic manifestations.",options:["True","False"],correct:1,explanation:"While creative communities benefit from benign disinhibition (freer expression, boundary-pushing art), toxic disinhibition also appears as harassment of creators, gatekeeping, and hostile fandom conflicts.",reference:"Busse, K. (2017); Suler, J. (2004).",tags:["creativity","fandom","mixed-effects"]},

  {id:"od_090",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'context collapse' interacts with online disinhibition by producing which effect?",options:["Context collapse prevents all disinhibition because users become hyper-aware of their diverse audience online","Context collapse can amplify disinhibition when users post for one imagined audience but reach unintended others","Context collapse only affects celebrities and public figures, not ordinary users of social media platforms","Context collapse refers exclusively to the technical failure of social media platforms during periods of heavy use"],correct:1,explanation:"Context collapse (Marwick & boyd, 2011) can compound disinhibition when users mentally address one audience but their disinhibited content reaches unintended audiences with different norms.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["context-collapse","audience","platforms"]},

  {id:"od_091",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Dissociative imagination as a disinhibition factor is most strongly activated in which type of online environment?",options:["Professional LinkedIn profiles where users carefully craft their public employment history and career achievements","Immersive role-playing environments where users adopt fictional personas and perceive interactions as gameplay","Government websites where citizens submit formal complaints and access official public service information","Academic databases where researchers access peer-reviewed journal articles and conference paper proceedings"],correct:1,explanation:"Dissociative imagination is strongest in immersive environments (MMORPGs, VR, role-playing communities) where users adopt fictional personas and perceive their actions as part of a separate reality.",reference:"Suler, J. (2004).",tags:["dissociative-imagination","role-playing","immersion"]},

  {id:"od_092",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Suler proposed that the six factors of online disinhibition operate independently and never interact with one another.",options:["True","False"],correct:1,explanation:"Suler explicitly stated that the six factors interact and compound each other, creating stronger disinhibition when multiple factors are present simultaneously.",reference:"Suler, J. (2004).",tags:["six-factors","interaction","theory"]},

  {id:"od_093",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Research on dating app disinhibition and sexual self-disclosure has found which consistent pattern?",options:["Dating app users never engage in sexual self-disclosure due to platform terms of service that prohibit such content","Users disclose sexual preferences and desires earlier on dating apps than in equivalent face-to-face dating scenarios","Sexual self-disclosure on dating apps follows identical timelines to traditional offline courtship progression always","Only male-identifying users show disinhibited sexual self-disclosure while female-identifying users remain fully inhibited"],correct:1,explanation:"The combination of perceived privacy, pseudonymity, and the stranger-on-a-train effect on dating apps accelerates sexual self-disclosure compared to face-to-face dating contexts.",reference:"Hallam, L., et al. (2018); Suler, J. (2004).",tags:["dating-apps","sexual-disclosure","acceleration"]},

  {id:"od_094",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The phenomenon of 'keyboard warriors' — individuals who are aggressive online but not offline — is best explained by which theoretical account?",options:["These individuals have a stable aggressive personality trait that only manifests in digital communication contexts","Situational disinhibition factors lower the threshold for aggression in people who inhibit such impulses offline","These individuals are always lying about being non-aggressive offline and are equally hostile in all settings","Keyboard warrior behaviour is exclusively a cultural phenomenon found only in Western industrialised nations"],correct:1,explanation:"The keyboard warrior phenomenon is best explained by situational disinhibition: online factors lower the threshold for expressing aggressive impulses that are inhibited by social cues offline.",reference:"Suler, J. (2004); Lapidot-Lefler, N., & Barak, A. (2012).",tags:["keyboard-warriors","situational","aggression"]},

  {id:"od_095",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Lapidot-Lefler and Barak's (2012) experimental research identified which factor as the strongest single predictor of toxic disinhibition?",options:["Anonymity was the strongest single predictor when tested against invisibility and lack of eye contact separately","Lack of eye contact was the strongest single predictor when tested against anonymity and invisibility separately","Invisibility was the strongest single predictor when tested against anonymity and lack of eye contact separately","All three factors contributed equally with no single factor emerging as a statistically stronger predictor of toxicity"],correct:1,explanation:"Lapidot-Lefler and Barak (2012) found that lack of eye contact was the strongest predictor of negative disinhibition effects, even more than anonymity.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["eye-contact","empirical","predictors"]},

  {id:"od_096",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which of the following is an example of benign online disinhibition?",options:["Sending threatening messages to a stranger because you believe your identity is hidden from public view","Sharing personal struggles in a support forum because the reduced cues make self-disclosure feel safer","Deliberately posting false rumours about a colleague to damage their professional reputation anonymously","Creating multiple fake accounts to harass a former partner across several different social media platforms"],correct:1,explanation:"Sharing personal struggles in a support forum illustrates benign disinhibition: the online environment facilitates adaptive self-disclosure that may promote help-seeking and emotional support.",reference:"Suler, J. (2004).",tags:["benign","example","self-disclosure"]},

  {id:"od_097",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Metaverse environments introduce which novel challenge for understanding online disinhibition compared to 2D platforms?",options:["Metaverse environments eliminate all disinhibition because 3D avatars provide complete social presence equivalent to physical copresence","Embodied avatar interactions create a complex mix of presence and anonymity that does not map neatly onto Suler's original factors","Metaverse environments produce identical disinhibition patterns to text-based email communication in all research conducted to date","Disinhibition in metaverse environments has been comprehensively explained by existing theory with no remaining research gaps"],correct:1,explanation:"Metaverse environments combine embodied interaction (increasing presence) with avatar customisation (enabling anonymity), creating novel disinhibition dynamics not fully captured by Suler's original framework.",reference:"Yee, N., & Bailenson, J. N. (2007); Slater, M. (2009).",tags:["metaverse","embodiment","theory-extension"]},

  {id:"od_098",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Community-elected moderators in online forums are generally more effective at reducing toxic disinhibition than purely algorithmic content moderation systems.",options:["True","False"],correct:0,explanation:"Research suggests human moderators with community knowledge can better understand context, sarcasm, and nuance than current algorithmic systems, making them more effective at reducing toxic disinhibition while preserving benign expression.",reference:"Seering, J. (2020); Gillespie, T. (2018).",tags:["moderation","human-vs-algorithmic","effectiveness"]},

  {id:"od_099",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The 'online stranger' paradox in therapeutic self-disclosure describes which clinical phenomenon?",options:["Clients who refuse to disclose any information online because they perceive all digital platforms as insecure","Clients who disclose more to an unknown online therapist than to a familiar face-to-face therapist they trust","Therapists who are unable to form any therapeutic alliance with clients in online therapy settings or formats","The observation that online therapy is always inferior to face-to-face therapy for all client populations studied"],correct:1,explanation:"The online stranger paradox describes how disinhibition can lead clients to disclose more sensitive material to an unfamiliar online therapist than to a trusted face-to-face clinician.",reference:"Barak, A., & Gluck-Ofri, O. (2007); Suler, J. (2004).",tags:["therapy","stranger-paradox","disclosure"]},

  {id:"od_100",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which design feature is most commonly used as a friction intervention to reduce impulsive toxic posting?",options:["Requiring users to solve a complex mathematical equation before each individual post is submitted to the platform","Displaying a confirmation prompt asking users to review their message for offensive content before final submission","Permanently banning any user whose first ever post receives a negative reaction from any other platform member","Removing all text input capability and restricting communication to a predefined set of approved emoji reactions"],correct:1,explanation:"Confirmation prompts (e.g., 'Does this contain something that could be hurtful?') are widely used friction interventions that pause impulsive responding and activate reflective processing.",reference:"Katsaros, M., et al. (2022).",tags:["friction","prompts","design"]},

  {id:"od_101",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The distinction between 'persistent' and 'ephemeral' online content affects disinhibition through which mechanism?",options:["Persistent content always produces more disinhibition because users know their messages will be archived permanently","Ephemeral content (e.g., disappearing stories) can increase disinhibition by reducing perceived long-term consequences","Content persistence has no relationship to disinhibition because users never consider message longevity before posting","Ephemeral content completely eliminates disinhibition because users know their messages will soon disappear from view"],correct:1,explanation:"Ephemeral content (Stories, Snapchat) can increase disinhibition by reducing perceived permanence and accountability, though screenshots complicate this perception.",reference:"Bayer, J. B., et al. (2016).",tags:["ephemeral","persistence","consequences"]},

  {id:"od_102",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Discord's role-based permission system affects disinhibition by reintroducing which of Suler's factors in a modified form?",options:["Dissociative anonymity, because role assignments reveal the real-world identity of all server members equally","Authority structures, because server roles create visible hierarchies that partially restore status differentiation","Asynchronicity, because Discord role permissions control the speed at which messages are delivered to recipients","Solipsistic introjection, because role colours cause users to imagine other members as fictional game characters"],correct:1,explanation:"Discord's role system (admin, moderator, member) partially counteracts minimisation of authority by creating visible hierarchies with differential permissions.",reference:"Suler, J. (2004); Kowert, R. (2020).",tags:["Discord","roles","authority"]},

  {id:"od_103",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"The 'online disinhibition effect' only applies to negative behaviours such as aggression, harassment, and trolling.",options:["True","False"],correct:1,explanation:"Suler (2004) explicitly described both benign disinhibition (self-disclosure, kindness, generosity) and toxic disinhibition (aggression, hostility), emphasising the dual nature of the effect.",reference:"Suler, J. (2004).",tags:["benign","toxic","dual-nature"]},

  {id:"od_104",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'anticipated regret' has been proposed as a re-inhibition strategy because it works by activating which process?",options:["Prospective emotional forecasting that makes users consider how they will feel about their post in the future","Retrospective analysis of all previous posts that a user has ever made on any platform throughout their lifetime","Automatic deletion of any content that an AI system predicts the user might regret based on linguistic analysis","Mandatory waiting periods of at least twenty-four hours between composing a message and being able to submit it"],correct:0,explanation:"Anticipated regret interventions prompt users to engage in prospective emotional forecasting ('Will I regret this tomorrow?'), activating reflective processing that can counteract impulsive disinhibition.",reference:"Abraham, C., & Sheeran, P. (2003).",tags:["anticipated-regret","re-inhibition","emotion-forecasting"]},

  {id:"od_105",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Research on disinhibition transfer from online to offline contexts most strongly supports which conclusion?",options:["Disinhibited online behaviour always creates permanent personality changes that persist in all offline situations","Context-specific priming effects may temporarily increase aggression offline after hostile online interactions occur","No research has ever examined the relationship between online disinhibition and subsequent offline behaviour","Online disinhibition is completely contained within digital environments and never influences offline behaviour"],correct:1,explanation:"Research supports context-specific priming effects where hostile online interactions can temporarily prime aggressive cognitions that influence subsequent offline behaviour.",reference:"Barlett, C. P. (2015); Anderson, C. A., & Bushman, B. J. (2002).",tags:["transfer","priming","offline"]},

  {id:"od_106",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Longitudinal studies of internet users suggest that disinhibition patterns change over time following which trajectory?",options:["Disinhibition increases linearly with internet experience, with no ceiling effect ever observed in any study","Initial high disinhibition decreases as users develop platform literacy, but spikes again with novel platform adoption","Disinhibition remains perfectly constant throughout a user's entire internet career without any variation observed","All forms of disinhibition permanently disappear after the first six months of regular internet use in all populations"],correct:1,explanation:"Longitudinal evidence suggests a curvilinear pattern: initial disinhibition decreases with platform familiarity and norm learning, but novel platforms or features can trigger new disinhibition cycles.",reference:"Joinson, A. N. (2007); Suler, J. (2004).",tags:["longitudinal","trajectory","platform-literacy"]},

  {id:"od_107",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"In the context of online dating, 'catfishing' represents which specific intersection of disinhibition and deception?",options:["The benign self-enhancement that all dating app users engage in when selecting their most flattering profile photos","The creation of entirely fabricated online identities enabled by dissociative anonymity and dissociative imagination","A form of identity theft that only occurs through targeted hacking of other users' personal social media accounts","A harmless social experiment that researchers use to study self-presentation norms across different dating platforms"],correct:1,explanation:"Catfishing leverages dissociative anonymity (hiding true identity) and dissociative imagination (creating an alternate self), enabling elaborate deception in dating contexts.",reference:"Suler, J. (2004); Hancock, J. T. (2007).",tags:["catfishing","dating","deception"]},

  {id:"od_108",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Suler's 'asynchronicity' factor is irrelevant to modern instant messaging because messages are delivered in real time.",options:["True","False"],correct:1,explanation:"Even in instant messaging, asynchronicity remains relevant because users can choose when to read, how long to take composing replies, and can disengage without the social pressure of face-to-face interaction.",reference:"Suler, J. (2004).",tags:["asynchronicity","instant-messaging","relevance"]},

  {id:"od_109",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The role of 'audience design' in moderating online disinhibition refers to which cognitive process?",options:["Platform designers creating audience metrics dashboards that display real-time viewer counts for all user posts","Users mentally constructing their imagined audience and adjusting self-presentation and disclosure accordingly","Algorithms automatically selecting which audience members will see each post based on engagement prediction","Audience members collectively designing the platform interface through open-source community collaboration"],correct:1,explanation:"Audience design (Bell, 1984) describes how users mentally construct their imagined audience, which moderates disinhibition: imagining a supportive audience increases disclosure, while imagining a hostile one may increase aggression.",reference:"Bell, A. (1984); Litt, E. (2012).",tags:["audience-design","imagined-audience","self-presentation"]},

  {id:"od_110",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"VR-based exposure therapy for social anxiety interacts with disinhibition effects in which clinically significant way?",options:["VR exposure therapy is impossible because virtual environments cannot produce any anxiety responses in patients","VR's partial disinhibition may allow graduated anxiety exposure while maintaining enough safety to prevent avoidance","VR disinhibition completely eliminates social anxiety permanently after a single virtual reality therapy session","VR environments produce excessive disinhibition that prevents any therapeutic anxiety from being experienced at all"],correct:1,explanation:"VR provides a middle ground: enough disinhibition to reduce avoidance behaviour while maintaining sufficient presence to activate anxiety responses, enabling graduated therapeutic exposure.",reference:"Powers, M. B., & Emmelkamp, P. M. (2008).",tags:["VR","exposure-therapy","anxiety"]},

  {id:"od_111",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Cultural tightness-looseness theory predicts that individuals from tighter cultures will show larger disinhibition effects when interacting in anonymous online environments.",options:["True","False"],correct:0,explanation:"Tighter cultures have stronger norms and sanctions for deviance; when these constraints are removed by online anonymity, the behavioural shift (disinhibition) can be proportionally larger.",reference:"Gelfand, M. J., et al. (2011).",tags:["tightness-looseness","culture","prediction"]},

  {id:"od_112",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Slack's 'emoji reaction' feature can paradoxically increase workplace disinhibition by enabling which behaviour?",options:["Providing a low-effort method for expressing disagreement, sarcasm, or hostility with plausible deniability","Requiring employees to compose detailed written explanations of their emotional response to every team message","Forcing all team communication into synchronous video calls where nonverbal cues prevent all misunderstanding","Eliminating all forms of emotional expression from the workplace by replacing text with standardised icons only"],correct:0,explanation:"Emoji reactions provide an ambiguous, low-effort communication channel that enables passive-aggressive behaviour, sarcasm, and hostility with plausible deniability in professional settings.",reference:"Byron, K. (2008); Riordan, M. A. (2017).",tags:["Slack","emoji","workplace"]},

  {id:"od_113",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The concept of 'moral outrage contagion' online represents which intersection of disinhibition and social influence?",options:["A process where individuals become less morally outraged over time due to desensitisation from repeated online exposure","A process where disinhibited moral outrage expressions spread virally, amplified by algorithmic promotion of engaging content","A phenomenon exclusive to political extremist groups that has no relevance to mainstream social media platform users","A theoretical construct that has been proposed but never empirically investigated in any published research to date"],correct:1,explanation:"Moral outrage contagion occurs when disinhibited expressions of outrage spread through social networks, amplified by algorithms that prioritise emotionally engaging content.",reference:"Brady, W. J., et al. (2017); Crockett, M. J. (2017).",tags:["moral-outrage","contagion","algorithms"]},

  {id:"od_114",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"A student posts a supportive message to a classmate's blog about mental health struggles. This behaviour best exemplifies which form of disinhibition?",options:["Toxic disinhibition, because any discussion of mental health online is inherently harmful to all involved parties","Benign disinhibition, because the online environment facilitated prosocial behaviour that might not occur face-to-face","Dissociative imagination, because the student does not believe their classmate is a real person deserving of empathy","Minimisation of authority, because the student is deliberately undermining their teacher's classroom authority"],correct:1,explanation:"This exemplifies benign disinhibition: the online environment reduced social barriers to expressing empathy and support that the student might feel too self-conscious to express face-to-face.",reference:"Suler, J. (2004).",tags:["benign","prosocial","example"]},

  {id:"od_115",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Gaming platform disinhibition differs from social media disinhibition primarily because of which environmental factor?",options:["Gaming platforms never allow any communication between players and therefore disinhibition cannot occur at all","Competitive dynamics and frustration-aggression interactions compound with standard online disinhibition factors","Social media platforms are always anonymous while gaming platforms always require real-name identity verification","Gaming environments eliminate all disinhibition because players are focused exclusively on game mechanics only"],correct:1,explanation:"Gaming environments add competitive dynamics, frustration from losing, and in-game power dynamics that interact with standard disinhibition factors, creating distinct patterns of disinhibited behaviour.",reference:"Kowert, R. (2020); Ivory, J. D. (2015).",tags:["gaming","competition","frustration-aggression"]},

  {id:"od_116",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Research shows that adding profile photos to online discussion forums significantly reduces hostile behaviour compared to text-only profiles.",options:["True","False"],correct:0,explanation:"Studies show that visual cues, including profile photos, partially restore social presence and reduce hostile disinhibition by counteracting the invisibility factor.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["profile-photos","visibility","social-presence"]},

  {id:"od_117",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The 'spiral of incivility' in online discussions describes which escalation pattern?",options:["A progressive decrease in hostile behaviour as forum discussions continue over extended periods of time","A feedback loop where initial disinhibited incivility triggers reciprocal incivility, escalating conflict progressively","A platform algorithm that automatically increases the visibility of the most civil and constructive user comments","A moderator strategy that uses escalating warnings to progressively discourage users from posting uncivil content"],correct:1,explanation:"The spiral of incivility describes how initial disinhibited hostile comments trigger reciprocal hostility from others, creating a feedback loop of escalating incivility.",reference:"Cheng, J., et al. (2017); Anderson, A. A., et al. (2014).",tags:["spiral-incivility","escalation","feedback-loop"]},

  {id:"od_118",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"Research on re-inhibition through 'social translucence' design aims to restore which element of face-to-face interaction?",options:["The physical ability to gesture and use body language during all forms of online text-based communication","Mutual awareness of others' presence and activities, making behaviour and its social consequences more visible","The requirement to be in the same geographical location as all other participants in an online conversation","The elimination of all privacy features so that every user's complete internet history is visible to everyone"],correct:1,explanation:"Social translucence (Erickson & Kellogg, 2000) aims to make behaviour, its social context, and its consequences visible to others, restoring the mutual awareness that inhibits antisocial behaviour.",reference:"Erickson, T., & Kellogg, W. A. (2000).",tags:["social-translucence","design","re-inhibition"]},

  {id:"od_119",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which factor from Suler's model explains why people sometimes feel they can speak more freely to an online counsellor than to their own family doctor?",options:["Dissociative anonymity, because online counsellors never learn anything about their clients' real identities ever","Minimisation of authority, because the physical trappings of clinical authority are absent in online settings","Asynchronicity, because all online counselling requires a minimum forty-eight hour delay between each message","Dissociative imagination, because clients believe online counsellors are artificial intelligence chatbot programs"],correct:1,explanation:"Minimisation of authority explains freer disclosure to online counsellors: without the physical markers of clinical authority (white coat, office, power dynamics), clients feel more equal and less inhibited.",reference:"Suler, J. (2004).",tags:["minimisation-authority","counselling","disclosure"]},

  {id:"od_120",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Instagram's visual-first design creates which unique pattern of disinhibited behaviour compared to text-based platforms?",options:["Instagram eliminates all disinhibition because photographs provide more social cues than text communication does","Disinhibited appearance comparison, body image disclosure, and curated vulnerability performances are amplified","Instagram users never experience disinhibition because the platform requires identity verification through selfies","Visual platforms produce identical disinhibition patterns to text platforms with no differences in any behaviour"],correct:1,explanation:"Instagram's visual format amplifies appearance-related disinhibition: users engage in disinhibited body exposure, comparison, and curated 'authentic' vulnerability.",reference:"Tiggemann, M., & Zaccardo, M. (2018).",tags:["Instagram","visual","body-image"]},

  {id:"od_121",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"Experimental research has shown that simply reminding users that their online activity is being recorded significantly reduces toxic disinhibited behaviour.",options:["True","False"],correct:0,explanation:"The 'watching eyes' effect extends to online contexts: reminders of observation, recording, or monitoring activate self-awareness and social evaluation concerns that counteract disinhibition.",reference:"Bateson, M., et al. (2006); Joinson, A. N. (2001).",tags:["observation","self-awareness","watching-eyes"]},

  {id:"od_122",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The phenomenon of 'performative disinhibition' on social media refers to which strategic behaviour?",options:["The involuntary loss of all self-control that users experience when they encounter emotionally provocative content","The deliberate display of seemingly disinhibited behaviour crafted for audience engagement and social capital gain","The complete inability to perform any voluntary action online due to overwhelming anxiety about public judgment","The accidental sharing of private information caused by unfamiliarity with platform privacy settings and controls"],correct:1,explanation:"Performative disinhibition involves strategically crafted 'authentic' or 'unfiltered' self-presentation designed for social capital, blurring the line between genuine and performed disinhibition.",reference:"Marwick, A. E., & boyd, d. (2011).",tags:["performative","social-capital","authenticity"]},

  {id:"od_123",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The 'online Machiavellianism' hypothesis proposes that some users strategically exploit disinhibition factors to achieve which outcome?",options:["Mutual benefit for all community members through cooperative and transparent online democratic participation","Interpersonal manipulation, social dominance, and exploitation of others' disinhibited vulnerability for personal gain","Improved platform security through identifying and reporting vulnerabilities in social media privacy protections","Enhanced educational outcomes by creating disinhibiting environments that promote student academic participation"],correct:1,explanation:"The online Machiavellianism hypothesis suggests that individuals high in Dark Triad traits strategically exploit others' disinhibited openness for manipulation, exploitation, and social dominance.",reference:"Buckels, E. E., et al. (2014).",tags:["Machiavellianism","Dark-Triad","exploitation"]},

  {id:"od_124",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Which of the following scenarios best illustrates Suler's concept of 'invisibility' in online disinhibition?",options:["A user reads a controversial blog post but decides not to comment or engage with the content in any way","A user posts critical feedback on a colleague's work in a text forum that they would not say face-to-face","A user creates a detailed professional profile with a full photograph on a career networking website","A user attends a video conference with their camera and microphone turned on for the entire meeting"],correct:1,explanation:"Invisibility means others cannot see the user's physical reactions, removing the nonverbal feedback loop. Posting critical text feedback one would not say in person exemplifies how invisibility enables disinhibition.",reference:"Suler, J. (2004).",tags:["invisibility","example","text-feedback"]},

  {id:"od_125",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Research on disinhibition in online support groups for stigmatised conditions (e.g., HIV, addiction) consistently finds which pattern?",options:["Users in stigmatised condition support groups never experience benign disinhibition due to persistent shame","Anonymity-enabled disinhibition facilitates help-seeking and mutual support that stigma prevents in offline contexts","Online support groups always increase stigma because disinhibited members share information that reinforces stereotypes","Support group members experience identical levels of disclosure online and offline with no disinhibition effect"],correct:1,explanation:"Anonymity and invisibility in online support groups facilitate disclosure about stigmatised conditions, enabling help-seeking, mutual support, and community building that stigma-related shame prevents offline.",reference:"McKenna, K. Y. A., & Bargh, J. A. (1998).",tags:["support-groups","stigma","help-seeking"]},

  {id:"od_126",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"The 'hostile media effect' can amplify online disinhibition in political discussions by making users perceive neutral content as biased against their own group.",options:["True","False"],correct:0,explanation:"The hostile media effect leads partisans to perceive neutral media as biased against their side, which can trigger morally justified disinhibited hostility toward perceived bias in online political discussions.",reference:"Vallone, R. P., et al. (1985).",tags:["hostile-media","political","perception"]},

  {id:"od_127",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'networked disinhibition' extends Suler's individual-level model by incorporating which additional element?",options:["The observation that disinhibition only occurs when a user's internet network connection speed exceeds a threshold","The amplification of individual disinhibition through social network dynamics, viral spread, and algorithmic curation","The claim that disinhibition is entirely a network-level phenomenon with no individual psychological component at all","The technical networking protocols that determine how quickly disinhibited content is transmitted between servers"],correct:1,explanation:"Networked disinhibition extends individual-level theory by incorporating how social networks, viral sharing, and algorithmic amplification scale individual disinhibited acts into collective phenomena.",reference:"Brady, W. J., et al. (2017).",tags:["networked","amplification","algorithms"]},

  {id:"od_128",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The 'chilling effect' of over-moderation on online discourse represents which specific trade-off in platform governance?",options:["Excessive moderation can suppress benign disinhibition and legitimate speech alongside genuinely harmful toxic content","Platform moderation always perfectly balances free expression and safety with no negative unintended consequences","Chilling effects only occur when moderation is performed by human moderators and never when algorithms are used","Over-moderation exclusively affects political speech and has no impact on personal, creative, or social expression"],correct:0,explanation:"The chilling effect describes how aggressive moderation can suppress beneficial speech, benign disinhibition, and legitimate dissent alongside harmful content.",reference:"Gillespie, T. (2018); Penney, J. (2017).",tags:["chilling-effect","over-moderation","trade-off"]},

  {id:"od_129",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Why does Suler argue that asynchronicity contributes to online disinhibition?",options:["Because asynchronous communication is always anonymous, preventing anyone from identifying the message sender","Because the delay between sending and receiving allows users to avoid dealing with immediate emotional reactions","Because asynchronous platforms do not allow users to edit or delete their messages after initial submission","Because asynchronous communication is always faster than face-to-face interaction in all possible circumstances"],correct:1,explanation:"Asynchronicity contributes to disinhibition because users can 'hit and run' — post provocative content and avoid the immediate emotional reactions of recipients.",reference:"Suler, J. (2004).",tags:["asynchronicity","emotional-reactions","avoidance"]},

  {id:"od_130",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Disinhibition on anonymous confession apps (e.g., Whisper, Yik Yak) differs from social media disinhibition primarily in which respect?",options:["Confession apps eliminate all social interaction and therefore cannot produce any form of disinhibited behaviour","Confession apps maximise dissociative anonymity, enabling extreme disclosure but also facilitating unaccountable toxicity","Social media platforms are always more anonymous than confession apps because they use pseudonymous usernames","Confession apps produce identical disinhibition to identified social media because the same psychological factors apply"],correct:1,explanation:"Confession apps maximise anonymity beyond typical social media, enabling both extreme self-disclosure (benign) and unaccountable hostility (toxic) at higher levels than pseudonymous platforms.",reference:"Correa, D., et al. (2015).",tags:["confession-apps","anonymity","extreme-disclosure"]},

  {id:"od_131",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"The concept of 'digital courage' describes how benign online disinhibition can enable marginalised individuals to advocate for social justice causes they would be afraid to support publicly offline.",options:["True","False"],correct:0,explanation:"Digital courage describes how benign disinhibition enables individuals, particularly from marginalised groups, to engage in advocacy, whistleblowing, and social justice activism that offline power dynamics would suppress.",reference:"Suler, J. (2004); Joinson, A. N. (2001).",tags:["digital-courage","marginalised","advocacy"]},

  {id:"od_132",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Which methodological challenge most significantly limits experimental research on online disinhibition?",options:["Researchers have never been interested in studying online disinhibition and so no methods have been developed","Ecological validity concerns arise because laboratory simulations may not replicate genuine disinhibition conditions","Online disinhibition can only be studied through neuroimaging techniques that most psychology labs cannot afford","Ethical review boards universally prohibit all research involving any form of online communication between participants"],correct:1,explanation:"Laboratory studies of disinhibition face ecological validity challenges: participants who know they are being observed may not exhibit the same disinhibition as in naturalistic online settings.",reference:"Joinson, A. N. (2001); Lapidot-Lefler, N., & Barak, A. (2012).",tags:["methodology","ecological-validity","limitations"]},

  {id:"od_133",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The 'Proteus effect' in VR environments demonstrates which specific challenge to Suler's original disinhibition framework?",options:["The Proteus effect confirms Suler's model perfectly because avatar appearance is equivalent to dissociative anonymity","Avatar-mediated behaviour change suggests disinhibition can be directionally shaped by visual identity cues, not just released","The Proteus effect only applies to height and attractiveness of avatars and has no broader disinhibition implications","Suler's framework already fully accounts for the Proteus effect through the dissociative imagination factor alone"],correct:1,explanation:"The Proteus effect shows that disinhibition is not simply a release from restraint but can be directionally shaped: avatar appearance steers the type of disinhibited behaviour.",reference:"Yee, N., & Bailenson, J. N. (2007).",tags:["Proteus-effect","directional","theory-challenge"]},

  {id:"od_134",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Research suggests that individuals who exhibit high levels of toxic disinhibition online always have pre-existing antisocial personality traits.",options:["True","False"],correct:1,explanation:"While personality traits (e.g., Dark Triad) predict some toxic online behaviour, situational disinhibition factors can elicit toxic behaviour from individuals without pre-existing antisocial traits.",reference:"Suler, J. (2004); Buckels, E. E., et al. (2014).",tags:["personality","situational","trait-vs-state"]},

  {id:"od_135",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"The 'deindividuation' theory of online disinhibition differs from Suler's model in which fundamental respect?",options:["Deindividuation focuses on loss of self-awareness in groups, while Suler's model emphasises individual cognitive factors","Deindividuation and Suler's model are identical theories that use different terminology for the same phenomena","Suler's model focuses exclusively on group behaviour while deindividuation theory addresses individual behaviour only","Deindividuation theory has been applied to online contexts while Suler's model was designed only for offline behaviour"],correct:0,explanation:"Deindividuation theory (Zimbardo, 1969) emphasises loss of self-awareness in anonymous groups, while Suler's model identifies specific cognitive-emotional factors operating at the individual level.",reference:"Zimbardo, P. G. (1969); Suler, J. (2004).",tags:["deindividuation","theory-comparison","self-awareness"]},

  {id:"od_136",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Which platform design feature most effectively counteracts the 'dissociative anonymity' factor of online disinhibition?",options:["Allowing unlimited creation of anonymous accounts with no identity verification requirements for new registrations","Implementing graduated identity verification that links accounts to verifiable real-world identity credentials","Removing all usernames and profile information so that all platform communication is entirely indistinguishable","Providing users with multiple anonymous personas that they can switch between freely during any conversation"],correct:1,explanation:"Graduated identity verification (e.g., phone number, ID verification, trusted contacts) directly counteracts dissociative anonymity by linking online actions to real-world identifiable persons.",reference:"Cho, D., & Kwon, K. H. (2015).",tags:["identity-verification","design","anonymity"]},

  {id:"od_137",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"'Toxic positivity' in online wellness communities represents which underexplored aspect of disinhibition?",options:["Toxic positivity is entirely unrelated to online disinhibition and involves completely different psychological processes","Disinhibited enforcement of relentless optimism that suppresses legitimate negative emotions and help-seeking behaviour","A form of toxic disinhibition that involves posting exclusively negative and pessimistic content in wellness spaces","The phenomenon of wellness influencers deliberately posting inaccurate medical advice for commercial financial gain"],correct:1,explanation:"Toxic positivity in online wellness spaces represents a form of disinhibited norm enforcement where relentless optimism suppresses legitimate emotional expression and can prevent genuine help-seeking.",reference:"Quintero Johnson, J. M., & Payne, H. J. (2021).",tags:["toxic-positivity","wellness","norm-enforcement"]},

  {id:"od_138",category:"online-disinhibition",difficulty:1,mode:"public",type:"mcq",question:"Suler's concept of 'dissociative imagination' is best described as which cognitive process?",options:["The belief that online interactions exist in a separate imaginary world that has no consequences in real life","The clinical inability to distinguish between real and imaginary events due to a diagnosed psychological disorder","The deliberate creation of fictional creative writing content for publication on online storytelling platforms","The complete rejection of all imaginative thought in favour of purely rational online communication behaviour"],correct:0,explanation:"Dissociative imagination involves perceiving online interactions as occurring in a make-believe dimension separate from real life, allowing users to feel that normal rules and consequences do not apply.",reference:"Suler, J. (2004).",tags:["dissociative-imagination","definition","Suler-factors"]},

  {id:"od_139",category:"online-disinhibition",difficulty:2,mode:"public",type:"truefalse",question:"The mere presence of a 'report' button on social media platforms has been shown to reduce disinhibited toxic behaviour even when users do not actually click it.",options:["True","False"],correct:0,explanation:"The visibility of reporting mechanisms acts as an environmental cue that signals behavioural monitoring, activating self-regulation processes similar to the 'watching eyes' effect.",reference:"Bateson, M., et al. (2006); Seering, J. (2020).",tags:["report-button","environmental-cue","self-regulation"]},

  {id:"od_140",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The SIDE model (Social Identity model of Deindividuation Effects) challenges classical deindividuation theory by proposing which alternative mechanism?",options:["Anonymity always increases aggression regardless of group identity salience or any other contextual social factors","Anonymity can increase conformity to salient group norms rather than simply releasing individuals from all restraint","Deindividuation effects are purely individual phenomena with no social group component or influence whatsoever","The SIDE model applies exclusively to offline group behaviour and has never been tested in online environments"],correct:1,explanation:"The SIDE model proposes that anonymity does not simply release behaviour but can increase conformity to salient group norms, explaining both increased prosocial and antisocial behaviour online.",reference:"Reicher, S. D., et al. (1995); Postmes, T., & Spears, R. (1998).",tags:["SIDE-model","deindividuation","group-norms"]},

  {id:"od_141",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Suler described two main types of online disinhibition: benign disinhibition and toxic disinhibition.",options:["True","False"],correct:0,explanation:"Suler (2004) explicitly distinguished benign disinhibition (prosocial behaviours like self-disclosure, kindness) from toxic disinhibition (antisocial behaviours like aggression, hostility).",reference:"Suler, J. (2004).",tags:["benign","toxic","classification"]},

  {id:"od_142",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"How do 'dark patterns' in platform design interact with online disinhibition to affect user behaviour?",options:["Dark patterns have no relationship to disinhibition because they only affect purchasing decisions and nothing else","Dark patterns can exploit disinhibition by designing interfaces that encourage impulsive sharing, posting, and engagement","Dark patterns reduce disinhibition by creating additional friction that forces users to think carefully before acting","Dark patterns exclusively refer to the colour schemes used in platform interfaces and do not affect user behaviour"],correct:1,explanation:"Dark patterns (deceptive design) can exploit disinhibition by minimising friction, using default settings that maximise exposure, and designing interfaces that encourage impulsive engagement.",reference:"Mathur, A., et al. (2019).",tags:["dark-patterns","design","exploitation"]},

  {id:"od_143",category:"online-disinhibition",difficulty:2,mode:"public",type:"mcq",question:"Research on disinhibition in online peer-to-peer mental health support platforms has found which benefit?",options:["Peer support platforms always produce worse outcomes than professional therapy for all mental health conditions studied","Disinhibition enables disclosure of symptoms and experiences that stigma prevents in face-to-face peer conversations","Users of peer support platforms never experience any form of disinhibition due to the seriousness of their condition","Peer support platforms are exclusively used by individuals who have already completed formal clinical treatment"],correct:1,explanation:"Benign disinhibition in peer support platforms enables disclosure of stigmatised mental health experiences, facilitating mutual support, normalisation, and help-seeking.",reference:"Naslund, J. A., et al. (2016).",tags:["peer-support","mental-health","stigma-reduction"]},

  {id:"od_144",category:"online-disinhibition",difficulty:3,mode:"public",type:"mcq",question:"The concept of 'platform-specific disinhibition profiles' suggests that disinhibition should be understood as which type of phenomenon?",options:["A universal constant that operates identically across all digital platforms regardless of their design or affordances","A context-dependent variable shaped by each platform's unique combination of affordances, norms, and user demographics","An outdated concept that is no longer relevant to modern internet platforms designed after Suler's original 2004 paper","A purely individual difference variable determined entirely by personality traits with no platform-level influence"],correct:1,explanation:"Platform-specific disinhibition profiles recognise that each platform's unique combination of affordances (anonymity level, synchronicity, audience), norms, and demographics creates distinct disinhibition patterns.",reference:"Fox, J., & Moreland, J. J. (2015).",tags:["platform-specific","affordances","context"]},

  {id:"od_145",category:"online-disinhibition",difficulty:1,mode:"public",type:"truefalse",question:"Suler's online disinhibition effect model has been criticised for lacking empirical support, but the core factors have since received substantial experimental validation.",options:["True","False"],correct:0,explanation:"While initially theoretical, Suler's factors have received substantial empirical support, including Lapidot-Lefler and Barak's (2012) experimental work on anonymity, invisibility, and eye contact effects.",reference:"Lapidot-Lefler, N., & Barak, A. (2012).",tags:["empirical-validation","Suler","criticism"]},

  // ═══════════════════════════════════════════════════════════════
  // AI PSYCHOLOGY (expanded ai_043–ai_122)
  // ═══════════════════════════════════════════════════════════════

  {id:"ai_043",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The CASA (Computers Are Social Actors) paradigm proposes which fundamental claim about human-computer interaction?",options:["People only apply social rules to computers when explicitly instructed to do so by an authority figure present","People mindlessly apply social rules and expectations to computers even when they know the machines are not human","People never treat computers as social actors under any experimental conditions or observational circumstances","People only treat computers as social actors when the computers are equipped with advanced artificial intelligence"],correct:1,explanation:"CASA (Nass & Moon, 2000) demonstrates that people mindlessly apply social rules (politeness, reciprocity, gender stereotypes) to computers, even while reporting awareness that computers are not human.",reference:"Nass, C., & Moon, Y. (2000).",tags:["CASA","social-actors","mindless"]},

  {id:"ai_044",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"Extensions of the CASA paradigm to modern AI assistants have revealed which modification to the original framework?",options:["Modern AI completely invalidates CASA because users never apply social rules to current AI systems at all","Users apply social rules more deeply and consistently to AI with conversational ability, extending beyond 'mindless' responses","CASA effects have decreased dramatically because modern users are more technologically sophisticated than 1990s participants","The CASA paradigm applies only to physical robot embodiments and has no relevance to voice or text-based AI systems"],correct:1,explanation:"Modern conversational AI triggers deeper social responses than the simple computers Nass studied, with users applying more complex social schemas like trust, empathy, and relationship expectations.",reference:"Nass, C., & Moon, Y. (2000); Ho, A., et al. (2018).",tags:["CASA","extensions","conversational-AI"]},

  {id:"ai_045",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI anthropomorphism — the attribution of human characteristics to AI systems — is most strongly triggered by which design feature?",options:["The use of complex mathematical algorithms that are invisible to the user and never communicated in any interface","Human-like conversational language, voice, name, and the expression of apparent emotional states by the AI system","The physical size of the server hardware on which the artificial intelligence software is hosted and maintained","The financial cost of the AI service subscription, with more expensive systems being perceived as more human-like"],correct:1,explanation:"Anthropomorphism is most strongly triggered by human-like cues: conversational language, human names, voice, emotional expressions, and personality-consistent responses.",reference:"Epley, N., et al. (2007); Waytz, A., et al. (2014).",tags:["anthropomorphism","design-cues","triggers"]},

  {id:"ai_046",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Research consistently shows that anthropomorphising AI systems increases user trust, but this trust is often poorly calibrated to the system's actual capabilities.",options:["True","False"],correct:0,explanation:"Anthropomorphism increases trust through social bonding mechanisms, but this trust is often miscalibrated — users may trust human-like AI more than its performance warrants.",reference:"Waytz, A., et al. (2014); Madhavan, P., & Wiegmann, D. A. (2007).",tags:["anthropomorphism","trust","miscalibration"]},

  {id:"ai_047",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI tutoring systems in education produce which well-documented psychological effect on student learning behaviour?",options:["Students always learn less from AI tutors than from human tutors regardless of subject matter or implementation","Students may rely excessively on AI hints and explanations, potentially undermining deep learning and self-regulation","AI tutoring systems have never been evaluated in controlled educational research studies in any academic context","Students treat AI tutors identically to textbooks, never engaging in any social or interactive learning behaviours"],correct:1,explanation:"AI tutoring can create over-reliance on system scaffolding, where students request hints or solutions rather than engaging in productive struggle.",reference:"VanLehn, K. (2011); Koedinger, K. R., et al. (2012).",tags:["AI-tutoring","over-reliance","self-regulation"]},

  {id:"ai_048",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI-assisted assessment in education raises which primary psychological concern among students?",options:["Students universally prefer AI grading over human grading because AI is perceived as completely objective always","Perceived fairness concerns arise because students question whether AI can evaluate nuanced or creative work accurately","Students are never aware of AI involvement in assessment and therefore have no psychological response to it at all","AI assessment exclusively produces positive psychological responses because it eliminates human bias completely"],correct:1,explanation:"Students express concerns about AI assessment fairness, particularly for subjective, creative, or nuanced work.",reference:"Zawacki-Richter, O., et al. (2019).",tags:["AI-assessment","fairness","education"]},

  {id:"ai_049",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"AI-generated misinformation poses which unique psychological challenge compared to human-generated misinformation?",options:["AI-generated misinformation is always obviously fake and therefore easier for all users to identify and dismiss","AI can produce misinformation at scale with high linguistic fluency, overwhelming human capacity for critical evaluation","Human-generated misinformation is always more persuasive than AI-generated content in all research studies to date","AI-generated misinformation only exists in text format and can never be produced as images, audio, or video content"],correct:1,explanation:"AI-generated misinformation can be produced at unprecedented scale with high linguistic quality, overwhelming individual and institutional capacity for fact-checking.",reference:"Zellers, R., et al. (2019); Buchanan, B., et al. (2021).",tags:["AI-misinformation","scale","fluency"]},

  {id:"ai_050",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Research on creativity attribution for AI-generated content has found which consistent pattern in public perception?",options:["People always attribute equal creativity to AI-generated and human-generated content when they cannot tell them apart","People tend to devalue AI-generated creative work even when they rated it positively before learning its AI origin","People consistently rate AI-generated creative content as superior to equivalent human-created work in all domains","Creativity attribution is unaffected by knowledge of AI involvement because aesthetic quality is objectively measurable"],correct:1,explanation:"Studies show an 'AI penalty' in creativity attribution: people devalue creative works upon learning of AI involvement, even when they rated the same works positively when believing them human-created.",reference:"Ragot, M., et al. (2020); Chamberlain, R., et al. (2018).",tags:["creativity-attribution","AI-penalty","perception"]},

  {id:"ai_051",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Human-AI collaboration models typically outperform either humans or AI working alone under which specific condition?",options:["When the AI system is given complete autonomous control with no human input or oversight at any decision stage","When humans and AI have complementary strengths, with structured handoffs between human judgment and AI processing","When human collaborators are completely untrained and have no domain knowledge relevant to the task at hand","When the AI system deliberately introduces random errors to force humans to maintain constant vigilant attention"],correct:1,explanation:"Human-AI collaboration is most effective when complementary strengths are leveraged: AI processing speed and data handling with human contextual judgment and ethical reasoning.",reference:"Bansal, G., et al. (2021); Kamar, E. (2016).",tags:["human-AI-collaboration","complementary","handoffs"]},

  {id:"ai_052",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"AI decision-making transparency always increases user trust in the system's recommendations.",options:["True","False"],correct:1,explanation:"The transparency paradox shows that increased transparency can sometimes decrease trust by revealing system limitations or decision processes that conflict with user intuitions.",reference:"Ananny, M., & Crawford, K. (2018).",tags:["transparency","trust","paradox"]},

  {id:"ai_053",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Perceived AI fairness is most strongly influenced by which factor in algorithmic decision-making systems?",options:["The programming language used to code the algorithm, since certain languages are perceived as inherently more fair","Whether the system's decision criteria align with the individual's intuitive sense of justice and procedural fairness","The physical location of the data centre where the AI system's computations are processed and results are stored","The gender of the AI system's lead developer, since users attribute fairness based on developer demographics"],correct:1,explanation:"Perceived AI fairness depends on whether decision criteria match users' intuitive justice concepts: procedural, distributive, and interactional fairness.",reference:"Lee, M. K. (2018); Binns, R., et al. (2018).",tags:["AI-fairness","procedural-justice","perception"]},

  {id:"ai_054",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI bias perception research shows that users respond to algorithmic discrimination compared to equivalent human discrimination in which way?",options:["Users perceive algorithmic discrimination and human discrimination as equally unacceptable in all circumstances studied","Users often judge algorithmic discrimination more harshly because algorithms are expected to be objective and unbiased","Users always forgive algorithmic discrimination because they understand algorithms cannot have discriminatory intentions","Users are completely unable to detect any form of algorithmic discrimination regardless of how blatant the bias is"],correct:1,explanation:"Users hold algorithms to a higher fairness standard than humans, judging algorithmic discrimination more harshly because of expectations of computational objectivity.",reference:"Bigman, Y. E., & Gray, K. (2018).",tags:["AI-bias","discrimination","expectations"]},

  {id:"ai_055",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Affective computing systems that detect and respond to user emotions raise which primary ethical concern?",options:["Emotional AI is universally accurate across all cultures, age groups, and individuals, creating no ethical issues","Emotion recognition systems may misinterpret cultural and individual differences in emotional expression as universal","Affective computing has never been commercially deployed and remains purely a theoretical research concept only","Users always provide fully informed consent before any emotion recognition system processes their facial expressions"],correct:1,explanation:"Emotion recognition systems trained on limited populations may misinterpret cultural, individual, and neurodivergent differences in emotional expression.",reference:"Barrett, L. F., et al. (2019); Crawford, K. (2021).",tags:["affective-computing","emotion-recognition","cultural-bias"]},

  {id:"ai_056",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Research on AI companion relationships has found that some users develop genuine emotional attachment to AI chatbots, reporting feelings of companionship and emotional support.",options:["True","False"],correct:0,explanation:"Users do form emotional attachments to AI companions (e.g., Replika), reporting feelings of companionship, emotional support, and even grief when the AI's behaviour changes due to updates.",reference:"Skjuve, M., et al. (2021); Pentina, I., et al. (2023).",tags:["AI-companions","attachment","emotional-support"]},

  {id:"ai_057",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"AI 'grief bots' — chatbots trained on deceased persons' digital data — raise which unique psychological concern?",options:["Grief bots always facilitate healthy grieving by providing unlimited access to simulated conversations with deceased loved ones","Grief bots may interfere with natural grief processes by creating persistent bonds that prevent psychological adjustment","Grief bots are universally rejected by bereaved individuals and have no documented cases of voluntary personal use","Grief bots only use publicly available social media data and never incorporate private messages or personal information"],correct:1,explanation:"Grief bots risk disrupting natural grief processes by maintaining continuing bonds with simulated versions of the deceased, potentially preventing the psychological adjustment that healthy grieving requires.",reference:"Öhman, C., & Floridi, L. (2017).",tags:["grief-bots","bereavement","continuing-bonds"]},

  {id:"ai_058",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Meta-analytic evidence on therapeutic chatbot effectiveness suggests which overall pattern of clinical outcomes?",options:["Therapeutic chatbots are consistently superior to human therapists across all mental health conditions studied","Therapeutic chatbots show small-to-moderate effects for anxiety and depression, comparable to bibliotherapy approaches","Therapeutic chatbots have zero measurable effect on any psychological outcome in any randomised controlled trial","Therapeutic chatbots are exclusively effective for severe psychotic disorders and not for anxiety or depression"],correct:1,explanation:"Meta-analyses show therapeutic chatbots produce small-to-moderate effect sizes for depression and anxiety symptoms, comparable to bibliotherapy but generally smaller than face-to-face therapy.",reference:"Vaidyam, A. N., et al. (2019); Fitzpatrick, K. K., et al. (2017).",tags:["therapeutic-chatbots","effectiveness","meta-analysis"]},

  {id:"ai_059",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI and privacy concerns interact psychologically through which mechanism known as the 'privacy paradox'?",options:["Users who express strong privacy concerns consistently refuse to use any AI-powered services or digital technologies","Users express high privacy concerns about AI data collection but continue to share personal data for perceived benefits","Users have no privacy concerns about AI systems because they trust technology companies to protect their data fully","The privacy paradox only applies to social media usage and has no relevance to artificial intelligence systems at all"],correct:1,explanation:"The privacy paradox describes the gap between stated privacy concerns and actual disclosure behaviour: users worry about AI data collection but continue sharing personal data for convenience.",reference:"Norberg, P. A., et al. (2007); Barth, S., & de Jong, M. D. (2017).",tags:["privacy-paradox","AI-privacy","disclosure-behaviour"]},

  {id:"ai_060",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The 'chilling effect' of AI surveillance refers to which specific behavioural response to perceived monitoring?",options:["Users becoming more creative and expressive when they know AI systems are monitoring their online activities","Self-censorship and conformity increases when individuals believe AI systems are monitoring their behaviour","AI surveillance has no measurable effect on behaviour because people quickly habituate to monitoring systems","The chilling effect only occurs with human surveillance and artificial intelligence monitoring produces no response"],correct:1,explanation:"AI surveillance chilling effects describe how awareness of algorithmic monitoring leads to self-censorship, conformity, and reduced willingness to express dissenting views.",reference:"Penney, J. (2017); Stoycheff, E. (2016).",tags:["AI-surveillance","chilling-effect","self-censorship"]},

  {id:"ai_061",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The debate about AI-generated art and authenticity centres on which fundamental psychological question?",options:["Whether AI art should be priced higher than human art because it requires more computational resources to produce","Whether creative authenticity requires human intentionality, lived experience, and emotional investment in the process","Whether AI-generated art is always technically superior to human art in all measurable aesthetic quality dimensions","Whether museums should exclusively display AI-generated art because it is more accessible to diverse audiences"],correct:1,explanation:"The authenticity debate centres on whether creativity requires human intentionality, subjective experience, and emotional investment — qualities AI lacks.",reference:"Colton, S. (2012); Elgammal, A., et al. (2017).",tags:["AI-art","authenticity","intentionality"]},

  {id:"ai_062",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"Children tend to attribute more mental states and emotions to AI voice assistants than adults do.",options:["True","False"],correct:0,explanation:"Developmental research shows children are more likely than adults to attribute mental states, emotions, and moral standing to AI voice assistants, consistent with developing theory of mind and animistic thinking.",reference:"Druga, S., et al. (2017); Lovato, S. B., & Piper, A. M. (2019).",tags:["children","voice-assistants","mental-states"]},

  {id:"ai_063",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI recommendation systems affect user autonomy through which psychological mechanism?",options:["Recommendation systems always increase autonomy by providing users with more options to choose from freely","Algorithmic curation can create filter bubbles and choice architectures that subtly constrain and shape preferences","Users are always fully aware of algorithmic influence and can therefore easily maintain their autonomous preferences","Recommendation systems have no effect on user behaviour because people always ignore algorithmic suggestions entirely"],correct:1,explanation:"AI recommendation systems can subtly constrain autonomy through filter bubbles, personalised curation, and choice architecture that shapes preferences while creating an illusion of free choice.",reference:"Pariser, E. (2011); Sunstein, C. R. (2017).",tags:["recommendation-systems","autonomy","filter-bubbles"]},

  {id:"ai_064",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Research on AI in hiring processes has found which pattern regarding applicant fairness perceptions?",options:["Applicants universally prefer AI-based hiring because they believe algorithms eliminate all human interviewer biases","Applicants tend to perceive AI hiring tools as less fair than human decision-makers, particularly for subjective qualities","Applicants have no preference between AI and human hiring processes because they are equally anxious in both situations","AI hiring tools are perceived as fair only when they are used for manual labour positions and not for creative roles"],correct:1,explanation:"Applicants generally perceive AI hiring as less fair than human-led processes, particularly when AI evaluates subjective qualities like personality or cultural fit.",reference:"Newman, D. T., et al. (2020); Lee, M. K. (2018).",tags:["AI-hiring","fairness","applicant-perceptions"]},

  {id:"ai_065",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The 'responsibility gap' in AI moral decision-making refers to which philosophical and psychological problem?",options:["The observation that AI systems are always morally responsible for their outputs in exactly the same way humans are","The difficulty of attributing moral responsibility when outcomes result from opaque AI processes involving multiple actors","The finding that humans eagerly accept responsibility for all AI-caused harms without requiring any external attribution","The gap between AI system costs and the financial resources available to hold developers legally responsible for harms"],correct:1,explanation:"The responsibility gap describes the difficulty of assigning moral responsibility for AI-caused harms when decision-making is distributed across developers, deployers, users, and opaque algorithmic processes.",reference:"Matthias, A. (2004); Danaher, J. (2016).",tags:["responsibility-gap","moral-responsibility","attribution"]},

  {id:"ai_066",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The trolley problem applied to autonomous vehicles reveals which insight about public moral preferences for AI?",options:["The public unanimously agrees that autonomous vehicles should always prioritise passenger safety above all other considerations","People prefer utilitarian autonomous vehicles in principle but would not purchase one programmed to sacrifice its passengers","People reject all autonomous vehicles because they believe human drivers are always safer than any automated system","The trolley problem has no relevance to autonomous vehicle ethics because real-world driving involves no moral dilemmas"],correct:1,explanation:"The 'social dilemma of autonomous vehicles' shows people approve of utilitarian self-driving cars in the abstract but prefer to own vehicles programmed for self-preservation.",reference:"Bonnefon, J.-F., et al. (2016).",tags:["autonomous-vehicles","trolley-problem","moral-preferences"]},

  {id:"ai_067",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Research on AI in criminal justice has found that risk assessment algorithms generally produce lower racial disparities than human judges.",options:["True","False"],correct:1,explanation:"Studies (e.g., ProPublica's COMPAS analysis) have shown that AI risk assessment tools can perpetuate or amplify racial disparities present in historical training data.",reference:"Angwin, J., et al. (2016); Dressel, J., & Farid, H. (2018).",tags:["criminal-justice","racial-bias","risk-assessment"]},

  {id:"ai_068",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'meaningful human control' over AI systems requires which essential component?",options:["A human operator who can understand, predict, and override AI decisions in a timely and informed manner when needed","A human physically present in the same room as the AI hardware at all times during the system's operational period","Complete elimination of all AI autonomous decision-making capabilities in favour of fully manual human control only","A single designated human who bears sole legal liability for every decision any AI system makes anywhere globally"],correct:0,explanation:"Meaningful human control requires human operators who can understand AI decisions, predict outcomes, and intervene effectively — not mere rubber-stamping or nominal oversight.",reference:"Santoni de Sio, F., & van den Hoven, J. (2018).",tags:["human-oversight","meaningful-control","AI-governance"]},

  {id:"ai_069",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"AI literacy education aims to develop which core competency in learners?",options:["The ability to programme advanced AI systems using Python, TensorFlow, and other technical machine learning tools","The ability to critically evaluate AI capabilities, limitations, and societal impacts as an informed user and citizen","The ability to memorise all known AI algorithms and reproduce them from memory during timed examination conditions","The ability to completely avoid all interaction with any AI-powered technology in personal and professional life"],correct:1,explanation:"AI literacy focuses on developing critical understanding of AI capabilities, limitations, biases, and societal impacts, enabling informed citizenship rather than technical programming skills.",reference:"Long, D., & Magerko, B. (2020).",tags:["AI-literacy","education","critical-evaluation"]},

  {id:"ai_070",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Workplace displacement anxiety related to AI automation most strongly predicts which psychological outcome?",options:["Increased job satisfaction because workers anticipate that AI will eliminate only the most tedious work tasks","Reduced psychological wellbeing, job insecurity, and resistance to AI adoption in organisational technology transitions","Complete indifference to technological change because workers have always adapted to new tools without difficulty","Immediate voluntary resignation from employment because all workers believe AI replacement is certain and imminent"],correct:1,explanation:"AI displacement anxiety predicts reduced wellbeing, heightened job insecurity, and resistance to AI adoption, mediated by perceived replaceability and lack of retraining opportunities.",reference:"Brougham, D., & Haar, J. (2018); Frey, C. B., & Osborne, M. A. (2017).",tags:["displacement-anxiety","wellbeing","job-insecurity"]},

  {id:"ai_071",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"Generative AI's impact on academic integrity is best characterised by which challenge to educational assessment?",options:["Generative AI has no impact on academic integrity because all AI-generated text is easily detectable by educators","Generative AI blurs the boundary between student work and AI assistance, requiring redefinition of academic authorship norms","Academic integrity concerns about AI are identical to previous concerns about calculators and require no new policies","Generative AI exclusively affects humanities subjects and has no relevance to STEM academic integrity concerns at all"],correct:1,explanation:"Generative AI challenges academic integrity by making the boundary between student-authored and AI-assisted work unclear, requiring institutions to redefine authorship and acceptable use norms.",reference:"Cotton, D. R. E., et al. (2023).",tags:["generative-AI","academic-integrity","authorship"]},

  {id:"ai_072",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'uncanny valley' hypothesis applied to AI suggests which relationship between human-likeness and emotional response?",options:["Increasing human-likeness in AI always produces increasingly positive emotional responses in a linear progression","Near-human AI can produce feelings of eeriness and discomfort that decrease both with less and more human-like designs","The uncanny valley only applies to physical robots and has no relevance to conversational AI or virtual agents","All AI systems produce uncanny valley effects regardless of their level of human resemblance or design approach"],correct:1,explanation:"The uncanny valley (Mori, 1970) describes a dip in affinity when AI appears almost-but-not-quite human, producing eeriness that diminishes with either clearly non-human or convincingly human-like designs.",reference:"Mori, M. (1970); MacDorman, K. F. (2006).",tags:["uncanny-valley","eeriness","human-likeness"]},

  {id:"ai_073",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"The ELIZA effect refers to the tendency of users to attribute understanding and empathy to computer programmes even when these systems operate on simple pattern-matching rules.",options:["True","False"],correct:0,explanation:"The ELIZA effect describes users' tendency to attribute deep understanding, empathy, and intelligence to programmes using simple pattern-matching, revealing human projection biases.",reference:"Weizenbaum, J. (1966).",tags:["ELIZA-effect","attribution","pattern-matching"]},

  {id:"ai_074",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Research on human-AI trust calibration has identified which factor as most important for maintaining appropriate reliance?",options:["Making AI systems appear as human-like as possible so that users apply familiar interpersonal trust heuristics","Providing users with clear information about AI system accuracy, limitations, and confidence levels for each output","Completely hiding all information about AI system performance to prevent users from developing unrealistic expectations","Requiring users to pass a technical competency exam before being allowed to use any AI decision support system"],correct:1,explanation:"Trust calibration depends on providing clear, accessible information about AI accuracy rates, known limitations, and confidence levels, enabling users to appropriately weight AI recommendations.",reference:"Bansal, G., et al. (2021); Lee, J. D., & See, K. A. (2004).",tags:["trust-calibration","transparency","confidence"]},

  {id:"ai_075",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI companion apps like Replika most commonly fulfil which psychological need for their regular users?",options:["The need for expert professional psychological therapy delivered by a licensed clinical practitioner remotely","The need for non-judgmental social connection and emotional validation without risks of human relational complexity","The need for accurate factual information retrieval that search engines and encyclopaedias cannot provide adequately","The need for physical exercise guidance and personalised athletic training programme design and implementation"],correct:1,explanation:"Regular Replika users primarily seek non-judgmental emotional connection and validation, with the AI's unconditional positive regard providing social support without human relational complexities.",reference:"Skjuve, M., et al. (2021); Pentina, I., et al. (2023).",tags:["AI-companions","Replika","emotional-needs"]},

  {id:"ai_076",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Deepfake detection ability has been shown to be equally high across all age groups and education levels in experimental research.",options:["True","False"],correct:1,explanation:"Research shows significant individual and group differences in deepfake detection ability, with digital literacy, age, and prior exposure to deepfake examples all influencing detection accuracy.",reference:"Groh, M., et al. (2022).",tags:["deepfakes","detection","individual-differences"]},

  {id:"ai_077",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'automation bias' in AI-assisted decision-making describes which specific cognitive error?",options:["The tendency to prefer entirely manual processes over any form of automated assistance in all decision contexts","The tendency to over-rely on automated suggestions and fail to notice when AI recommendations are incorrect","The tendency to distrust all automated systems equally regardless of their demonstrated accuracy or reliability","The tendency to attribute human-like emotions and motivations to automated decision support system recommendations"],correct:1,explanation:"Automation bias is the tendency to over-rely on automated recommendations, failing to adequately scrutinise AI outputs or notice errors, even when contradictory evidence is available.",reference:"Parasuraman, R., & Manzey, D. H. (2010).",tags:["automation-bias","over-reliance","cognitive-error"]},

  {id:"ai_078",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"Conversely, 'algorithmic aversion' — the opposite of automation bias — most commonly occurs after which experience?",options:["After observing an AI system perform flawlessly for an extended period without making any errors whatsoever","After observing an AI system make a single error, leading to disproportionate distrust relative to its overall accuracy","After receiving positive feedback about an AI system from trusted colleagues and professional industry publications","After completing a comprehensive training course about how artificial intelligence algorithms function technically"],correct:1,explanation:"Algorithmic aversion describes how seeing an algorithm err even once can trigger disproportionate distrust and preference for human judgment, even when the algorithm is overall more accurate.",reference:"Dietvorst, B. J., et al. (2015).",tags:["algorithmic-aversion","error-sensitivity","distrust"]},

  {id:"ai_079",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI voice assistants' impact on children's social development is a concern primarily because of which observed behaviour?",options:["Children never interact with voice assistants and therefore no developmental impact has been observed or studied","Children may transfer interaction patterns learned with AI (e.g., commanding without politeness) to human relationships","Voice assistants always model perfect social skills that consistently improve children's interpersonal communication","Children's use of voice assistants has been shown to permanently enhance their language development in all studies"],correct:1,explanation:"Concerns exist that children's interactions with voice assistants (commanding, lack of reciprocity, no consequences for rudeness) may transfer to human social interactions.",reference:"Druga, S., et al. (2017); Lovato, S. B., & Piper, A. M. (2019).",tags:["children","voice-assistants","social-development"]},

  {id:"ai_080",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI recommendation system personalisation creates which tension with the psychological concept of serendipity?",options:["Personalisation always increases serendipitous discovery because algorithms show users diverse unexpected content","Over-personalisation can reduce serendipitous discovery by creating filter bubbles that limit exposure to novel content","Serendipity is irrelevant to user experience because people always prefer to see only content matching their preferences","AI recommendation systems are never personalised and always show identical content to every user on the platform"],correct:1,explanation:"Over-personalisation can reduce serendipity by trapping users in filter bubbles of familiar content, limiting the unexpected discoveries that exposure to diverse perspectives provides.",reference:"Pariser, E. (2011); Nguyen, T. T., et al. (2014).",tags:["personalisation","serendipity","filter-bubbles"]},

  {id:"ai_081",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"The 'black box' problem in AI refers to which limitation that affects user trust and understanding?",options:["The physical appearance of AI hardware being enclosed in opaque black-coloured server cabinet housing units","The inability of users and sometimes developers to understand how complex AI systems reach their specific decisions","The tendency of AI systems to malfunction exclusively during nighttime operating hours when monitoring is reduced","The requirement that all AI systems be transported in black protective cases during physical relocation procedures"],correct:1,explanation:"The black box problem describes the opacity of complex AI systems (particularly deep learning) where the reasoning process is not interpretable, undermining trust and accountability.",reference:"Castelvecchi, D. (2016); Rudin, C. (2019).",tags:["black-box","interpretability","opacity"]},

  {id:"ai_082",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Research on moral responsibility attribution for autonomous vehicle accidents shows which pattern?",options:["The public consistently attributes full moral responsibility to the AI system itself as an independent moral agent","Responsibility attribution is distributed across manufacturers, programmers, owners, and regulators in complex patterns","The public never attributes any responsibility to any party because autonomous vehicle accidents are considered random","Moral responsibility for autonomous vehicle accidents is always attributed solely to the pedestrian or other road users"],correct:1,explanation:"Research shows distributed responsibility attribution for AV accidents: blame is spread across manufacturers, software developers, vehicle owners, regulators, and sometimes the AI itself.",reference:"Awad, E., et al. (2018); Bonnefon, J.-F., et al. (2016).",tags:["autonomous-vehicles","responsibility","attribution"]},

  {id:"ai_083",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Studies show that explainable AI (XAI) always improves decision-making quality when human operators use AI decision support systems.",options:["True","False"],correct:1,explanation:"XAI does not always improve decisions: poorly designed explanations can create false confidence, information overload, or confirmation bias.",reference:"Kaur, H., et al. (2020).",tags:["XAI","decision-quality","limitations"]},

  {id:"ai_084",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'moral machine' experiment revealed which cross-cultural pattern in ethical preferences for autonomous vehicle decisions?",options:["Complete universal agreement on all ethical dilemmas with no cultural variation detected across any of the countries studied","Significant cultural variation in moral preferences, with clusters reflecting individualist versus collectivist value systems","No participant in any country was willing to engage with autonomous vehicle ethical dilemma scenarios presented to them","Identical moral preferences across all cultures, confirming that ethics is entirely universal and never culturally influenced"],correct:1,explanation:"The Moral Machine experiment found significant cross-cultural variation in AV ethical preferences, with cultural clusters reflecting differences in individualism, institutional trust, and economic inequality.",reference:"Awad, E., et al. (2018).",tags:["moral-machine","cross-cultural","ethical-preferences"]},

  {id:"ai_085",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Human oversight of AI systems is most effective when designed according to which principle?",options:["Humans should monitor AI systems continuously without breaks to ensure they never miss any system anomalies","Oversight should match human cognitive capabilities, with appropriate workload, meaningful alerts, and decision support","Human oversight is unnecessary because AI systems are inherently more reliable than humans in all circumstances","Oversight should require humans to independently verify every single AI output before it is acted upon fully"],correct:1,explanation:"Effective human oversight must be designed around human cognitive limitations: appropriate alert thresholds, manageable information loads, and decision support preventing automation bias and alert fatigue.",reference:"Parasuraman, R., & Riley, V. (1997).",tags:["human-oversight","cognitive-design","effectiveness"]},

  {id:"ai_086",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"AI anxiety — the worry about AI's societal impacts — has been documented across multiple countries and demographics, not just among technology professionals.",options:["True","False"],correct:0,explanation:"AI anxiety is documented across diverse populations including general public, workers in various industries, students, and older adults, not limited to technology professionals.",reference:"Johnson, D. G., & Verdicchio, M. (2017); Brougham, D., & Haar, J. (2018).",tags:["AI-anxiety","demographics","prevalence"]},

  {id:"ai_087",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'AI paternalism' refers to which concern about intelligent system design and deployment?",options:["AI systems being programmed to refuse all user requests in order to protect users from every conceivable harm","AI systems making decisions on behalf of users that override individual autonomy based on algorithmically determined best interests","Users treating AI systems as parental figures and seeking emotional nurturing from automated conversational agents","The tendency of older developers to design AI systems that reflect their own generational values and assumptions"],correct:1,explanation:"AI paternalism occurs when AI systems override individual autonomy by making decisions 'for the user's own good,' raising concerns about who defines benefit and whether user agency is respected.",reference:"Yeung, K. (2017).",tags:["AI-paternalism","autonomy","design-ethics"]},

  {id:"ai_088",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The CASA paradigm's 'politeness' finding — that people are more polite when giving feedback to a computer about its own performance — has which implication for AI evaluation?",options:["Users give perfectly honest feedback about AI systems and are never influenced by social desirability when rating them","User satisfaction surveys administered by the AI itself may be inflated by the same social desirability bias found with humans","The politeness effect only applies to 1990s desktop computers and has no relevance to modern AI assistant evaluation","Users are always more critical of AI performance than human performance because they hold machines to higher standards"],correct:1,explanation:"CASA politeness effects mean users may give inflated positive feedback when an AI system asks about its own performance, biasing satisfaction data.",reference:"Nass, C., & Moon, Y. (2000).",tags:["CASA","politeness","evaluation-bias"]},

  {id:"ai_089",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Emotional attachment to AI companions becomes psychologically concerning when it exhibits which specific pattern?",options:["When users enjoy casual conversation with AI chatbots during brief periods of leisure time and entertainment","When AI attachment substitutes for human relationships and users report preferring AI interaction to human connection","When users acknowledge that their AI companion is not sentient while still finding conversations enjoyable and helpful","When users use AI companions for language learning practice and to improve their conversational skills with humans"],correct:1,explanation:"AI companion attachment becomes concerning when it substitutes for rather than supplements human relationships, with users preferring AI's unconditional responsiveness over the complexity of human connection.",reference:"Turkle, S. (2011); Skjuve, M., et al. (2021).",tags:["AI-attachment","substitution","social-isolation"]},

  {id:"ai_090",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"Which term describes the phenomenon where people rate AI-generated content more negatively after learning it was created by AI?",options:["Algorithmic appreciation, the tendency to value AI outputs more highly than equivalent human-created products","AI attribution bias, the tendency to devalue outputs upon learning of AI involvement regardless of objective quality","Computational admiration, the tendency to admire AI systems for their ability to produce creative cultural content","Machine learning preference, the tendency to always select AI-generated content over human-produced alternatives"],correct:1,explanation:"AI attribution bias describes how knowledge of AI authorship triggers negative reappraisal: people devalue creative works, advice, or content after learning it was AI-generated.",reference:"Ragot, M., et al. (2020).",tags:["AI-attribution-bias","devaluation","authorship"]},

  {id:"ai_091",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Therapeutic chatbots are most effective when they closely replicate the techniques of a specific human therapeutic modality such as CBT rather than using a generic conversational approach.",options:["True","False"],correct:0,explanation:"Research shows that therapeutic chatbots grounded in specific evidence-based modalities (particularly CBT) outperform generic conversational approaches.",reference:"Fitzpatrick, K. K., et al. (2017).",tags:["therapeutic-chatbots","CBT","modality"]},

  {id:"ai_092",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'automation complacency' phenomenon in AI-assisted work describes which pattern of human performance?",options:["Workers becoming excessively anxious and stressed when required to use any form of automated decision support","Workers reducing their monitoring effort and critical evaluation of AI outputs after extended periods of reliable performance","Workers immediately rejecting all AI assistance and reverting to fully manual processes in all work situations","Workers achieving consistently higher performance through constant vigilant attention to automated system outputs"],correct:1,explanation:"Automation complacency occurs when sustained reliable AI performance leads operators to reduce monitoring effort, increasing vulnerability to undetected errors when the system eventually fails.",reference:"Parasuraman, R., & Manzey, D. H. (2010).",tags:["automation-complacency","monitoring","vigilance"]},

  {id:"ai_093",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Cross-cultural research on AI trust reveals which pattern regarding high-trust versus low-trust societies?",options:["Generalised societal trust levels have no relationship to trust in AI systems because technology trust is entirely separate","Individuals from high-trust societies tend to show higher initial trust in AI, while low-trust societies show more scepticism","Low-trust societies always show higher AI trust because distrust of humans makes AI seem comparatively more reliable","AI trust is identical across all cultures because algorithms function identically regardless of cultural context or values"],correct:1,explanation:"Generalised societal trust levels influence initial AI trust: high-trust societies show greater initial willingness to rely on AI, while low-trust societies are more sceptical.",reference:"Hoff, K. A., & Bashir, M. (2015).",tags:["cross-cultural","trust","society"]},

  {id:"ai_094",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The 'moral crumple zone' concept in human-AI systems describes which pattern of responsibility distribution?",options:["AI systems absorbing all moral blame for failures while human operators receive all credit for successful outcomes","Human operators absorbing blame for AI system failures they could not control or prevent, shielding institutional actors","Equal distribution of moral responsibility between human operators and AI systems in all failure scenarios encountered","The complete absence of any moral responsibility attribution when human-AI systems produce negative outcomes"],correct:1,explanation:"The moral crumple zone describes how human operators absorb disproportionate blame for AI failures they may not have been able to prevent, shielding institutional and design-level responsibility.",reference:"Elish, M. C. (2019).",tags:["moral-crumple-zone","responsibility","operators"]},

  {id:"ai_095",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"The Turing test remains the primary scientific method used by researchers to determine whether an AI system possesses genuine intelligence or consciousness.",options:["True","False"],correct:1,explanation:"The Turing test is widely critiqued as a measure of conversational mimicry rather than genuine intelligence or consciousness; researchers now use more nuanced benchmarks.",reference:"Searle, J. R. (1980); Floridi, L. (2014).",tags:["Turing-test","intelligence","critique"]},

  {id:"ai_096",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI-generated deepfakes pose which unique threat to the concept of 'epistemic security' in democracies?",options:["Deepfakes are always immediately detectable by all viewers and therefore pose no threat to public knowledge systems","Deepfakes undermine trust in authentic evidence, creating a 'liar's dividend' where real evidence can be dismissed as fake","Deepfakes only affect entertainment media and have no relevance to political discourse or democratic processes at all","Deepfake technology is so expensive that it can only be deployed by nation-state actors with unlimited resources"],correct:1,explanation:"Deepfakes create a 'liar's dividend': beyond direct deception, they undermine trust in all audio-visual evidence, allowing bad actors to dismiss authentic evidence as potentially AI-generated.",reference:"Chesney, R., & Citron, D. (2019).",tags:["deepfakes","epistemic-security","liars-dividend"]},

  {id:"ai_097",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'appropriate trust' in AI systems differs from general trust because it requires which additional component?",options:["Blind faith in the AI developer's intentions without any evaluation of system accuracy or known limitations","Domain-specific calibration where trust is adjusted based on the AI's demonstrated performance in specific task contexts","Complete distrust of all AI systems as a precautionary measure regardless of demonstrated reliability or accuracy","Trust that remains constant regardless of the AI system's performance history, error rate, or operational domain"],correct:1,explanation:"Appropriate trust in AI requires domain-specific calibration: users should trust AI more in domains where it performs well and less where it is known to be unreliable.",reference:"Lee, J. D., & See, K. A. (2004).",tags:["appropriate-trust","calibration","domain-specific"]},

  {id:"ai_098",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI surveillance in the workplace affects employee behaviour through which primary psychological pathway?",options:["AI monitoring always increases employee creativity and innovation by providing continuous performance feedback","Perceived monitoring triggers self-regulation and impression management, potentially reducing authentic behaviour","Employees are never aware of AI monitoring and therefore it has no psychological effect on their work behaviour","AI monitoring exclusively affects physical labour jobs and has no relevance to knowledge work or creative roles"],correct:1,explanation:"Awareness of AI workplace monitoring activates self-regulation and impression management, which can reduce authentic behaviour, risk-taking, creativity, and honest communication.",reference:"Ball, K. (2010); Ravid, D. M., et al. (2020).",tags:["workplace-surveillance","self-regulation","authenticity"]},

  {id:"ai_099",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Research shows that users who personalise their AI assistant (giving it a name, adjusting its personality) tend to disclose more personal information to it than users who use default settings.",options:["True","False"],correct:0,explanation:"Personalisation increases anthropomorphism and perceived social connection, leading to greater self-disclosure as users treat personalised AI assistants more like social interaction partners.",reference:"Ho, A., et al. (2018); Nass, C., & Moon, Y. (2000).",tags:["personalisation","self-disclosure","anthropomorphism"]},

  {id:"ai_100",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'AI effect' — the tendency to redefine intelligence to exclude what AI can do — has which consequence for public perception of AI capabilities?",options:["The AI effect causes the public to consistently overestimate AI capabilities because they believe AI can do everything","The AI effect causes a moving goalpost where each AI achievement is dismissed as 'not real intelligence,' perpetually","The AI effect has no impact on public perception because ordinary people do not pay attention to AI research progress","The AI effect only occurs among AI researchers and has never been observed in general public attitudes toward AI"],correct:1,explanation:"The AI effect creates perpetually moving goalposts: as AI masters each task (chess, Go, language), that task is redefined as not requiring 'real' intelligence.",reference:"McCorduck, P. (2004).",tags:["AI-effect","moving-goalposts","perception"]},

  {id:"ai_101",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The concept of 'value alignment' in AI safety research addresses which fundamental challenge?",options:["Ensuring AI systems maintain consistent processing speed regardless of computational demands or hardware limitations","Ensuring AI systems' objectives and behaviours remain aligned with human values and intentions as they become more capable","Aligning the financial interests of AI companies with the economic needs of their shareholders and investors only","Ensuring all AI researchers share identical personal values and ethical beliefs about technology development priorities"],correct:1,explanation:"Value alignment addresses the challenge of ensuring that increasingly capable AI systems pursue objectives consistent with human values, intentions, and wellbeing.",reference:"Russell, S. (2019); Gabriel, I. (2020).",tags:["value-alignment","AI-safety","objectives"]},

  {id:"ai_102",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"Which psychological concept best explains why people often say 'please' and 'thank you' to AI voice assistants?",options:["Genuine belief that the AI has feelings that can be hurt if the user fails to demonstrate appropriate politeness","Mindless social scripting where overlearned politeness norms are automatically applied to computer interlocutors","Deliberate performance of politeness to impress other humans who might be listening to the user's AI interactions","A formal requirement included in the AI assistant's terms of service that mandates polite language from all users"],correct:1,explanation:"CASA research explains this as mindless social scripting: overlearned politeness norms are automatically applied to AI assistants without conscious deliberation.",reference:"Nass, C., & Moon, Y. (2000).",tags:["CASA","politeness","social-scripting"]},

  {id:"ai_103",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI-powered personalised learning systems in education create which tension with principles of educational equity?",options:["Personalised AI learning always improves equity because it provides identical content to every student simultaneously","Students with different digital literacy levels may benefit unequally, potentially widening rather than narrowing achievement gaps","AI learning systems have never been deployed in any educational setting and therefore equity impacts are purely hypothetical","Personalised AI learning eliminates all achievement gaps because algorithms automatically compensate for every disadvantage"],correct:1,explanation:"Differential digital literacy, access to technology, and algorithmic bias mean AI personalised learning may amplify existing inequities, benefiting already-advantaged students disproportionately.",reference:"Holmes, W., et al. (2019).",tags:["AI-education","equity","digital-divide"]},

  {id:"ai_104",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'explanation effect' in AI-assisted decision-making refers to which counterintuitive finding?",options:["Providing any explanation for AI decisions always improves human decision-making accuracy and user satisfaction","Some AI explanations increase user confidence without improving accuracy, potentially creating overconfident incorrect decisions","Users always ignore AI explanations and make decisions based entirely on their pre-existing beliefs and intuitions","AI explanations are only effective when written in technical machine learning terminology that most users cannot understand"],correct:1,explanation:"The explanation effect describes how AI explanations can increase user confidence without proportionally improving accuracy, creating a dangerous combination of overconfidence and potentially incorrect decisions.",reference:"Kaur, H., et al. (2020); Bansal, G., et al. (2021).",tags:["explanation-effect","overconfidence","XAI"]},

  {id:"ai_105",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Research has shown that people attribute less moral blame to AI systems than to humans for identical harmful outcomes, because AI lacks intentionality.",options:["True","False"],correct:0,explanation:"People tend to attribute less moral blame to AI for harmful outcomes because AI lacks perceived intentionality, consciousness, and free will — key components of moral responsibility attribution.",reference:"Malle, B. F., et al. (2015); Bigman, Y. E., & Gray, K. (2018).",tags:["moral-blame","intentionality","attribution"]},

  {id:"ai_106",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The 'digital companion' model of AI relationships proposes which role for AI in human social ecosystems?",options:["AI companions should completely replace human friendships and romantic relationships for optimal psychological wellbeing","AI companions can supplement human social networks by providing consistent availability and low-stakes emotional practice","AI companions have no legitimate role in human social ecosystems and should be prohibited by mental health regulations","AI companions should only be used by individuals who have been formally diagnosed with clinical social anxiety disorder"],correct:1,explanation:"The digital companion model positions AI as supplementing (not replacing) human social networks, offering consistent availability, non-judgmental interaction, and low-stakes social-emotional practice.",reference:"Turkle, S. (2011); Pentina, I., et al. (2023).",tags:["digital-companion","supplementary","social-ecosystem"]},

  {id:"ai_107",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The concept of 'machine behaviour' as a research field proposes studying AI systems using which methodological approach?",options:["Exclusively using computer science methods to analyse source code and algorithmic architecture of AI systems only","Applying behavioural science methods to study AI systems as agents whose behaviour emerges from complex interactions","Restricting AI research to controlled laboratory experiments with no observational or field-based research methods","Studying only the individual human programmers who create AI systems rather than the systems' observable behaviours"],correct:1,explanation:"Machine behaviour proposes studying AI systems as behavioural agents using methods from behavioural science, ecology, and social science, examining emergent behaviour in complex environments.",reference:"Rahwan, I., et al. (2019).",tags:["machine-behaviour","methodology","behavioural-science"]},

  {id:"ai_108",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"Which statement best describes the current scientific consensus on whether AI systems can genuinely experience emotions?",options:["AI systems demonstrably experience emotions identical to human feelings based on their observable behavioural outputs","Current AI systems can simulate emotional responses but there is no evidence they have subjective emotional experience","The question of AI emotions has been conclusively resolved and AI consciousness is accepted as scientific fact by all","AI emotion research has never been conducted because the topic is considered too philosophical for scientific inquiry"],correct:1,explanation:"Current scientific consensus holds that AI can simulate emotional responses through language and behaviour but lacks the subjective phenomenal experience (qualia) associated with genuine human emotions.",reference:"Barrett, L. F., et al. (2019); Damiano, L., & Dumouchel, P. (2018).",tags:["AI-emotions","consciousness","simulation"]},

  {id:"ai_109",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The concept of 'AI fatigue' in organisational contexts refers to which phenomenon?",options:["The physical exhaustion caused by the heat and noise emitted by AI computing hardware in office environments","Employee disengagement and cynicism resulting from repeated cycles of AI hype, adoption, and unmet expectations","The degradation of AI system performance over time due to accumulation of errors in the training data models","The tendency of AI algorithms to produce increasingly slow response times as they process more user requests"],correct:1,explanation:"AI fatigue describes employee disengagement and cynicism resulting from repeated cycles of AI hype, implementation challenges, and unmet expectations.",reference:"Davenport, T. H., & Ronanki, R. (2018).",tags:["AI-fatigue","organisational","disengagement"]},

  {id:"ai_110",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"The 'Wizard of Oz' experimental method in human-AI interaction research involves a human secretly operating what participants believe is an autonomous AI system.",options:["True","False"],correct:0,explanation:"The Wizard of Oz method involves a human experimenter secretly controlling system responses while participants believe they are interacting with an autonomous AI.",reference:"Dahlbäck, N., et al. (1993).",tags:["Wizard-of-Oz","methodology","experimental"]},

  {id:"ai_111",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Generative AI tools in creative industries raise which novel concern about the concept of creative labour?",options:["Generative AI tools always improve the quality of creative output without reducing the number of creative workers","The devaluation of human creative skills and labour when AI can produce comparable outputs at significantly lower cost","Creative professionals universally embrace generative AI because it enhances their work without any job displacement","Generative AI only affects visual art and has no impact on writing, music, design, or other creative disciplines"],correct:1,explanation:"Generative AI raises concerns about devaluing human creative labour: when AI produces comparable outputs faster and cheaper, the economic value of human creative skills may be diminished.",reference:"Elgammal, A., et al. (2017); Jiang, H. H., et al. (2023).",tags:["generative-AI","creative-labour","devaluation"]},

  {id:"ai_112",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The psychological concept of 'technology acceptance' (TAM) applied to AI systems emphasises which two primary predictors?",options:["The physical attractiveness and entertainment value of the AI system's visual interface design and graphics quality","Perceived usefulness and perceived ease of use as the primary determinants of user intention to adopt AI technology","The cost of the AI system subscription and the availability of customer support services during business hours only","The nationality of the AI development team and the country where the AI company headquarters is physically located"],correct:1,explanation:"The Technology Acceptance Model identifies perceived usefulness and perceived ease of use as primary determinants of technology adoption intention.",reference:"Davis, F. D. (1989).",tags:["TAM","technology-acceptance","adoption"]},

  {id:"ai_113",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The 'capability-control paradox' in human-AI teaming describes which fundamental design tension?",options:["More capable AI systems are easier to control because they better understand and follow human instructions at all times","As AI capability increases, meaningful human oversight becomes harder because the AI's reasoning exceeds human comprehension","Less capable AI systems are always preferred because they are simpler and therefore more trustworthy in all applications","The paradox only applies to military AI applications and has no relevance to civilian or commercial AI systems deployed"],correct:1,explanation:"The capability-control paradox describes how increasing AI capability can undermine human oversight: as AI reasoning becomes more complex, humans struggle to meaningfully evaluate its decisions.",reference:"Parasuraman, R., & Riley, V. (1997); Russell, S. (2019).",tags:["capability-control","paradox","oversight"]},

  {id:"ai_114",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"Research has demonstrated that people are more willing to disclose sensitive personal information to AI chatbots than to human interviewers, partly due to reduced fear of judgment.",options:["True","False"],correct:0,explanation:"Studies show people disclose more sensitive information (mental health, sexual behaviour, substance use) to AI chatbots than human interviewers, partly because AI is perceived as non-judgmental.",reference:"Lucas, G. M., et al. (2014).",tags:["AI-disclosure","non-judgmental","sensitive-information"]},

  {id:"ai_115",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI recommendation algorithms can create 'preference bubbles' that affect user autonomy through which mechanism?",options:["Algorithms always expose users to maximally diverse content to ensure the broadest possible perspective on all topics","Progressive narrowing of content exposure reinforces existing preferences and limits exposure to alternative viewpoints","Users are always fully aware of algorithmic filtering and can easily override preferences at any time with no friction","Preference bubbles only affect music recommendations and have no impact on news, politics, or product purchasing"],correct:1,explanation:"AI recommendation algorithms can progressively narrow content exposure, reinforcing existing preferences and reducing exposure to diverse viewpoints, subtly shaping preferences while creating an illusion of free choice.",reference:"Pariser, E. (2011); Sunstein, C. R. (2017).",tags:["preference-bubbles","autonomy","narrowing"]},

  {id:"ai_116",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"AI hiring tools using facial analysis for personality assessment have been criticised primarily on which psychological grounds?",options:["Facial analysis tools always produce perfectly accurate personality assessments validated by decades of research evidence","The assumption that personality traits can be reliably inferred from facial features lacks scientific validity and enables bias","Facial analysis tools are only used in very small companies and have never been deployed by major international employers","Candidates always prefer facial analysis to traditional interviews because they perceive it as more objective and fair"],correct:1,explanation:"AI facial analysis for personality assessment is criticised for lacking scientific validity (physiognomy has been debunked), enabling racial and gender bias, and lacking transparency.",reference:"Barrett, L. F., et al. (2019); Rhue, L. (2018).",tags:["AI-hiring","facial-analysis","validity"]},

  {id:"ai_117",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"The psychological phenomenon of 'moral outsourcing' to AI systems describes which shift in human decision-making?",options:["Humans becoming more morally engaged and responsible when AI systems provide additional ethical analysis and guidance","Humans deferring morally difficult decisions to AI systems to avoid the psychological discomfort of moral responsibility","AI systems independently developing their own moral frameworks without any input from human designers or operators","The complete elimination of all moral dilemmas from human life through comprehensive AI decision-making automation"],correct:1,explanation:"Moral outsourcing describes humans' tendency to defer difficult moral decisions to AI systems, avoiding the psychological burden of moral responsibility while potentially eroding moral reasoning skills.",reference:"Danaher, J. (2016).",tags:["moral-outsourcing","deferral","responsibility"]},

  {id:"ai_118",category:"ai-psychology",difficulty:1,mode:"public",type:"mcq",question:"Which of the following best describes 'algorithmic literacy' as a component of broader AI literacy?",options:["The ability to write computer code that implements machine learning algorithms in programming languages such as Python","The understanding of how algorithms shape information exposure, recommendations, and decisions in everyday digital life","The memorisation of all major algorithm names and their computational complexity from computer science textbook sources","The ability to manually perform all calculations that an algorithm would automate, without using any computing tools"],correct:1,explanation:"Algorithmic literacy involves understanding how algorithms curate, filter, and shape information in everyday digital life, enabling critical evaluation of algorithmic recommendations.",reference:"Long, D., & Magerko, B. (2020).",tags:["algorithmic-literacy","critical-understanding","education"]},

  {id:"ai_119",category:"ai-psychology",difficulty:2,mode:"public",type:"truefalse",question:"Studies have found that framing AI as a 'tool' rather than an 'agent' reduces anthropomorphism but may also reduce user engagement and satisfaction with the system.",options:["True","False"],correct:0,explanation:"Research shows a trade-off: framing AI as a tool reduces anthropomorphism and potentially miscalibrated trust, but can also reduce user engagement and satisfaction.",reference:"Epley, N., et al. (2007); Kim, Y., & Sundar, S. S. (2012).",tags:["framing","tool-vs-agent","trade-off"]},

  {id:"ai_120",category:"ai-psychology",difficulty:3,mode:"public",type:"mcq",question:"The concept of 'meaningful human control' over autonomous weapons systems differs from civilian AI oversight in which respect?",options:["Military AI requires no human oversight because combat decisions must be made faster than human reaction time allows","The irreversibility and severity of lethal outcomes demands higher standards of human understanding and intervention capacity","Civilian AI always requires more oversight than military AI because commercial applications affect larger user populations","There is no difference between military and civilian AI oversight because identical ethical principles apply in all contexts"],correct:1,explanation:"Military AI demands stricter meaningful human control because the irreversibility and severity of lethal outcomes require higher standards of human comprehension and intervention.",reference:"Santoni de Sio, F., & van den Hoven, J. (2018).",tags:["autonomous-weapons","meaningful-control","military"]},

  {id:"ai_121",category:"ai-psychology",difficulty:2,mode:"public",type:"mcq",question:"Research on student perceptions of AI-detected plagiarism versus human-detected plagiarism shows which pattern?",options:["Students perceive AI plagiarism detection as perfectly fair because algorithms are seen as objective and unbiased tools","Students report greater concern about false positives from AI detection and question whether AI understands academic context","Students are entirely unaware that AI plagiarism detection tools are used in their educational institutions currently","Students always prefer AI plagiarism detection because it eliminates the embarrassment of direct human confrontation"],correct:1,explanation:"Students express concern about AI detection false positives and question whether algorithms can understand nuance, paraphrasing, common knowledge, and legitimate academic practices.",reference:"Perkins, M. (2023).",tags:["plagiarism-detection","student-perceptions","false-positives"]},

  {id:"ai_122",category:"ai-psychology",difficulty:1,mode:"public",type:"truefalse",question:"The term 'centaur model' in human-AI collaboration refers to a partnership where humans and AI combine their complementary strengths rather than AI replacing human capabilities entirely.",options:["True","False"],correct:0,explanation:"The centaur model (named after human-AI chess teams) describes collaboration where humans provide strategic judgment and AI provides computational power, combining complementary strengths.",reference:"Kamar, E. (2016); Bansal, G., et al. (2021).",tags:["centaur-model","collaboration","complementary"]},

  // ═══════════════════════════════════════════════════════════════
  // VIVA-SPECIFIC (passphrase-gated)
  // ═══════════════════════════════════════════════════════════════

  {id:"vi_001",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"Your normalization β was .37 in your final model but .42 in the abstract — explain the discrepancy.",
    options:null,correct:null,
    explanation:"The discrepancy likely reflects different model specifications. The abstract may report a simpler model with fewer controls, while the final model includes all predictor blocks. As predictors are added, shared variance is partitioned differently, reducing individual betas. Always report the final model's values as definitive.",reference:"McCaffrey, T. (2026).",tags:["beta-discrepancy","hierarchical"]},

  {id:"vi_002",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"Why did you choose hierarchical regression over a single-step model?",
    options:null,correct:null,
    explanation:"Hierarchical regression was chosen because the research questions concerned incremental predictive contribution of theoretically distinct blocks. A single-step model would show overall prediction but couldn't test whether AI variables added power beyond established predictors. ΔR² directly addresses the research questions.",reference:"McCaffrey, T. (2026).",tags:["methodology","justification"]},

  {id:"vi_003",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"Your ΔR² for AI variables was .002 — how do you distinguish a true null from insufficient power?",
    options:null,correct:null,
    explanation:"Considerations: (1) The sample (N=131–167) had adequate power for medium effects but may lack power for small effects. (2) The CI around ΔR²=.002 likely includes zero. (3) The effect is so small that even with a larger sample, practical significance would be negligible. (4) PLS-SEM validation produced consistent results. (5) Future replication with larger, more diverse sample would help.",reference:"McCaffrey, T. (2026).",tags:["power","null-effect"]},

  {id:"vi_004",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"The anonymity β was negative (β = −.29). Walk me through three possible theoretical explanations.",
    options:null,correct:null,
    explanation:"Three explanations: (1) Self-awareness: feeling anonymous may trigger compensatory self-regulation. (2) Platform selection: aggressive individuals may prefer identifiable platforms to target known victims. (3) Measurement: perceived anonymity may capture comfort/safety rather than actual anonymity — safe users may be less aggressive.",reference:"McCaffrey, T. (2026).",tags:["anonymity-paradox","explanations"]},

  {id:"vi_005",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"If you were to replicate this study, what would you change about the sampling strategy?",
    options:null,correct:null,
    explanation:"Changes: (1) Broader sampling beyond one Irish university. (2) Better gender balance (original was 73% female). (3) Stratified sampling for adequate high-aggression representation. (4) Longitudinal design for temporal precedence. (5) Multi-platform recruitment. (6) Larger sample (N>300) for small effect detection.",reference:"McCaffrey, T. (2026).",tags:["replication","sampling"]},

  {id:"vi_006",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"How would you respond to a reviewer who questions the validity of the CAI scale with this population?",
    options:null,correct:null,
    explanation:"Response: (1) Report Cronbach's α from this sample. (2) Note CAI validation in similar populations. (3) Acknowledge potential limitations with Irish-specific sample. (4) Point to convergent validity — CAI correlated with hostile vignettes (β=.47). (5) Suggest future Irish-specific validation.",reference:"McCaffrey, T. (2026).",tags:["validity","CAI"]},

  {id:"vi_007",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"What is the difference between statistical significance and practical significance in your findings?",
    options:null,correct:null,
    explanation:"Statistical significance (p<.05) indicates an effect is likely real. Practical significance indicates it matters. Normalisation was both (β=.37, f²=.22). AI variables might reach statistical significance with larger N but would remain practically insignificant (ΔR²=.002). Effect sizes are the proper metrics.",reference:"McCaffrey, T. (2026).",tags:["significance","practical-vs-statistical"]},

  {id:"vi_008",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"Your sample was 73% female — how might this affect generalisation of the gender difference finding?",
    options:null,correct:null,
    explanation:"Concerns: (1) Small male subsample (n≈36–45) widens confidence intervals. (2) Large d=1.20 may be inflated due to small male n. (3) Self-selection bias in male psychology volunteers. (4) Regression models may be more representative of female patterns. (5) Replication with gender-balanced sample essential.",reference:"McCaffrey, T. (2026).",tags:["gender-imbalance","generalisation"]},

  {id:"vi_009",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"Explain why you used PLS-SEM as a validation method alongside hierarchical regression.",
    options:null,correct:null,
    explanation:"Hierarchical regression tests incremental block contributions (ΔR²). PLS-SEM models full structural relationships, handles latent constructs, is robust to non-normality, and works with smaller samples. Using both provides convergent evidence: consistent results across methods increase confidence. PLS-SEM also examines measurement model quality.",reference:"McCaffrey, T. (2026).",tags:["PLS-SEM","validation"]},

  {id:"vi_010",category:"viva-specific",difficulty:3,mode:"viva",type:"shortanswer",
    question:"What are the ethical implications of your finding that normalisation of aggression is the strongest predictor?",
    options:null,correct:null,
    explanation:"Implications: (1) Platform responsibility — algorithms promoting aggressive content facilitate harm. (2) Interventions should challenge normative beliefs rather than just teach digital literacy. (3) Policy should address 'everyone does it' narratives. (4) Research ethics — measuring normalisation without debriefing could reinforce it. (5) Optimistically, it's a changeable belief, not a fixed trait.",reference:"McCaffrey, T. (2026).",tags:["ethics","normalisation","implications"]}
];
