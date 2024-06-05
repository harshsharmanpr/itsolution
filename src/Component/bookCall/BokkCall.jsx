import React from "react";
import { CallBook } from "../../assets/assets";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function BokkCall() {
  return (
    <div>
      {CallBook.map((item, index) => {
        return (
          <div className="card5" key={index}>
            <div className="card-content">
              <h2>{item.tittle}</h2>
              <p>{item.paragrap}</p>
              <div>
                <div>
                  <MdEmail />
                  <h6>{item.emailTitle}</h6>
                  <h6>{item.email}</h6>
                </div>
                <div>
                  <IoCallSharp />
                  <h6>{item.phoneTilte}</h6>
                  <h6>{item.phone}</h6>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
