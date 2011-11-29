//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 in JDK 6 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.11.28 at 10:44:44 PM CET 
//


package net.andruszko.lepapp.web.vo;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the net.andruszko.lepapp.web.vo package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _LepItems_QNAME = new QName("net.andruszko.lepapp.web", "lepItems");
    private final static QName _UserInfo_QNAME = new QName("net.andruszko.lepapp.web", "userInfo");
    private final static QName _LepSessions_QNAME = new QName("net.andruszko.lepapp.web", "lepSessions");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: net.andruszko.lepapp.web.vo
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ContactVO }
     * 
     */
    public ContactVO createContactVO() {
        return new ContactVO();
    }

    /**
     * Create an instance of {@link LepItem }
     * 
     */
    public LepItem createLepItem() {
        return new LepItem();
    }

    /**
     * Create an instance of {@link LepSession }
     * 
     */
    public LepSession createLepSession() {
        return new LepSession();
    }

    /**
     * Create an instance of {@link UserInfo }
     * 
     */
    public UserInfo createUserInfo() {
        return new UserInfo();
    }

    /**
     * Create an instance of {@link LepSessions }
     * 
     */
    public LepSessions createLepSessions() {
        return new LepSessions();
    }

    /**
     * Create an instance of {@link User }
     * 
     */
    public User createUser() {
        return new User();
    }

    /**
     * Create an instance of {@link LepItems }
     * 
     */
    public LepItems createLepItems() {
        return new LepItems();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LepItems }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "net.andruszko.lepapp.web", name = "lepItems")
    public JAXBElement<LepItems> createLepItems(LepItems value) {
        return new JAXBElement<LepItems>(_LepItems_QNAME, LepItems.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UserInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "net.andruszko.lepapp.web", name = "userInfo")
    public JAXBElement<UserInfo> createUserInfo(UserInfo value) {
        return new JAXBElement<UserInfo>(_UserInfo_QNAME, UserInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LepSessions }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "net.andruszko.lepapp.web", name = "lepSessions")
    public JAXBElement<LepSessions> createLepSessions(LepSessions value) {
        return new JAXBElement<LepSessions>(_LepSessions_QNAME, LepSessions.class, null, value);
    }

}
