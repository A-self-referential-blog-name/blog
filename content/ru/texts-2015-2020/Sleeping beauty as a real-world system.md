---
title: "Sleeping beauty as a real-world system"
weight: 3
draft: true
---

Этот текст, изначально написанный в 2020, превратил в 2025 в статью (см. ниже) и неудачно пытался подать в журналы. Т.к. я ни с кем не смог его обсудить, просто выкладываю здесь. 

---

**Abstract**: The article proposes an explanation of why the answer to the Sleeping Beauty problem is 1/3, by considering Sleeping Beauty as a real-world system [^1] composed of parts. 

---

**1\. What we should do**

The Sleeping Beauty (henceforth SB) Problem: [^2]
<br style="line-height:0.5em;">
SB is participating in an experiment. On Sunday a coin is tossed, with a 50% chance of Heads (SB does not know the result). If it’s Heads, she is put to sleep and awakened on Monday, and that’s it. If it’s Tails, she is put to sleep, awakened on Monday, put to sleep again with no memory of the first awakening, and awakened again on Tuesday --- then it ends. You are SB, and you’ve been awakened. You don’t know the result of the coin toss, nor what day it is. What probability should be assigned to the event X = ‘the result was Heads’? 1/2, because on Sunday you would have assigned such a probability, and since you’ve received no new information, the probability shouldn’t have changed? Or 1/3, because if the experiment is repeated 1000 times, you will be awakened about 1500 times, and in roughly 500 of them, the correct answer to ‘what was the result?’ will be ‘Heads’? (Alternatively: When SB wakes up, she knows that either A = (Heads, Monday), or C = (Tails, Monday), or D = (Tails, Tuesday). Given that it’s Monday, the probability of Heads is 1/2; given that it was Tails, the probability of it being Monday is apparently 1/2; so P(A) = P(C) = P(D) = 1/3; P(X) = P(A) = 1/3.)

Let us try to show that it’s reasonable to speak of a ‘subjective’ probability of 1/3 rather than 1/2.
For that, we need: 
<br style="line-height:0.5em;">
**(a)** To find an event Y that she has learned about and for which P(X|Y) = 1/3.
<br style="line-height:0.5em;">
**(b)** A strange situation arises: on Sunday, SB must assign probability 1/2 to X, while understanding that on Monday, when she is awakened, she will assign it 1/3. According to (a), SB receives some new information, but she already knows on Sunday that she will receive it on Monday --- which means this strangeness remains and requires clarification. 

---

**2\. Where the problem is**

The intuition about Y is simple: SB has learned that she is in the experiment. 

Suppose that on Sunday the coin was equally likely to land Heads or Tails, and that today is equally likely to be Monday or Tuesday. Let X = ‘the result was Heads’, Z = ‘today is Monday’; suppose that X and Z are independent. Let A = (Heads, Monday), B = (Heads, Tuesday), C = (Tails, Monday), D = (Tails, Tuesday). P(X)=P(Z)=1/2; thus P(A) = P(B) = P(C) = P(D) = 1/4. 
<br style="line-height:0.5em;">
Let Y = (A or C or D). Then P(Y|X) = 1/2, P(Y|not-X) = 1, P(X|Y) = P(Y|X)P(X) / (P(Y|X)P(X) + P(Y|not-X)P(not-X)) = 1/3. 

The problem is that we need the chronology to be strictly as follows: 
<br style="line-height:0.5em;">
(I) SB believes that P(A)=...=P(D)=1/4; 
<br style="line-height:0.5em;">
(II) SB receives the information that Y, and computes P(X|Y)=1/3.
<br style="line-height:0.5em;">
It seems that, in our case, there is no moment in time corresponding to (I).

Dorr (2002) proposes an alternative experiment: SB is also awakened in case B = (Heads, Tuesday), but in this case, after some time t, her memory is restored. In this scenario, the (I–II) chronology is preserved: (I) holds until time t, (II) --- afterward. As t tends to 0, this situation resembles ours. 
It seems that my only suggestion compared to his reasoning is the idea of where the “intervening period when she is unsure about her temporal location while still having degree of belief 1/2 in HEADS” (at the end of his paper) might be found. 

---

**3\. The proposed ‘solution’** [^3]

Let us try to solve this by considering SB as a real-world system composed of parts, some of which acquire information only insofar as that information is relevant to the problem this agent [^4] deals with. 
Consider a hypothetical structure of SB’s ‘Probability computing subsystem’ (henceforth PCS), such that it produces the answer ‘1/3’. [^5] Let PCS consist, at least, of small agents designed to compute probabilities (which we will call p-agents), and of M --- the ‘manager of p-agents’. M has access to all information available to SB and, when it receives a request to compute a probability, delegates this task to the appropriate p-agent. 

When SB sends a request to M to compute the probability of some event, M: 
<br style="line-height:0.5em;">
1\. Finds a p-agent responsible for this task. If none exists, creates (or assigns) one. 
<br style="line-height:0.5em;">
2\. Identifies which factors are relevant for computing this probability. (Here I assume that determining the relevance of a factor to the task can be done without computing any probabilities; for example, in our case, M knows that the coin toss affects whether a certain event will occur on Tuesday; accordingly, in a possible-Tuesday situation, ‘day of the week’ becomes a relevant factor, whereas on Sunday, when M knows that it is not Tuesday, this factor is irrelevant to the task.)
<br style="line-height:0.5em;">
If there is a relevant factor that the p-agent does not know about, M ‘expands its probability space’ [^6] so that ‘the corresponding factor becomes measurable with respect to it’, and ‘recommends’ some prior probabilities for this factor. 
<br style="line-height:0.5em;">
3\. Informs the p-agent of all relevant information for the task. [^7]
<br style="line-height:0.5em;">
4\. Requests to compute the corresponding probability.

