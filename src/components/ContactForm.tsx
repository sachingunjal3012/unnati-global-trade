'use client';

import { FormEvent, useState } from "react";

const quoteEmail = "info@unnatiglobaltrade.com";

export default function ContactForm({title,button}:{title:string,button:string}){
	const [draft, setDraft] = useState<{subject:string,body:string} | null>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const details = Array.from(formData.entries())
			.map(([label, value]) => `${label}: ${value}`)
			.join("\n");
		setDraft({subject:button,body:`${title}\n\n${details}`});
	}

	return <form className="card" onSubmit={handleSubmit}><h2>{title}</h2>{[["Name","name"],["Company Name","company"],["Business Email","email"],["Country","country"],["Phone / WhatsApp","phone"],["Message","message"]].map(([label,name])=><label key={name} style={{display:"block",marginTop:16,fontWeight:700,fontSize:14}}>{label}<input name={name} type={name==="email"?"email":"text"} required={name!=="phone"} placeholder={label} style={{display:"block",width:"100%",marginTop:7,padding:13,border:"1px solid #ddd5cc",borderRadius:10}}/></label>)}<button type="submit" className="btn btn-primary" style={{marginTop:20,cursor:"pointer"}}>{button}</button>{draft && <div role="status" aria-live="polite" style={{marginTop:18}}><p>Choose how to send your request:</p><div style={{display:"flex",flexWrap:"wrap",gap:10}}><a className="btn btn-light" href={`mailto:${quoteEmail}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Email app</a><a className="btn btn-light" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(quoteEmail)}&su=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`} target="_blank" rel="noreferrer">Gmail</a><a className="btn btn-light" href={`https://wa.me/917249238560?text=${encodeURIComponent(`${draft.subject}\n\n${draft.body}`)}`} target="_blank" rel="noreferrer">WhatsApp</a></div></div>}</form>
}