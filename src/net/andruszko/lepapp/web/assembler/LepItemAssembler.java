package net.andruszko.lepapp.web.assembler;

import net.andruszko.lepapp.web.entity.LepItem;

public class LepItemAssembler {
	public LepItem write(net.andruszko.lepapp.web.vo.LepItem lepItem){
		LepItem item = new LepItem();
		item.setAnswerA(lepItem.getAnswerA());
		item.setAnswerB(lepItem.getAnswerB());
		item.setAnswerC(lepItem.getAnswerC());
		item.setAnswerD(lepItem.getAnswerD());
		item.setAnswerE(lepItem.getAnswerE());
		item.setCorrectAns(lepItem.getCorrectAns());
		item.setPosition(lepItem.getPosition());
		item.setSubSectionId(lepItem.getSubSectionId());
		item.setQuestion(lepItem.getQuestion());
		
		
		
		return item;
	}
	
	public net.andruszko.lepapp.web.vo.LepItem read(LepItem lepItem){
		 net.andruszko.lepapp.web.vo.LepItem item = new  net.andruszko.lepapp.web.vo.LepItem();
		item.setAnswerA(lepItem.getAnswerA());
		item.setAnswerB(lepItem.getAnswerB());
		item.setAnswerC(lepItem.getAnswerC());
		item.setAnswerD(lepItem.getAnswerD());
		item.setAnswerE(lepItem.getAnswerE());
		item.setCorrectAns(lepItem.getCorrectAns());
		item.setPosition(lepItem.getPosition());
		item.setSubSectionId(lepItem.getSubSectionId());
		item.setQuestion(lepItem.getQuestion().getValue());
		
		
		
		return item;
	}
}
