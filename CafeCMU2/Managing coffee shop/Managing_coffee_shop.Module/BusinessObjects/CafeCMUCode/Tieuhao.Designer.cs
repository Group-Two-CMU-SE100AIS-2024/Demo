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

    [DefaultProperty("Soluong")]
    public partial class Tieuhao : DevExpress.Persistent.BaseImpl.BaseObject
    {
        Sanpham fSanphamID;
        [Association(@"TieuhaoReferencesSanpham")]
        public Sanpham SanphamID
        {
            get { return fSanphamID; }
            set { SetPropertyValue<Sanpham>(nameof(SanphamID), ref fSanphamID, value); }
        }
        HoadonCT fHoadonCTID;
        [Association(@"TieuhaoReferencesHoadonCT")]
        public HoadonCT HoadonCTID
        {
            get { return fHoadonCTID; }
            set { SetPropertyValue<HoadonCT>(nameof(HoadonCTID), ref fHoadonCTID, value); }
        }
        double fSoluong;
        public double Soluong
        {
            get { return fSoluong; }
            set { SetPropertyValue<double>(nameof(Soluong), ref fSoluong, value); }
        }
        decimal fDongia;
        [DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "### ### ### ###"),
DevExpress.ExpressApp.Model.ModelDefault("EditMask", "### ### ### ###")]
        public decimal Dongia
        {
            get { return fDongia; }
            set { SetPropertyValue<decimal>(nameof(Dongia), ref fDongia, value); }
        }
    }

}
