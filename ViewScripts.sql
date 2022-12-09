
CREATE view vw_StudentSummary AS
select FORMAT(convert(numeric,s.Number), '000000') as 'Employee Number',
s.FirstName + ' ' + s.MidName+' '+ s.LastName as 'Full Name',
 REPLACE(CONVERT(CHAR(11), s.BirthDate, 106),' ',' - ')  as 'Birth Date',
  convert(varchar,DATEDIFF(year, GETDATE(), s.BirthDate)) + ' Years'  as 'Age',
   convert(int,(select count(map.Subject_ID) from SubjectStudents map where map.Student_ID=s.ID)) as 'No Of Subjects'
from Students S;

go