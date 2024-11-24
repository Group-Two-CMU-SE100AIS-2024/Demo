using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace Managing_coffee_shop.Module.BusinessObjects.ORMDataModel1
{

    public partial class HoadonCT
    {
        public HoadonCT(Session session) : base(session) { }
        public override void AfterConstruction()
        { 
            base.AfterConstruction();
            
        }
    }

}
