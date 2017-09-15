class Url < ApplicationRecord

    def encode
        key = bijective_encode(self.id)
        self.key = key
        self.save
        key
    end

    private
    def bijective_encode(i)
        return ALPHABET[0] if i == 0
        s = ''
        base = ALPHABET.length
        while i > 0
          s << ALPHABET[i.modulo(base)]
          i /= base
        end
        s.reverse
    end

    private
    ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(//)        
    
end
