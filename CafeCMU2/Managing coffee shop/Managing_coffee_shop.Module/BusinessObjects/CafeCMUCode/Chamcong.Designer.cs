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

    [DefaultProperty("Giovao")]
    public partial class Chamcong : DevExpress.Persistent.BaseImpl.BaseObject
    {
        Nhanvien fNhanvienID;
        [Association(@"ChamcongReferencesNhanvien")]
        public Nhanvien NhanvienID
        {
            get { return fNhanvienID; }
            set { SetPropertyValue<Nhanvien>(nameof(NhanvienID), ref fNhanvienID, value); }
        }
        DateTime fGiovao;
        [DevExpress.ExpressApp.Model.ModelDefault("EditMask", "dd/MM/yyyy HH:mm"),
DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "{0:dd/MM/yyyy HH:mm}")]
        public DateTime Giovao
        {
            get { return fGiovao; }
            set { SetPropertyValue<DateTime>(nameof(Giovao), ref fGiovao, value); }
        }
        DateTime fGiora;
        [DevExpress.ExpressApp.Model.ModelDefault("EditMask", "dd/MM/yyyy HH:mm"),
DevExpress.ExpressApp.Model.ModelDefault("DisplayFormat", "{0:dd/MM/yyyy HH:mm}")]
        public DateTime Giora
        {
            get { return fGiora; }
            set { SetPropertyValue<DateTime>(nameof(Giora), ref fGiora, value); }
        }
    }

}
