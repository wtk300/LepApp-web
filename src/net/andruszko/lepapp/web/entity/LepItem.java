package net.andruszko.lepapp.web.entity;

import javax.jdo.annotations.Persistent;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import com.google.appengine.api.datastore.Text;

/**
 * 
 * @author wtk300
 *
 */
@Entity
public class LepItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; 
	
    private int position;
    
    
    @Persistent(defaultFetchGroup = "true") 
    private com.google.appengine.api.datastore.Text question;
    
    private Long subSectionId;
    
    private String answerA;

    private String answerB;

    private String answerC;

    private String answerD;

    private String answerE;

    private String correctAns;
////    
//    @ManyToOne(fetch=FetchType.LAZY)
//    private LepSession session;
//    
    public static final String SESSION_ID = "sessionId"; 
    		
    public Long sessionId;

	public Long getSubSectionId() {
		return subSectionId;
	}

	public void setSubSectionId(Long subSectionId) {
		this.subSectionId = subSectionId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public LepSession getSession() {
//		return session;
//	}
//
//	public void setSession(LepSession session) {
//		this.session = session;
//	}
//	
	
	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	


	public Long getSessionId() {
		return sessionId;
	}

	public void setSessionId(Long sessionId) {
		this.sessionId = sessionId;
	}

	public String getQuestion() {
		return question == null ? null : question.getValue();
	}

	public void setQuestion(String question) {
		this.question = new Text(question);
	}

	public String getAnswerA() {
		return answerA;
	}

	public void setAnswerA(String answerA) {
		this.answerA = answerA;
	}

	public String getAnswerB() {
		return answerB;
	}

	public void setAnswerB(String answerB) {
		this.answerB = answerB;
	}

	public String getAnswerC() {
		return answerC;
	}

	public void setAnswerC(String answerC) {
		this.answerC = answerC;
	}

	public String getAnswerD() {
		return answerD;
	}

	public void setAnswerD(String answerD) {
		this.answerD = answerD;
	}

	public String getAnswerE() {
		return answerE;
	}

	public void setAnswerE(String answerE) {
		this.answerE = answerE;
	}

	public String getCorrectAns() {
		return correctAns;
	}

	public void setCorrectAns(String correctAns) {
		this.correctAns = correctAns;
	}
    
 
  

}
