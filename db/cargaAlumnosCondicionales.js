module.exports = function(pool){
    pool.query("\
			INSERT INTO inscripciones VALUES('00001',14, true);\
			INSERT INTO inscripciones VALUES('00002',14, true);\
			INSERT INTO inscripciones VALUES('00003',14, true);\
            INSERT INTO inscripciones VALUES('00004',14, false);\
            INSERT INTO inscripciones VALUES('00005',14, false);"
        );
}