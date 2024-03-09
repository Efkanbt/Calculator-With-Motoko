
//HESAP MAKİNESİ
//DEĞİŞKENLER
//OPERATÖRLER
//ASYNC METODU
//IF CONDITION

//CANISTER => AKILLI SÖZLEŞME

actor hesap_makinesi {
  var hucre : Int = 0;

  //FONKSİYON 
  //TOPLAMA
  public func toplama(s : Int) : async Int {
    hucre += s;
    hucre;
  };

  //ÇIKARMA
  public func cikarma(s : Int) : async Int {
    hucre -= s;
    hucre;
  };

  //ÇARPMA
  public func carpma(s : Int) : async Int {
    hucre *= s;
    hucre;
  };

  //BÖLME
  public func bolme(s : Int) : async ?Int {
    if (s == 0) {
      null;
    } else {
      hucre /= s;
      ?hucre;
    };
  };

  //TEMİZLE
  public func temizle() : async () {
    hucre := 0;
  };

};
