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
