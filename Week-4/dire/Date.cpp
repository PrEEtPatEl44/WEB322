/*
Name - Sukhpreet Singh
Student ID - 140337221
Mail id - ssingh1336@myseneca.ca
*/

/* Citation and Sources...
Final Project Milestone 1
Module: Date
Filename: Date.cpp
Version 1.0
Author	Sukhpreet Singh
Revision History
-----------------------------------------------------------
Date      Reason
2023/11/6 Preliminary release
2023/11/6 Debugged DMA
-----------------------------------------------------------
I have done all the coding by myself and only copied the code
that my professor provided to complete my workshops and assignments.
-----------------------------------------------------------*/

#include <iostream>
#include "Date.h"

namespace sdds {
	int  y, m, d;
	bool Date::validate() {
		bool result = true;
		d = ut.daysOfMon(this->month, this->year);
		if (this->year<2023 || this->year>max_year) {
			this->d_state = "Invalid year in date";
			this->d_state = 1;
			result = false;
		}
		else if (this->month < 1 || this->month>12) {
			this->d_state = "Invalid month in date";
			this->d_state = 2;
			result = false;
		}

		else if (this->day<1 || this->day>d) {
			this->d_state = "Invalid day in date";
			this->d_state = 3;
			result = false;
		}

		else {
			this->d_state.clear();
		}

		return result;

	}

	int Date::dateValue() const {
		return (this->year * 372) + (this->month * 31) + this->day;
	}

	Date::Date() {
		ut.getSystemDate(&y, &m, &d);
		this->year = y;
		this->month = m;
		this->day = d;
		this->formatted(true);
		this->d_state = "Invalid date value";
	}

	Date::Date(int y, int m, int d) {
		this->year = y;
		this->month = m;
		this->day = d;
		this->formatted(true);
		this->d_state = "Invalid date value";
	}

	Date& Date::operator = (Date& other) {
		this->year = other.year;
		this->month = other.month;
		this->day = other.day;
		return *this;
	}

	bool Date::operator==(Date& other) const {
		return this->dateValue() == other.dateValue() ? true : false;
	}

	bool Date::operator!=(Date& other) const {
		return this->dateValue() != other.dateValue() ? true : false;
	}

	bool Date::operator>(Date& other) const {
		return this->dateValue() > other.dateValue() ? true : false;
	}

	bool Date::operator<(Date& other) const {
		return this->dateValue() < other.dateValue() ? true : false;
	}

	bool Date::operator>=(Date& other) const {
		return this->dateValue() >= other.dateValue() ? true : false;
	}

	bool Date::operator<=(Date& other) const {
		return this->dateValue() <= other.dateValue() ? true : false;
	}

	const Status& Date::state() {
		return this->d_state;
	}

	Date& Date::formatted(bool val) {
		this->Formatted = val;
		return *this;
	}

	Date::operator bool() {
		return this->d_state;
	}

	std::ostream& Date::write(std::ostream& os)const {
		if (this->Formatted == true) {
			os << this->year << "/" << std::right << std::setw(2) << std::setfill('0') << this->month << "/" << std::right << std::setw(2) << std::setfill('0') << this->day;
		}
		else if (this->Formatted == false) {
			os << (this->year % 100) << std::right << std::setw(2) << std::setfill('0') << this->month << std::right << std::setw(2) << std::setfill('0') << this->day;
		}
		return os;
	}

	std::istream& Date::read(std::istream& is) {
		int val;
		is >> val;
		int length = 0;
		int temp = val;

		while (temp > 0) {
			temp /= 10;
			length++;
		}

		if (length == 2) {
			ut.getSystemDate(&y);
			this->year = y;
			this->month = 00;
			this->day = val;
		}
		else if (length == 4) {
			ut.getSystemDate(&y);
			this->year = y;
			this->month = val / 100;
			this->day = val % 100;
		}
		else if (length == 6) {
			this->year = (val / 10000) + 2000;
			int remainder = val % 10000;
			this->month = remainder / 100;
			this->day = remainder % 100;
		}
		else {
			std::cout << "Invalid date value";
			is.setstate(std::ios::badbit);
		}

		bool ok = validate();
		if (!ok) {
			is.setstate(std::ios::badbit);
		}

		return is;
	}


	std::ostream& operator <<(std::ostream& os, const Date& dt) {
		return dt.write(os);
	}

	std::istream& operator >>(std::istream& is, Date& dt) {
		return dt.read(is);
	}

}

