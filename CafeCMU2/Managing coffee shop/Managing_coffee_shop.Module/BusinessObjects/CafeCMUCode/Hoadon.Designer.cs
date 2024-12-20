﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace Managing_coffee_shop.Module.BusinessObjects.ORMDataModel1
{

    [DefaultProperty("Soban")]
    public partial class Hoadon : DevExpress.Persistent.BaseImpl.BaseObject
    {
        string fSoban;
        public string Soban
        {
            get { return fSoban; }
            set { SetPropertyValue<string>(nameof(Soban), ref fSoban, value); }
        }
        DateTime fNgay;
        [DevExpress.ExpressApp.Model.ModelDefault("EditMask", "dd/MM/yyyy HH:mm"),
DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "{0:dd/MM/yyyy HH:mm}")]
        public DateTime Ngay
        {
            get { return fNgay; }
            set { SetPropertyValue<DateTime>(nameof(Ngay), ref fNgay, value); }
        }
        long fSophieu;
        [DevExpress.Persistent.Validation.RuleUniqueValue]
        public long Sophieu
        {
            get { return fSophieu; }
            set { SetPropertyValue<long>(nameof(Sophieu), ref fSophieu, value); }
        }
        [DevExpress.Xpo.DisplayName(@"Tổng tiền")]
        [DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "### ### ### ###")]
        public decimal TongTien
        {
            get
            {
                decimal tien = 0;
                foreach(HoadonCT item in HoadonCTs)
                {
                    tien += item.Thanhtien;
                }
                return tien;
            }
        }
     
        [Association(@"HoadonCTReferencesHoadon"), Aggregated]
        public XPCollection<HoadonCT> HoadonCTs { get { return GetCollection<HoadonCT>(nameof(HoadonCTs)); } }
    }

}