Here is the chronology of events in our case: 
<br style="line-height:0.5em;">
1\. On Sunday, at the moment of the coin toss, a p-agent W, which will be responsible for computing the probability P(X), is created (or assigned). The only thing this agent knows about the world --- its ‘probability space’ --- is that P(X) = P(not-X) = 1/2. 
<br style="line-height:0.5em;">
2\. SB wakes up during the experiment and sends a request to M to compute P(X). 
3\. Along with the request, M receives the information available to SB: (i) a new factor has emerged that should be reported to W, and (ii) Y is true. 
<br style="line-height:0.5em;">
4\. M ‘expands the probability space’ of W, i.e., adds the factor ‘current day of the week’, recommending the probability P(Z) = 1/2 based on the knowledge that, since SB does not know the current day of the week, it must be either Monday or Tuesday. [^8] Now, all W knows about the world is that there are four possible scenarios (labeled above as A, … , D), and P(A) = ... = P(D) = 1/4.
<br style="line-height:0.5em;">
5\. M informs W that Y. 
<br style="line-height:0.5em;">
6\. W computes P(X | Y) = 1/3.
<br style="line-height:0.5em;">
7\. Amnesia affects PCS (i.e., the information just received by PCS is not retained in its long-term memory after (Tails, Monday)).

---

**4\. On (b) question**

SB performs a ‘thought experiment’:
<br style="line-height:0.5em;">
“I know that if I am placed in situation S, then event Y will certainly occur, as a result of which I will compute P(X|Y) = 1/3. Since I am a consistent rational agent, I must already believe that P(X) = 1/3”.
<br style="line-height:0.5em;">
Here, S = ‘a situation identical to the one in which I will wake up on Monday’.
<br style="line-height:0.5em;">
We must understand what is wrong here.

Here’s an ‘intuition pump’:
<br style="line-height:0.5em;">
“There are 2 doors, behind each — an oracle, one truthful (always tells the truth), one false (always says ‘Tails’). I enter a random door. Suppose ‘I ask what was the result?’ and the answer is ‘Tails’. What probability should I assign to X? 1/3. So, I know that if I am placed in the room with the false oracle (situation S), he will certainly say ‘Tails’ (event Y) and I will compute P(X|Y) = 1/3. Since I am a consistent rational agent, I must also now believe P(X) = 1/3”. 

Doesn’t sound convincing. What’s the difference? In situation S1 = ‘identical to the one in which I will wake up on Monday’, just like in S2 = ‘I’m in a room with the false oracle with the corresponding backstory’, SB does not know whether she is in that situation. SB knows that S1 will be realized in the future, whereas S2 is just a ‘thought experiment’? That can’t matter.

Apparently, if in situation S M, according to its mechanism, treats the factor ‘is SB in situation S?’ as relevant for computing the probability of X, then this variation of type (b) situation should not seem contradictory.

---

**References**

Dorr, Cian. 2002. “Sleeping Beauty: In Defence of Elga.” Analysis 62 (4): 292–296.
<br style="line-height:0.5em;">
Elga, Adam. 2000. “Self-Locating Belief and the Sleeping Beauty Problem.” Analysis 60 (2): 143-147.
<br style="line-height:0.5em;">
Lewis, David. 2001. “Sleeping Beauty: Reply to Elga.” Analysis 61 (3): 171–176.
<br style="line-height:0.5em;">
Minsky, Marvin. 1986. “The Society of Mind.” New York: Simon & Schuster. 

[^1]: E.g., as a human. 

[^2]: See Elga (2000), Lewis (2001), and others.

[^3]: I’m not sure whether what follows makes sense --- perhaps because, when speaking of a rational (or Bayesian) agent, we are by definition required to assume that it is ‘simple’; or because my ‘solution’ just shifts the problem from SB to its subsystem; or for some other reason. 

[^4]: I use the term ‘agent’ here in Minsky’s sense (Minsky 1986), that is, as a subsystem or process that has its own ‘goals’.  

[^5]: One might justify it as follows: since the mechanism of PCS is determined by SB’s drive for rationality, we must define this mechanism so that the results produced by PCS are as consistent with reality as possible; in our case, this apparently means it should be defined so that the answer is 1/3 (because that’s the answer that correctly predicts the proportion of wins in a betting game).

[^6]: When someone applying mathematical probability theory in practice wants to introduce another random variable into their model, they replace the probability space Ω₁ (on which all previously considered probabilistic objects were defined) with a new space Ω₁ × Ω₂, where Ω₂ is the probability space on which this new random variable is defined. This --- or something like this --- is what happens here when M receives the request to compute the probability of X, knowing that SB has woken up during the experiment. The new random variable (or ‘factor’) being introduced into W’s (see below) probability space is the ‘current day of the week’. 

[^7]: (2) must precede (3), because otherwise the p-agent might simply fail to understand this new information. Thus, in the described scheme, (I) ‘psychologically precedes’ (II) from SB’s perspective. 

[^8]: Why does M ‘recommend’ the probability P(Z) = 1/2? Possibly, in such situations, M always recommends a uniform distribution, leaving the task of ‘tuning’ it to the p-agent. Evidently, in the case where SB wakes up 100 times on Monday and 1 time (if Tails) or 0 times (if Heads) on Tuesday, the random variable being introduced --- and for which a uniform distribution is ‘recommended’ --- is not the day of the week, but the ordinal number of the awakening during the experiment. (In our case, it's probably also more accurate to speak not of the day of the week, but of the ordinal number of the awakening.) 